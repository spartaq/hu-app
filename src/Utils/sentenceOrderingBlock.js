import { useState, useEffect, useMemo } from "react";

const SentenceOrderingBlock = ({ exercise }) => {

    const shuffle = (array) => {
        const copy = [...array];
        for (let i = copy.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
      };
  

    const correctWords = exercise.sentence.split(" ").map((word, idx) => ({ word, id: idx }));
    const [shuffledWords, setShuffledWords] = useState(() => shuffle([...correctWords]));
    const [placedWords, setPlacedWords] = useState(Array(correctWords.length).fill(null));
  


    const isCorrectPlacement = (wordObj, idx) => wordObj.id === idx;
  


    const resetSentenceOrdering = () => {
      setShuffledWords(shuffle([...correctWords]));
      setPlacedWords(Array(correctWords.length).fill(null));
    };


    return (
      <div className="sentence-ordering-block">
        <div className="word-bank">
          {shuffledWords
            .filter(wordObj => !placedWords.some(p => p?.id === wordObj.id))
            .map(wordObj => (
              <button
                key={wordObj.id}
                onClick={() => {
                  const nextBlankIdx = placedWords.findIndex(p => p === null);
                  if (nextBlankIdx === -1) return;
                  if (!isCorrectPlacement(wordObj, nextBlankIdx)) return;
  
                  const newPlaced = [...placedWords];
                  newPlaced[nextBlankIdx] = wordObj;
                  setPlacedWords(newPlaced);
                }}
                className="word-bank-button"
              >
                {wordObj.word}
              </button>
            ))}
        </div>
  
        <div className="ordered-sentence simulated-input">
          {correctWords.map((_, idx) => {
            const placedWord = placedWords[idx];
            return (
              <span key={idx} className={`word-span ${placedWord ? "filled" : "blank"}`}>
                {placedWord?.word || "_____"}
              </span>
            );
          })}
        </div>
  
        <button onClick={resetSentenceOrdering} className="reset-button">
          Reset
        </button>
      </div>
    );
  };
  
  export default SentenceOrderingBlock;