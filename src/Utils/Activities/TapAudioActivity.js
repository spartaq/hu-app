import React, { useState, useEffect, useMemo, useRef } from "react";
import "../../CSS/TapAudioActivity.css";
import shuffle from "../shuffle.js";

const TapAudioActivity = ({ data, onComplete }) => {
  const exercises = Array.isArray(data) ? data : [data];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentExercise = exercises[currentIndex];

  const { title, audio, correctSequence, options = [], translation } = currentExercise || {};

  const audioRef = useRef(null);

  const [selectedWords, setSelectedWords] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

 const shuffledWords = useMemo(() => {
  if (!options.length) return [];
  return shuffle([...options]);
}, [currentIndex, options]);

  const handleWordClick = (word) => {
    if (completed) return;
    // Prevent selecting extra distractor words
  if (selectedWords.length >= correctSequence.length) return;
    setSelectedWords((prev) => [...prev, word]);
  };

  const resetActivity = () => {
    setSelectedWords([]);
    setCompleted(false);
    setShowTranslation(false);
  };

  useEffect(() => {
    if (!correctSequence) return;

    if (selectedWords.length === correctSequence.length) {
      const isCorrect = selectedWords.every(
        (w, i) => w === correctSequence[i]
      );

      setCompleted(isCorrect);

      if (isCorrect) {
        if (currentIndex === exercises.length - 1) {
          if (onComplete) onComplete(true);
        } else {
          setTimeout(() => {
            setCurrentIndex((prev) => prev + 1);
            resetActivity();
          }, 900);
        }
      }
    }
  }, [selectedWords, correctSequence, currentIndex, exercises.length, onComplete]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const remainingWords = shuffledWords.filter(
    (w) => !selectedWords.includes(w)
  );

  return (
    <div className="tapaudio__card">
      <h2 className="tapaudio__title">
        {title} ({currentIndex + 1}/{exercises.length})
      </h2>

      {/* Translation toggle */}
      <button
        className="tapaudio__translation-toggle"
        onClick={() => setShowTranslation((prev) => !prev)}
      >
        {showTranslation ? "Hide translation" : "Show translation"}
      </button>

      {showTranslation && (
        <p className="tapaudio__translation">{translation}</p>
      )}

      {/* Audio player */}
      <div className="tapaudio__audio">
        <audio ref={audioRef} src={audio} preload="auto" />
        <button onClick={playAudio} className="tapaudio__play-button">
          ▶️ Play Audio
        </button>
      </div>

      {/* Selected words */}
      <div className="tapaudio__selected">
        <h3>Your Sequence:</h3>
        <div className="tapaudio__selected-words">
          {selectedWords.map((w, i) => (
            <span key={i} className="tapaudio__word">
              {w}
            </span>
          ))}
        </div>
      </div>

      {/* Word options */}
      <div className="tapaudio__options">
        <h3>Tap Words:</h3>
        <div className="tapaudio__words-grid">
          {remainingWords.map((word, i) => (
            <button
              key={i}
              className="tapaudio__option"
              onClick={() => handleWordClick(word)}
            >
              {word}
            </button>
          ))}
        </div>
      </div>

      {/* Feedback and controls */}
      <div className="tapaudio__feedback">
        {completed && (
          <p className="tapaudio__success">🎉 Correct! Good job.</p>
        )}

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
