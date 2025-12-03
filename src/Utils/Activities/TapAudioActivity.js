import React, { useState, useEffect, useMemo, useRef } from "react";
import "../../CSS/TapAudioActivity.css";
import shuffle from "../shuffle.js";

const TapAudioActivity = ({ data, onComplete }) => {
  const exercises = Array.isArray(data) ? data : [data];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentExercise = exercises[currentIndex] || {};

  const { title, audio, correctSequence = [], options = [], translation } = currentExercise;

  const audioRef = useRef(null);
  const [selectedWords, setSelectedWords] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  // Shuffle options each time the exercise changes
  const shuffledWords = useMemo(() => shuffle([...options]), [currentIndex, options]);

  const remainingWords = shuffledWords.filter((w) => !selectedWords.includes(w));

  const handleWordClick = (word) => {
    if (completed) return;
    if (selectedWords.length >= correctSequence.length) return;

    setSelectedWords((prev) => [...prev, word]);
  };

  useEffect(() => {
    if (selectedWords.length === correctSequence.length) {
      const correct = selectedWords.every((w, i) => w === correctSequence[i]);
      setIsCorrect(correct);
      setCompleted(true);
      setShowFeedback(true);
    }
  }, [selectedWords, correctSequence]);

  const handleNext = () => {
    if (onComplete) onComplete(isCorrect);

    if (currentIndex < exercises.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      resetActivity();
    } else {
      // Optionally notify parent activity that all exercises are finished
      console.log("🎉 All TapAudio exercises completed");
    }
  };

  const resetActivity = () => {
    setSelectedWords([]);
    setCompleted(false);
    setIsCorrect(false);
    setShowFeedback(false);
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div className="tapaudio__card">
      <h2 className="tapaudio__title">
        {title} ({currentIndex + 1}/{exercises.length})
      </h2>

      <div className="tapaudio__audio">
        <audio ref={audioRef} src={audio} preload="auto" />
        <button onClick={playAudio} className="tapaudio__play-button">
          ▶️ Play Audio
        </button>
      </div>

      <div className="tapaudio__selected">
        <h3>Your Sequence:</h3>
        <div className="tapaudio__selected-words">
          {selectedWords.map((w, i) => (
            <span key={i} className="tapaudio__word">{w}</span>
          ))}
        </div>
      </div>

      <div className="tapaudio__options">
        <h3>Tap Words:</h3>
        <div className="tapaudio__words-grid">
          {remainingWords.map((word, i) => (
            <button
              key={i}
              className="tapaudio__option"
              onClick={() => handleWordClick(word)}
              disabled={completed}
            >
              {word}
            </button>
          ))}
        </div>
      </div>

      {/* 🔥 Feedback / Continue block */}
      {showFeedback && (
        <div className="tapaudio__feedback">
          <p className={isCorrect ? "tapaudio__success" : "tapaudio__error"}>
            {isCorrect ? "🎉 Correct! Good job." : "❌ Incorrect."}
          </p>
          <p className="tapaudio__full-sentence">
            ✅ Sentence: {correctSequence.join(" ")}
          </p>
          {translation && (
            <p className="tapaudio__translation">💬 Translation: {translation}</p>
          )}

          <button className="tapaudio__next-btn" onClick={handleNext}>
            Continue →
          </button>
        </div>
      )}

      {/* Optional reset / replay */}
      <div className="tapaudio__controls">
        <button onClick={resetActivity} className="tapaudio__reset">
          🔄 Reset
        </button>
        <button onClick={playAudio} className="tapaudio__replay">
          🔊 Replay Audio
        </button>
      </div>
    </div>
  );
};

export default TapAudioActivity;
