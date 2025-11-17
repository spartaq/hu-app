import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";

import { Stepper, Step, StepLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

import DialogueActivity from "../../Utils/Activities/DialogueActivity";
import QuizActivity from "../../Utils/Activities/QuizActivity";
import SentenceOrdering from "../../Utils/Activities/SentenceOrdering";
import VocabMatch from "../../Utils/Activities/VocabMatch";
import GapFillActivity from "../../Utils/Activities/GapFillExercise";
import GrammarExerciseComp from "../../Utils/Activities/GrammarExerciseComp.js";
import ReadingActivity from "../../Utils/Activities/ReadingActivity.js";
import Videos from "../../Utils/Activities/VideoActivity.js";
import shuffle from "../../Utils/shuffle.js";

import "../../CSS/exercisesection.css";


const ExerciseSection = ({ type, data, id, scrollTargetRef, subtype }) => {
  const topRef = useRef(null);

  // state
  const [activityStarted, setActivityStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [activityEnded, setActivityEnded] = useState(false);

  const [activityData, setActivityData] = useState(
    type === "dialogue"
      ? data
      : Array.isArray(data)
      ? data
      : [data]
  );

  const [usedIds, setUsedIds] = useState([]);

  const autoStartTypes = useMemo(
    () => ["ordering", "vocab", "gapfill", "grammar", "reading", "video"],
    []
  );

  const scrollToTop = () => {
    const target = scrollTargetRef?.current;
    if (target) {
      const rect = target.getBoundingClientRect();
      const offset = 60;
      const top = rect.top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    } else {
      topRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ---- Extract data depending on activity type ----
  const getRawData = useCallback(() => {
    if (type === "dialogue") return data;
    if (type === "quiz") return data?.questions ?? [];
    if (type === "ordering") return Array.isArray(data) ? data : [];
    if (type === "vocab") return data?.pairs ?? [];
    if (type === "gapfill") return [data];
    if (type === "grammar") return data?.sentences ?? [];
    if (type === "reading") return Array.isArray(data) ? data : [];
    if (type === "video") return Array.isArray(data) ? data : [data];
    return [];
  }, [type, data]);

  // ---- Auto start for some types ----
  useEffect(() => {
    if (type === "dialogue") {
      setActivityData(data);        // dialogue is ALWAYS a single object
      setActivityStarted(true);
      return;
    }

    if (type === "video") {
      const normalized = Array.isArray(data) ? data : [data];
      setActivityData(normalized);
      setActivityStarted(true);
      return;
    }

    if (autoStartTypes.includes(type)) {
      const raw = getRawData();
      setActivityData(raw);
      setActivityStarted(true);
    }
  }, [type, data, autoStartTypes, getRawData]);

  // ---- Start button ----
  const startActivity = () => {
    if (type === "dialogue") {
      setActivityData(data); // not array
      setActivityStarted(true);
      setActivityEnded(false);
      scrollToTop();
      return;
    }

    const allData = getRawData();

    if (type === "vocab") {
      setActivityData(shuffle([...allData]));
    } else if (type === "gapfill") {
      setActivityData(shuffle([...allData]));
    } else if (type === "quiz") {
      const unused = allData.filter((item) => !usedIds.includes(item.id));
      const toUse = unused.slice(0, 10);
      setUsedIds((p) => [...p, ...toUse.map((q) => q.id)]);
      setActivityData(toUse);
    } else {
      const unused = allData.filter((item) => !usedIds.includes(item.id));
      const toUse = shuffle(unused).slice(0, 10);
      setUsedIds((p) => [...p, ...toUse.map((x) => x.id)]);
      setActivityData(toUse);
    }

    setActivityStarted(true);
    setActivityEnded(false);
    setCurrentIndex(0);
    setScore(0);
    scrollToTop();
  };

  // ---- Navigation ----
  const handleRestart = () => {
    if (type !== "vocab") setUsedIds([]);
    setActivityStarted(false);
    setActivityEnded(false);
    setScore(0);
    setCurrentIndex(0);
    scrollToTop();
  };

  const handleNext = () => {
    if (currentIndex + 1 < activityData.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setActivityEnded(true);
      scrollToTop();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  // ---- RENDER: Select proper activity component ----
  const ActivityComponent = () => {
    // --- Dialogue (SINGLE OBJECT) ---
    if (type === "dialogue") {
      if (!activityData || !Array.isArray(activityData.lines)) {
        return <p>No dialogue data</p>;
      }

      return (
        <div className="exercisesection__activity-box">
          <DialogueActivity data={activityData} lines={activityData.lines} />
        </div>
      );
    }

    // --- All other activities use arrays ---
    const current = activityData[currentIndex];
    if (!current) return <p>No data</p>;

    return (
      <div className="exercisesection__activity-box">
        {type === "quiz" && (
          <QuizActivity
            key={currentIndex}
            question={current}
            data={data}
            onAnswer={(result) => {
              if (result.correct) setScore((s) => s + 1);
              if (result.next) handleNext();
            }}
          />
        )}

        {type === "ordering" && (
          <SentenceOrdering
            data={current}
            onCorrect={() => setScore((s) => s + 1)}
          />
        )}

        {type === "vocab" && (
          <VocabMatch
            data={data}
            onCorrect={() => setScore((s) => s + 1)}
          />
        )}

        {type === "gapfill" && (
          <GapFillActivity
            data={current}
            onComplete={() => setScore((s) => s + 1)}
          />
        )}

        {type === "grammar" && (
          <GrammarExerciseComp
            data={getRawData()}
            title={data?.title}
            description={data?.description}
          />
        )}

        {type === "reading" && (
          <ReadingActivity
            data={current}
            title={current.readingcompTitle}
          />
        )}

        {type === "video" && (
          <Videos
            data={current}
            title={current.title}
          />
        )}
      </div>
    );
  };


  // ---- RENDER MAIN WRAPPER ----
  const hideNav = type === "dialogue"; // dialogue has no next/prev

  return (
    <div className="exercisesection">
      <div ref={topRef} />

      {!activityStarted && !autoStartTypes.includes(type) && type !== "dialogue" ? (
        <div className="exercisesection__start">
          <div className="exercisesection__quiz-card">
            <span className="exercisesection__title">{data?.title ?? "Activity"}</span>
            <button onClick={startActivity} className="exercisesection__start-button">
              Start
            </button>
          </div>
        </div>
      ) : activityEnded ? (
        <div className="exercisesection__score-card">
          <h2>Activity Completed!</h2>
          <p>Your score: {score} / {activityData.length}</p>
          <div className="newexerciseblock">
            <button onClick={handleRestart} className="exercisesection__restart-button">
              Restart
            </button>
            <button onClick={startActivity} className="exercisesection__restart-button">
              New Set
            </button>
          </div>
        </div>
      ) : (
        <>
          <ActivityComponent />

          {!hideNav && activityStarted && !activityEnded && activityData.length > 0 && (
            <div className="exercisesection__nav button-row">
              <div className="button-group">
                <button onClick={handleRestart} className="exercisesection__nav-button">
                  Reset
                </button>
              </div>

              <div className="button-group">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="exercisesection__nav-button exercisesection__nav-button--prev"
                >
                  Previous
                </button>

                <button
                  onClick={handleNext}
                  className="exercisesection__nav-button exercisesection__nav-button--next"
                >
                  {currentIndex + 1 === activityData.length ? "Finish" : "Next"}
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ExerciseSection;
