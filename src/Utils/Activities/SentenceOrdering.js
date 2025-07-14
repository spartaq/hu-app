import React, { useState } from 'react';

const SentenceOrdering = ({ data }) => {
  const sentenceItem = Array.isArray(data) ? data[0] : data || { sentence: "", quizTitle: "" };
  const correctWords = sentenceItem.sentence.split(" ").map((word, idx) => ({ word, id: idx }));

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

  const isCorrectPlacement = (wordObj, idx) => wordObj.id === idx;

  const resetSentenceOrdering = () => {
    setShuffledWords(shuffle([...correctWords]));
    setPlacedWords(Array(correctWords.length).fill(null));
    setCompleted(false);
  };

  const checkCompletion = () => {
    if (placedWords.every((word, idx) => word?.id === idx)) {
      setCompleted(true);
    }
  };

  if (!sentenceItem.sentence) {
    return <p>Error: Invalid sentence data</p>;
  }

  return (
    <div className="sentence-ordering-block">
      <h2>{sentenceItem.quizTitle}</h2>

      <div className="word-bank">
        {shuffledWords
          .filter(wordObj => !placedWords.some(p => p?.id === wordObj.id))
          .map(wordObj => (
            <button
              key={wordObj.id}
              onClick={() => {
                const nextBlankIdx = placedWords.findIndex(p => p === null);
                if (nextBlankIdx === -1 || !isCorrectPlacement(wordObj, nextBlankIdx)) return;

                const newPlaced = [...placedWords];
                newPlaced[nextBlankIdx] = wordObj;
                setPlacedWords(newPlaced);
                checkCompletion();
              }}
              className="word-bank-button"
              disabled={completed}
            >
              {wordObj.word}
            </button>
          ))}
      </div>

      <div className="ordered-sentence simulated-input">
        {correctWords.map((_, idx) => {
          const placedWord = placedWords[idx];
          return (
            <span
              key={idx}
              className={`word-span ${placedWord ? "filled" : "blank"}`}
            >
              {placedWord?.word || "_____"}
            </span>
          );
        })}
      </div>

      {completed && <p className="completion-message">Correct! 🎉</p>}

      <button onClick={resetSentenceOrdering} className="reset-button">
        Reset
      </button>
    </div>
  );
};

export default SentenceOrdering;
