import React, { useState, useMemo, useEffect } from "react";
import "../../CSS/WordOrderActivity.css";
import ProgressBar from "../../Components/ProgressBar";

export default function SentenceOrdering({ data = {}, onComplete, onScore, onProgress }) {
  const exercises = data?.items || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [placedWords, setPlacedWords] = useState([]);
  const [shuffledWords, setShuffledWords] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [correctOrder, setCorrectOrder] = useState(false);

  const currentExercise = exercises[currentIndex] || {};
  const { sentence = "", translation = "", instructions = "", quizTitle = "" } = currentExercise;

  const correctWords = useMemo(
    () => sentence.split(" ").map((word, idx) => ({ word, id: idx })),
    [sentence]
  );

  function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  useEffect(() => {
    if (!sentence) return;
    const shuffled = shuffle([...correctWords]);
    setShuffledWords(shuffled);
    setPlacedWords(Array(correctWords.length).fill(null));
    setCompleted(false);
    setShowTranslation(false);
    setCorrectOrder(false);

    onProgress?.(currentIndex / exercises.length);
  }, [currentIndex, sentence, correctWords, onProgress]);

  const handlePlaceWord = (wordObj) => {
    if (completed) return;
    const nextBlank = placedWords.findIndex((p) => p === null);
    if (nextBlank === -1) return;

    const updated = [...placedWords];
    updated[nextBlank] = wordObj;
    setPlacedWords(updated);

    // Only check when all slots are filled
    if (updated.every((w) => w !== null)) {
      const isCorrect = updated.every((w, idx) => w.id === idx);
      setCompleted(true);
      setShowTranslation(true);
      setCorrectOrder(isCorrect);
      if (isCorrect) onScore?.();
    }
  };

  const handleReset = () => {
    setShuffledWords(shuffle([...correctWords]));
    setPlacedWords(Array(correctWords.length).fill(null));
    setCompleted(false);
    setShowTranslation(false);
    setCorrectOrder(false);
  };

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      onComplete?.({
        finalSentence: sentence,
        translation: translation
      });
    }
  };

  if (!sentence) return <p>Error: Invalid sentence data</p>;

  return (
    <div className="wordorder-card activity-card">
      <h2 className="wordorder-title">{instructions}</h2>
      {quizTitle && <h3 className="quiz-title">{quizTitle}</h3>}
      <ProgressBar completed={currentIndex} total={exercises.length} />

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

      {completed && correctOrder ? (
        <>
          <p className="completion-message">Correct!</p>
          {showTranslation && (
            <>
              <p className="hungarian-sentence">{sentence}</p>
              <p className="translation-text">{translation}</p>
            </>
          )}
          <button onClick={handleNext} className="next-button">
            Continue
          </button>
        </>
      ) : completed && !correctOrder ? (
        <>
          <p className="completion-message incorrect">Incorrect, try again!</p>
          <button onClick={handleReset} className="reset-button">
            Reset
          </button>
        </>
      ) : (
        <button onClick={handleReset} className="reset-button">
          Reset
        </button>
      )}
    </div>
  );
}
