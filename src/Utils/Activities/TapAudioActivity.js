import React, { useState, useEffect, useMemo, useRef } from "react";
import "../../CSS/TapAudioActivity.css";
import shuffle from "../shuffle.js";

export default function TapAudioActivity({ data = {}, onComplete, onScore, onProgress }) {
  // Ensure items array
  const exercises = Array.isArray(data.items) ? data.items : [data];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const audioRef = useRef(null);

  const currentExercise = exercises[currentIndex] || {};
  const {
    title = "Tap Audio Exercise",
    audio,
    correctSequence = [],
    options = [],
    translation,
  } = currentExercise;

  // Shuffle options per exercise
  const shuffledWords = useMemo(() => shuffle([...options]), [currentIndex, options]);
  const remainingWords = shuffledWords.filter((w) => !selectedWords.includes(w));

  // Reset state when exercise changes
  useEffect(() => {
    setSelectedWords([]);
    setCompleted(false);
    setIsCorrect(false);
    setShowFeedback(false);
  }, [currentIndex]);

  // Update progress
  useEffect(() => {
    if (onProgress && exercises.length > 0) {
      onProgress(currentIndex / exercises.length);
    }
  }, [currentIndex, onProgress, exercises.length]);

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
      if (correct && onScore) onScore();
    }
  }, [selectedWords, correctSequence, onScore]);

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      if (onComplete) onComplete();
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

      {audio && (
        <div className="tapaudio__audio">
          <audio ref={audioRef} src={audio} preload="auto" />
          <button onClick={playAudio} className="tapaudio__play-button">
            ▶️ Play Audio
          </button>
        </div>
      )}

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

      <div className="tapaudio__controls">
        <button onClick={resetActivity} className="tapaudio__reset">
          🔄 Reset
        </button>
        {audio && (
          <button onClick={playAudio} className="tapaudio__replay">
            🔊 Replay Audio
          </button>
        )}
      </div>
    </div>
  );
}
