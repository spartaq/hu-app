import React, { useState, useMemo, useEffect } from "react";
import "../../CSS/WordOrderActivity.css";
import ProgressBar from "../../Components/ProgressBar";

export default function SentenceOrdering({ data = {}, onComplete, onScore, onProgress }) {
  
  // Normalize exercises
  const exercises = Array.isArray(data.items)
    ? data.items
    : Array.isArray(data)
    ? data
    : [data];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [placedWords, setPlacedWords] = useState([]);
  const [shuffledWords, setShuffledWords] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  const currentExercise = exercises[currentIndex] || {};
  const { sentence = "", translation = "", instructions = "Put the words in order" } =
    currentExercise;

  // Split sentence into parts
  const correctWords = useMemo(
    () => sentence.split(" ").map((word, idx) => ({ word, id: idx })),
    [sentence]
  );

  // Shuffle helper
  function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // Reset state on sentence change
  useEffect(() => {
    if (!sentence) return;

    const shuffled = shuffle([...correctWords]);
    setShuffledWords(shuffled);
    setPlacedWords(Array(correctWords.length).fill(null));
    setCompleted(false);
    setShowTranslation(false);

    const progressValue = currentIndex / exercises.length;
    onProgress?.(progressValue);

  }, [currentIndex, sentence, correctWords.length, onProgress, exercises.length]);

  const handlePlaceWord = (wordObj) => {
    if (completed) return;

    const nextBlank = placedWords.findIndex((p) => p === null);
    if (nextBlank === -1) return;

    const updated = [...placedWords];
    updated[nextBlank] = wordObj;
    setPlacedWords(updated);

    // Check for correctness
    const isCorrect = updated.every((w, idx) => w?.id === idx);
    if (isCorrect) {
      setCompleted(true);
      setShowTranslation(true);
      onScore?.();
    }
  };

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      onComplete?.();
    }
  };

  const handleSkip = () => handleNext();

  if (!sentence) return <p>Error: Invalid sentence data</p>;

  return (
    <div className="wordorder-card activity-card">

      <h2 className="wordorder-title">{instructions}</h2>
{/* FIXED ProgressBar API */}
      <ProgressBar completed={currentIndex} total={exercises.length} />
      {/* Word bank */}
      
      <div className="word-bank">
        {shuffledWords
          .filter((w) => !placedWords.some((p) => p?.id === w.id))
          .map((wordObj) => (
            <button
              key={wordObj.id}
              onClick={() => handlePlaceWord(wordObj)}
              className="word-bank-button"
              disabled={completed}
            >
              {wordObj.word}
            </button>
          ))}
      </div>

      {/* Sentence slots */}
      <div className="ordered-sentence">
        {correctWords.map((_, idx) => {
          const placedWord = placedWords[idx];
          return (
            <span
              key={idx}
              className={`word-slot ${placedWord ? "filled" : "blank"}`}
            >
              {placedWord?.word || "____"}
            </span>
          );
        })}
      </div>

      {/* Completion UI */}
      {completed ? (
        <>
          <p className="completion-message">Correct!</p>
          {showTranslation && translation && (
            <p className="translation-text">{translation}</p>
          )}
          <button onClick={handleNext} className="next-button">
            Continue
          </button>
        </>
      ) : (
        <button onClick={handleSkip} className="skip-button">
          Skip
        </button>
      )}
    </div>
  );
}
