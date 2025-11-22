import React, { useState, useMemo } from 'react';
import "../../CSS/WordOrderActivity.css";

const SentenceOrdering = ({ data }) => {
  const sentenceItem = (Array.isArray(data) && data.length > 0 ? data[0] : data) || { sentence: "", quizTitle: "" };
  const sentenceText = sentenceItem.sentence || "";
  const correctWords = useMemo(() => sentenceText.split(" ").map((word, idx) => ({ word, id: idx })), [sentenceText]);

  const [shuffledWords, setShuffledWords] = useState(() => shuffle([...correctWords]));
  const [placedWords, setPlacedWords] = useState(Array(correctWords.length).fill(null));
  const [completed, setCompleted] = useState(false);

  function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  const handlePlaceWord = (wordObj) => {
    const nextBlankIdx = placedWords.findIndex(p => p === null);
    if (nextBlankIdx === -1) return;

    const newPlaced = [...placedWords];
    newPlaced[nextBlankIdx] = wordObj;
    setPlacedWords(newPlaced);

    if (newPlaced.every((word, idx) => word?.id === idx)) {
      setCompleted(true);
    }
  };

  const handleReset = () => {
    setShuffledWords(shuffle([...correctWords]));
    setPlacedWords(Array(correctWords.length).fill(null));
    setCompleted(false);
  };

  if (!sentenceText) return <p>Error: Invalid sentence data</p>;

  return (
    <div className="wordorder-card">
      <h2 className="wordorder-title">{sentenceItem.quizTitle}</h2>

      <div className="word-bank">
        {shuffledWords
          .filter(wordObj => !placedWords.some(p => p?.id === wordObj.id))
          .map(wordObj => (
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
            <span key={idx} className={`word-slot ${placedWord ? "filled" : "blank"}`}>
              {placedWord?.word || "_____" }
            </span>
          );
        })}
      </div>

      {completed && <p className="completion-message">✅ Correct! 🎉</p>}

      <button onClick={handleReset} className="reset-button">Reset</button>
    </div>
  );
};

export default SentenceOrdering;
