import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";

import DialogueActivity from "../Utils/Activities/DialogueActivity.js";
import QuizActivity from "../Utils/Activities/QuizActivity.js";
import SentenceOrdering from "../Utils/Activities/SentenceOrdering.js";
import VocabMatchModal from "../Utils/Activities/VocabMatchModal.js";
import ReadingActivity from "../Utils/Activities/ReadingActivity.js";
import Videos from "../Utils/Activities/VideoActivity.js";
import ExplanationActivity from "../Utils/Activities/GrammarExplanationActivity.js";
import TapAudioActivity from "../Utils/Activities/TapAudioActivity";
import ImageMatchActivity from "../Utils/Activities/ImageMatchActivity.js";
import AudioWordMatchActivity from "../Utils/Activities/AudioWordMatchActivity.js";
import LessonCompleteActivity from "../Utils/Activities/LessonCompleteActivity.js";

import "../CSS/modalflow.css";

const ModalRender = ({ type, data, id, scrollTargetRef, subtype, quizData }) => {
  const topRef = useRef(null);

  const [activityStarted, setActivityStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [activityEnded, setActivityEnded] = useState(false);
  const [activityData, setActivityData] = useState(null);

  // Types that auto-start (no "Start" button)
  const autoStartTypes = useMemo(
    () => [
      "ordering",
      "vocabmatch",
      "reading",
      "video",
      "grammarexplanation",
      "imagematch",
      "audiowordmatch",
      "tapaudio",
      "lessoncomplete"
    ],
    []
  );

  const hideNav = ["dialogue", "vocabmatch", "grammarexplanation", "lessoncomplete"].includes(type);

  /** -------------------------
   * Scroll helper
   ------------------------- */
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

  /** -------------------------
   * Normalize data depending on activity type
   ------------------------- */
  const getRawData = useCallback(() => {
    switch (type) {
      case "dialogue":
        return data;
      case "grammarquiz":
        return data?.questions ?? [];
      case "ordering":
        return Array.isArray(data) ? data : [];
      case "vocabmatch":
        return Array.isArray(data) ? data : data?.pairs ?? [];
      case "reading":
        return Array.isArray(data) ? data : data?.paragraphs ?? [];
      case "video":
        return Array.isArray(data) ? data : [data];
      case "grammarexplanation":
        return data;
      case "tapaudio":
        return Array.isArray(data) ? data : [data];
      case "imagematch":
        return data;
      case "audiowordmatch":
        return data;
      case "lessoncomplete":
        return data;
      default:
        return [];
    }
  }, [type, data]);

  /** -------------------------
   * Auto-start behavior
   ------------------------- */
  useEffect(() => {
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
      setActivityData(raw);
      setActivityStarted(true);
    }

    if (type === "grammarquiz") {
      setActivityData(data?.questions ?? []);
    }
  }, [type, data, autoStartTypes, getRawData]);

  /** -------------------------
   * Start button handler
   ------------------------- */
  const startActivity = () => {
    const raw = getRawData();
    setActivityData(raw);
    setActivityStarted(true);
    setActivityEnded(false);
    setCurrentIndex(0);
    setScore(0);
    scrollToTop();
  };

  /** -------------------------
   * Restart the activity
   ------------------------- */
  const handleRestart = () => {
    setActivityStarted(false);
    setActivityEnded(false);
    setScore(0);
    setCurrentIndex(0);
    scrollToTop();
  };

  /** -------------------------
   * Go forward in multi-step flows
   ------------------------- */
  const handleNext = () => {
    // LessonComplete should not trigger score screen
    if (type === "lessoncomplete") {
      return;
    }

    // Non-vocabmatch multi-item activities
    if (
      type !== "vocabmatch" &&
      Array.isArray(activityData) &&
      currentIndex + 1 < activityData.length
    ) {
      setCurrentIndex((prev) => prev + 1);
      return;
    }

    // End of activity → show score screen
    if (type !== "vocabmatch") {
      setActivityEnded(true);
      scrollToTop();
    }
  };

  /** -------------------------
   * Go backwards
   ------------------------- */
  const handlePrev = () => {
    if (type !== "vocabmatch" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  /** -------------------------
   * Render activity
   ------------------------- */
  const ActivityComponent = () => {
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

    if (type === "grammarexplanation") {
      return (
        <div className="exercisesection__activity-box">
          <ExplanationActivity data={activityData} />
        </div>
      );
    }

    if (!activityData || (Array.isArray(activityData) && activityData.length === 0)) {
      return <p>No data available</p>;
    }

    return (
      <div className="exercisesection__activity-box">
        {type === "grammarquiz" && (
          <QuizActivity
            question={activityData[currentIndex]}
            data={data}
            onAnswer={(result) => {
              if (result && result.next) {
                if (result.correct) setScore((s) => s + 1);
                handleNext();
              }
            }}
          />
        )}

        {type === "tapaudio" && (
          <TapAudioActivity data={activityData[currentIndex] || activityData} onComplete={() => {}} />
        )}

        {type === "imagematch" && (
          <ImageMatchActivity
            data={activityData[currentIndex] || activityData}
            showTranslationToggle={true}
            onComplete={() => {}}
          />
        )}

        {type === "audiowordmatch" && (
          <AudioWordMatchActivity
            data={data}
            showTranslationToggle={true}
            onComplete={() => {}}
          />
        )}

        {type === "ordering" && (
          <SentenceOrdering
            data={activityData[currentIndex]}
            onCorrect={() => setScore((s) => s + 1)}
          />
        )}

        {type === "vocabmatch" && (
          <VocabMatchModal
            pairs={Array.isArray(activityData) ? activityData : data?.pairs}
            title={data?.quizTitle}
          />
        )}

        {type === "reading" && (
          <ReadingActivity
            data={{ ...data, paragraphs: activityData }}
            title={data?.readingcompTitle}
          />
        )}

        {type === "video" && (
          <Videos
            data={activityData[currentIndex]}
            title={activityData[currentIndex]?.title}
          />
        )}

        {type === "lessoncomplete" && (
          <LessonCompleteActivity
            data={data}
          />
        )}
      </div>
    );
  };

  /** -------------------------
   * MAIN RENDER
   ------------------------- */
  return (
    <div className="exercisesection">
      <div ref={topRef} />

      {/* START SCREEN (only for types that do not auto-start) */}
      {!activityStarted &&
      !autoStartTypes.includes(type) &&
      type !== "dialogue" ? (
        <div className="exercisesection__start">
          <div className="exercisesection__quiz-card">
            <span className="exercisesection__title">{data?.title ?? "Activity"}</span>
            <button onClick={startActivity} className="exercisesection__start-button">
              Start
            </button>
          </div>
        </div>
      ) : activityEnded && type !== "lessoncomplete" ? (
        /** SCORE SCREEN (NOT for lessoncomplete!) */
        <div className="exercisesection__score-card">
          <h2>Activity Completed!</h2>
          <p>
            Your score: {score} /{" "}
            {Array.isArray(activityData) ? activityData.length : 0}
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

          {/* NAVIGATION (hidden for certain activity types) */}
          {!hideNav &&
            activityStarted &&
            !activityEnded &&
            Array.isArray(activityData) &&
            activityData.length > 0 && (
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

export default ModalRender;
