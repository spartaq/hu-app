import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";

import DialogueActivity from "./Activities/DialogueActivity.js";
import QuizActivity from "./Activities/QuizActivity.js";
import SentenceOrdering from "./Activities/SentenceOrdering.js";
import VocabMatch from "./Activities/VocabMatch.js";
import GrammarExerciseComp from "./Activities/GrammarExerciseComp.js";
import ReadingActivity from "./Activities/ReadingActivity.js";
import Videos from "./Activities/VideoActivity.js";
import ExplanationActivity from "./Activities/GrammarExplanationActivity.js";
import shuffle from "./shuffle.js";

import "../CSS/exercisesection.css";

const ExerciseSection = ({ type, data, id, scrollTargetRef, subtype }) => {
  console.log("ExerciseSection props:", { type, data, id, subtype });
  const topRef = useRef(null);

  const [activityStarted, setActivityStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [activityEnded, setActivityEnded] = useState(false);
  const [activityData, setActivityData] = useState(null);
  const [usedIds, setUsedIds] = useState([]);

  const autoStartTypes = useMemo(
    () => ["ordering", "vocab", "grammar", "reading", "video", "explanation"],
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

  const getRawData = useCallback(() => {
    let raw;
    if (type === "dialogue") raw = data;
    else if (type === "quiz") raw = data?.questions ?? [];
    else if (type === "ordering") raw = Array.isArray(data) ? data : [];
    else if (type === "vocab") raw = Array.isArray(data) ? data : data?.pairs ?? [];
    else if (type === "grammar") raw = data?.sentences ?? [];
    else if (type === "reading") raw = Array.isArray(data) ? data : data?.paragraphs ?? [];
    else if (type === "video") raw = Array.isArray(data) ? data : [data];
    else if (type === "explanation") raw = data;
    else raw = [];
    console.log("getRawData", type, raw);
    return raw;
  }, [type, data]);

  useEffect(() => {
    console.log("useEffect triggered, type:", type, "data:", data);
    if (type === "dialogue" || type === "explanation") {
      setActivityData(data);
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
      console.log("Auto-start raw data:", raw);
      setActivityData(raw);
      setActivityStarted(true);
    }

    if (type === "quiz") {
      console.log("Quiz initial data:", data?.questions);
      setActivityData(data?.questions ?? []);
    }
  }, [type, data, autoStartTypes, getRawData]);

  const startActivity = () => {
    console.log("startActivity called with type:", type, "data:", data);
    if (type === "dialogue") {
      setActivityData(data);
      setActivityStarted(true);
      setActivityEnded(false);
      scrollToTop();
      return;
    }

    const allData = getRawData();
    console.log("startActivity allData:", type, allData);

    if (type === "vocab") {
      setActivityData(allData);
      console.log("Vocab activityData set:", allData);
    } else if (type === "quiz") {
      const unused = allData.filter((item) => !usedIds.includes(item.id));
      const toUse = unused.slice(0, 10);
      setUsedIds((p) => [...p, ...toUse.map((q) => q.id)]);
      setActivityData(toUse);
      console.log("Quiz toUse data:", toUse);
    } else {
      const unused = allData.filter((item) => !usedIds.includes(item.id));
      const toUse = shuffle(unused).slice(0, 10);
      setUsedIds((p) => [...p, ...toUse.map((x) => x.id)]);
      setActivityData(toUse);
      console.log("Other activityData set:", toUse);
    }

    setActivityStarted(true);
    setActivityEnded(false);
    setCurrentIndex(0);
    setScore(0);
    scrollToTop();
  };

  const handleRestart = () => {
    console.log("handleRestart called");
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

  const ActivityComponent = () => {
    console.log("ActivityComponent render, type:", type, "activityData:", activityData);
    if (type === "dialogue") {
      if (!activityData || !Array.isArray(activityData.lines)) {
        console.log("No dialogue data found");
        return <p>No dialogue data</p>;
      }
      return (
        <div className="exercisesection__activity-box">
          <DialogueActivity data={activityData} lines={activityData.lines} />
        </div>
      );
    }

    if (type === "explanation") {
      return (
        <div className="exercisesection__activity-box">
          <ExplanationActivity data={activityData} />
        </div>
      );
    }

    if (!activityData || (Array.isArray(activityData) && activityData.length === 0)) {
      console.log("No activityData available for type:", type);
      return <p>No data available</p>;
    }

    const current = activityData[currentIndex];
    console.log("Current item:", type, current);
    console.log("Activity data length:", activityData.length);

    if (!current) return <p>No data</p>;

    return (
      <div className="exercisesection__activity-box">
        {type === "quiz" && (
          <QuizActivity
            question={current}
            data={data}
            onAnswer={(result) => {
              if (result && result.next) {
                if (result.correct) {
                  setScore((s) => s + 1);
                }
                handleNext();
              }
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
          data={data?.pairs ?? activityData} // use modal pairs if subtype undefined
          onCorrect={() => setScore((s) => s + 1)}
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
            data={{ ...data, paragraphs: activityData }}
            title={data?.readingcompTitle}
          />
        )}

        {type === "video" && <Videos data={current} title={current.title} />}
      </div>
    );
  };

  const hideNav =
    type === "dialogue" ||
    type === "vocab" ||
    type === "grammar" ||
    type === "explanation";

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
          <p>
            Your score: {score} / {activityData.length}
          </p>
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
