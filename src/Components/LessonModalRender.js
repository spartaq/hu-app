import React, { useState, useEffect, useRef, useCallback } from "react";

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
import SayAloud from "../Utils/Activities/SayAloud.js";
import AlphabetActivity from "../Utils/Activities/Alphabet/AlphabetActivity.js";

import "../CSS/LessonModalRender.css";

const ModalRender = ({ type, data, id, scrollTargetRef }) => {
  const topRef = useRef(null);

  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
  const [ended, setEnded] = useState(false);
  const [score, setScore] = useState(0);

  // -------------------------------------------------------
  // Activity map
  // -------------------------------------------------------
  const ActivityMap = {
    sounds: AlphabetActivity,
    dialogue: DialogueActivity,
    grammarquiz: QuizActivity,
    ordering: SentenceOrdering,
    vocabmatch: VocabMatchModal,
    reading: ReadingActivity,
    video: Videos,
    grammarexplanation: ExplanationActivity,
    tapaudio: TapAudioActivity,
    imagematch: ImageMatchActivity,
    sayaloud: SayAloud,
    audiowordmatch: AudioWordMatchActivity,
    lessoncomplete: LessonCompleteActivity,
  };

  const ActivityComp = ActivityMap[type];

  // -------------------------------------------------------
  // Normalize data into an array
  // -------------------------------------------------------
  const normalize = useCallback(() => {
    if (!data) return [];

    // Multi-item
    if (data.data?.items && Array.isArray(data.data.items)) {
      return data.data.items;
    }

    // Single-item
    if (data.data && typeof data.data === "object") {
      return [data.data];
    }

    console.warn("Unrecognized data format:", data);
    return [];
  }, [data]);

  // -------------------------------------------------------
  // Reset on type/id change
  // -------------------------------------------------------
  useEffect(() => {
    const arr = normalize();
    setItems(arr);
    setIndex(0);
    setEnded(false);
    setScore(0);
    scrollToTop();
  }, [type, id, normalize]);

  // -------------------------------------------------------
  // Scroll behavior
  // -------------------------------------------------------
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

  // -------------------------------------------------------
  // Callbacks
  // -------------------------------------------------------
  const handleNext = useCallback(() => {
    if (index < items.length - 1) {
      setIndex((i) => i + 1);
    } else {
      setEnded(true);
    }
  }, [index, items.length]);

  const handleAddScore = useCallback(() => {
    setScore((s) => s + 1);
  }, []);

  const handleComplete = useCallback(() => {
    setEnded(true);
  }, []);

  // -------------------------------------------------------
  // Early exit for unknown type
  // -------------------------------------------------------
  if (!ActivityComp) {
    return <p>Unknown activity type: {type}</p>;
  }

  // -------------------------------------------------------
  // Ended Screen (except lessoncomplete)
  // -------------------------------------------------------
  if (ended && type !== "lessoncomplete") {
    return (
      <div className="lesson-modal">
        <div ref={topRef} />
        <div className="lesson-modal__score-card">
          <h2>Activity Completed!</h2>
          <p>
            Score: {score} / {items.length}
          </p>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------
  // Activity data
  // -------------------------------------------------------
  
  const activityProps = {
    data: data.data,
    items,
    index,
    total: items.length,
    onNext: handleNext,
    onScore: handleAddScore,
    onComplete: handleComplete,
    meta: data,
    title: data?.title,
    image: data?.image,
  };

  // -------------------------------------------------------
  // Render
  // -------------------------------------------------------
  return (
    <div className="lesson-modal">
      
      <div ref={topRef} />

    
      <div className="lesson-modal__activity-box">
        <ActivityComp {...activityProps} />
      </div>
    </div>
  );
};

export default ModalRender;
