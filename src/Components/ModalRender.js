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

  /**
   * Normalize raw data for each activity type
   */
  const normalizeData = useCallback(() => {
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

      // audiowordmatch: accept multiple shapes and always return array
      case "audiowordmatch":
        if (Array.isArray(data)) return data;
        if (data?.words && Array.isArray(data.words)) return data.words;
        if (data?.items && Array.isArray(data.items)) return data.items;
        if (data?.data && Array.isArray(data.data)) return data.data;
        return [];

      // For single-item activities, wrap in array for consistent indexing
      case "grammarexplanation":
      case "tapaudio":
      case "imagematch":
      case "lessoncomplete":
        return data ? (Array.isArray(data) ? data : [data]) : [];

      default:
        return [];
    }
  }, [type, data]);

  /**
   * Reset and auto-start when type or id changes
   */
  useEffect(() => {
    const raw = normalizeData();

    setActivityData(raw);
    setCurrentIndex(0);
    setActivityEnded(false);
    setScore(0);

    scrollToTop();
  }, [type, id, normalizeData]);

  /**
   * Scroll helper
   */
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

  /**
   * Advancement / scoring
   */
  const handleNext = useCallback(() => {
    if (Array.isArray(activityData) && currentIndex < activityData.length - 1) {
      setCurrentIndex(i => i + 1);
      return;
    }
    setActivityEnded(true);
  }, [activityData, currentIndex]);

  const handleAddScore = useCallback(() => {
    setScore(s => s + 1);
  }, []);

  /**
   * Component lookup (keeps same mapping)
   */
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
    return <p>Unknown activity type: {type}</p>;
  }

  /**
   * Completed screen (except lessoncomplete)
   */
  if (activityEnded && type !== "lessoncomplete") {
    return (
      <div className="exercisesection">
        <div ref={topRef} />
        <div className="exercisesection__score-card">
          <h2>Activity Completed!</h2>
          <p>
            Your score: {score} / {Array.isArray(activityData) ? activityData.length : 0}
          </p>
        </div>
      </div>
    );
  }

  /**
   * Build compatibility props for components that expect different shapes.
   * - Most components get a single item via `data` (currentData)
   * - Some components expect the full array (audiowordmatch, vocabmatch)
   * - Some components expect specific props (QuizActivity expects `question`, `onAnswer`)
   */
  const currentData = Array.isArray(activityData) ? activityData[currentIndex] : activityData;

  // base props common to many activities
  const baseProps = {
    index: currentIndex,
    total: Array.isArray(activityData) ? activityData.length : null,
    // generic callbacks - components will use their expected callback names below
    __onNextInternal: handleNext,
    __onScoreInternal: handleAddScore,
  };

  // We'll build the final props object depending on type
  const propsForActivity = { ...baseProps };

  // Default: pass single-item as `data`
  propsForActivity.data = currentData;

  // --- Special-casing to preserve original interfaces ---

  // QuizActivity expects: question, data (original full data), quizTitle, onAnswer
  if (type === "grammarquiz") {
    propsForActivity.question = currentData;
    propsForActivity.data = data; // full original data object (contains quizTitle, etc)
    propsForActivity.quizTitle = data?.quizTitle;
    propsForActivity.onAnswer = (result) => {
      // replicate original behavior:
      // if result.next && not last -> next, else if last -> finish
      if (result?.next && currentIndex < (activityData?.length ?? 0) - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else if (currentIndex >= (activityData?.length ?? 0) - 1) {
        setActivityEnded(true);
      }
      // optional: award score if result.correct (if your QuizActivity returns that)
      if (result?.correct) handleAddScore();
    };

    // prevent baseProps interfering
    delete propsForActivity.onNext;
  }

  // ImageMatchActivity originally expected:
  // data={activityData[currentIndex] || activityData}
  // showTranslationToggle, onComplete
  if (type === "imagematch") {
    propsForActivity.data = currentData ?? activityData;
    propsForActivity.showTranslationToggle = true;
    propsForActivity.onComplete = () => {
      // move to next item (or finish)
      if (Array.isArray(activityData) && currentIndex < activityData.length - 1) {
        setCurrentIndex(i => i + 1);
      } else {
        setActivityEnded(true);
      }
    };
  }

if (type === "tapaudio") {
  // Pass the full array to allow the component to handle multiple exercises
  propsForActivity.data = activityData;

  // Provide onComplete so ModalRender knows when all TapAudio exercises finished
  propsForActivity.onComplete = () => {
    setActivityEnded(true);
  };

  // Provide onScore to accumulate score for each correct exercise
  propsForActivity.onScore = handleAddScore;

  // Provide onProgress to update progress bar
  propsForActivity.onProgress = (index) => setCurrentIndex(index);

  // Remove single-item props since it's handling the array internally
  delete propsForActivity.index;
  delete propsForActivity.total;
}

  // SentenceOrdering expects `data` and onComplete
  if (type === "ordering") {
    propsForActivity.data = currentData;
    propsForActivity.onComplete = () => {
      if (Array.isArray(activityData) && currentIndex < activityData.length - 1) {
        setCurrentIndex(i => i + 1);
      } else {
        setActivityEnded(true);
      }
    };
  }

  // VocabMatch: expects pairs array and title
  if (type === "vocabmatch") {
    propsForActivity.pairs = Array.isArray(activityData) ? activityData : data?.pairs ?? [];
    propsForActivity.title = data?.quizTitle;
    // some VocabMatch components auto-handle progression; if yours needs onComplete add it:
    propsForActivity.onComplete = () => {
      setActivityEnded(true);
    };
    propsForActivity.onProgress = (progress) => setCurrentIndex(progress * activityData.length);
    // don't pass single-item data
    delete propsForActivity.data;
  }

  // Reading: expects full paragraphs array in `data` shape
  if (type === "reading") {
    propsForActivity.data = { ...data, paragraphs: activityData };
    propsForActivity.title = data?.readingcompTitle;
  }

  // Video: expects a single video object (we keep that)
  if (type === "video") {
    propsForActivity.data = currentData;
    propsForActivity.title = currentData?.title ?? data?.title;
  }

  // AudioWordMatch: expects an array to iterate
  if (type === "audiowordmatch") {
    propsForActivity.data = activityData; // full array
    // If AudioWordMatch used onComplete/onAnswer, give it onComplete mapped
    propsForActivity.onComplete = () => {
      setActivityEnded(true);
    };
    propsForActivity.onProgress = (progress) => setCurrentIndex(progress * activityData.length);
    // remove item-scoped props
    propsForActivity.index = null;
    propsForActivity.total = null;
  }

  // Lesson complete: pass original data
  if (type === "lessoncomplete") {
    propsForActivity.data = data;
  }

  // Grammar explanation / Dialogue etc: keep default `data = currentData` (dialogue expects full object)
  if (type === "dialogue") {
    propsForActivity.data = data;
    propsForActivity.lines = data?.lines ?? [];
  }

  // Map generic internal callbacks to the names components expect when possible:
  // If a component uses onNext, map it to __onNextInternal
  // But to keep minimal intrusion we only map where needed:
  // - For components that accept `onComplete` we already set it above.
  // - For those that accept `onAnswer` we've set that in grammarquiz.

  return (
    <div className="exercisesection">
      <div ref={topRef} />
      {Array.isArray(activityData) && activityData.length > 1 && (
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
