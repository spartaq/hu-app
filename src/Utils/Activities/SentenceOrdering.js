import React, { useState, useMemo, useEffect } from "react";
import "../../CSS/WordOrderActivity.css";

export default function SentenceOrdering({ data = {}, onComplete, onScore, onProgress }) {
  const exercises = Array.isArray(data.items) ? data.items : [data]; // support multiple exercises
  const [currentIndex, setCurrentIndex] = useState(0);
  const [placedWords, setPlacedWords] = useState([]);
  const [shuffledWords, setShuffledWords] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  const currentExercise = exercises[currentIndex] || {};
  const { sentence = "", translation = "", quizTitle = "", instructions = "" } = currentExercise;

  // Split sentence into words with ids
  const correctWords = useMemo(() => sentence.split(" ").map((word, idx) => ({ word, id: idx })), [sentence]);

  // Shuffle words and reset state when exercise changes
  useEffect(() => {
    if (!sentence) return;

    const shuffled = shuffle([...correctWords]);
    setShuffledWords(shuffled);
    setPlacedWords(Array(correctWords.length).fill(null));
    setCompleted(false);
    setShowTranslation(false);

    if (onProgress) onProgress(currentIndex / exercises.length);
  }, [sentence, currentIndex, correctWords, onProgress, exercises.length]);

  function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  const handlePlaceWord = (wordObj) => {
    if (completed) return;

    const nextBlankIdx = placedWords.findIndex((p) => p === null);
    if (nextBlankIdx === -1) return;

    const updated = [...placedWords];
    updated[nextBlankIdx] = wordObj;
    setPlacedWords(updated);

    // Check if sentence is correct
    const isCorrect = updated.every((w, idx) => w?.id === idx);
    if (isCorrect) {
      setCompleted(true);
      setShowTranslation(true);
      if (onScore) onScore();
    }
  };

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      if (onComplete) onComplete();
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  if (!sentence) return <p>Error: Invalid sentence data</p>;

  return (
    <div className="wordorder-card">
      
      <h2 className="wordorder-title">{instructions}</h2>

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
            <span key={idx} className={`word-slot ${placedWord ? "filled" : "blank"}`}>
              {placedWord?.word || "____"}
            </span>
          );
        })}
      </div>

      {/* Completion UI */}
      {completed && (
        <>
          <p className="completion-message">✅ Correct! 🎉</p>
          {showTranslation && translation && <p className="translation-text">💬 {translation}</p>}
          <button onClick={handleNext} className="next-button">
            Continue
          </button>
        </>
      )}

      {/* Optional skip */}
      {!completed && (
        <button onClick={handleSkip} className="skip-button">
          Skip
        </button>
      )}
    </div>
  );
}
