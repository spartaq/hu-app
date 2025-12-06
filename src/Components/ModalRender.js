import React, { useState, useEffect, useCallback, useRef } from "react";

import DialogueActivity from "../Utils/Activities/DialogueActivity.js";
import QuizActivity from "../Utils/Activities/QuizActivity.js";
import SentenceOrdering from "../Utils/Activities/SentenceOrdering.js";
import VocabMatchModal from "../Utils/Activities/VocabMatchModal.js";
import ReadingActivity from "../Utils/Activities/ReadingActivity.js";
import Videos from "../Utils/Activities/VideoActivity.js";
import ExplanationActivity from "../Utils/Activities/GrammarExplanationActivity.js";
import TapAudioActivity from "../Utils/Activities/TapAudioActivity.js";
import ImageMatchActivity from "../Utils/Activities/ImageMatchActivity.js";
import AudioWordMatchActivity from "../Utils/Activities/AudioWordMatchActivity.js";
import LessonCompleteActivity from "../Utils/Activities/LessonCompleteActivity.js";

import "../CSS/modalflow.css";

const ModalRender = ({ type, data, id, scrollTargetRef }) => {
  const topRef = useRef(null);

  const [activityData, setActivityData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activityEnded, setActivityEnded] = useState(false);
  const [score, setScore] = useState(0);

  // 1️⃣ Normalize data
  const normalizeData = useCallback(() => {
    console.log("Normalizing data for type:", type);
    if (!data) return [];
    if (data.data && data.data.items && Array.isArray(data.data.items)) {
      if (type === 'vocabmatch' || type === 'audiowordmatch' || type === 'tapaudio') {
        console.log("Wrapping items into single activity array:", data.data.items);
        return [data.data.items];
      } else {
        console.log("Data.data.items array found:", data.data.items);
        return data.data.items;
      }
    } else if (data.data) {
      console.log("Single data object found:", data.data);
      return [data.data];
    }
    if (data.items && Array.isArray(data.items)) {
      console.log("Data items array found:", data.items);
      return data.items;
    }
    if (Array.isArray(data)) {
      console.log("Data is already an array:", data);
      return data;
    }
    console.log("Wrapping single item into array:", data);
    return [data];
  }, [data, type]);

  // 2️⃣ Reset when type or id changes
  useEffect(() => {
    const raw = normalizeData();
    console.log("Setting activity data:", raw);
    setActivityData(raw);
    setCurrentIndex(0);
    setActivityEnded(false);
    setScore(0);
    scrollToTop();
  }, [type, id, normalizeData]);

  const scrollToTop = () => {
    const target = scrollTargetRef?.current;
    if (target) {
      const offset = 60;
      const rect = target.getBoundingClientRect();
      const top = rect.top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    } else {
      topRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNext = useCallback(() => {
    console.log("handleNext called. currentIndex:", currentIndex);
    if (currentIndex < activityData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      console.log("All activities completed");
      setActivityEnded(true);
    }
  }, [activityData, currentIndex]);

  const handleAddScore = useCallback(() => {
    setScore((s) => {
      const newScore = s + 1;
      console.log("Score incremented:", newScore);
      return newScore;
    });
  }, []);

  const ActivityMap = {
    dialogue: DialogueActivity,
    grammarquiz: QuizActivity,
    ordering: SentenceOrdering,
    vocabmatch: VocabMatchModal,
    reading: ReadingActivity,
    video: Videos,
    grammarexplanation: ExplanationActivity,
    tapaudio: TapAudioActivity,
    imagematch: ImageMatchActivity,
    audiowordmatch: AudioWordMatchActivity,
    lessoncomplete: LessonCompleteActivity,
  };

  const ActivityComp = ActivityMap[type];
  if (!ActivityComp) {
    console.warn("Unknown activity type:", type);
    return <p>Unknown activity type: {type}</p>;
  }

  if (activityEnded && type !== "lessoncomplete") {
    console.log("Activity ended for type:", type);
    return (
      <div className="exercisesection">
        <div ref={topRef} />
        <div className="exercisesection__score-card">
          <h2>Activity Completed!</h2>
          <p>
            Your score: {score} / {activityData.length}
          </p>
        </div>
      </div>
    );
  }

  const currentData = activityData[currentIndex];
  console.log("Rendering activity type:", type);
  console.log("Current index:", currentIndex);
  console.log("Current data:", currentData);

  const propsForActivity = {
    data: currentData,
    items: activityData,
    index: currentIndex,
    total: activityData.length,
    onNext: handleNext,
    onScore: handleAddScore,
    onComplete: () => {
      console.log("onComplete called for type:", type);
      setActivityEnded(true);
    },
    onProgress: type === 'vocabmatch' || type === 'audiowordmatch' || type === 'tapaudio' ? () => {} : (i) => {
      console.log("onProgress called with index:", i);
      setCurrentIndex(i);
    },
    meta: data,
  };

  // Per-component adjustments
  if (type === "dialogue") propsForActivity.lines = currentData?.lines || [];
  if (type === "grammarquiz") {
    propsForActivity.question = currentData;
    propsForActivity.quizTitle = data?.quizTitle;
  }
  if (type === "vocabmatch") propsForActivity.title = data?.title || data?.quizTitle;
  if (type === "reading") propsForActivity.title = data?.readingcompTitle;
  if (type === "video") propsForActivity.title = currentData?.title || data?.title;
  if (type === "lessoncomplete") propsForActivity.data = data;

  console.log("Props for activity component:", propsForActivity);

  return (
    <div className="exercisesection">
      <div ref={topRef} />
      {activityData.length > 1 && (
        <div className="exercisesection__progress-bar">
          <div
            className="exercisesection__progress-bar-fill"
            style={{ width: `${(currentIndex / activityData.length) * 100}%` }}
          />
        </div>
      )}
      <div className="exercisesection__activity-box">
        <ActivityComp {...propsForActivity} />
      </div>
    </div>
  );
};

export default ModalRender;
