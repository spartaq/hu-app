import React, { useState, useMemo } from "react";
import shuffle from "../shuffle.js"; 
import "../../CSS/exercisesection.css"; 

const GapFillExercise = ({ data }) => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [answers, setAnswers] = useState({});
  const [bouncedWord, setBouncedWord] = useState(null);

  const wordBank = useMemo(() => shuffle(data.words), [data.words]);
  const fullText = Array.isArray(data.text) ? data.text.join(" ") : data.text;

  const handleGapClick = (gapIndex) => {
    if (!selectedWord) return;

    const correctWord = data.answers?.[gapIndex];

    if (selectedWord === correctWord) {
      setAnswers((prev) => ({
        ...prev,
        [gapIndex]: selectedWord,
      }));
      setSelectedWord(null);
    } else {
      // Animate wrong word
      setBouncedWord(selectedWord);
      setTimeout(() => setBouncedWord(null), 600); // reset after animation
    }
  };

  const usedWords = Object.values(answers);
  const availableWords = wordBank.filter(word => !usedWords.includes(word));

  return (
    <div className="gap-fill-container">
      <div className="word-bank">
        {availableWords.map((word, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedWord(word)}
            className={`word-bank-button 
              ${selectedWord === word ? "selected" : ""} 
              ${bouncedWord === word ? "bounce" : ""}`}
          >
            {word}
          </button>
        ))}
      </div>

      <div className="gap-fill-text">
        <p>
          {fullText.split("___").map((chunk, idx, arr) => (
            <span key={idx}>
              {chunk}
              {idx < arr.length - 1 && (
                <span className="gap" onClick={() => handleGapClick(idx)}>
                  {answers[idx] || "___"}
                </span>
              )}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default GapFillExercise;
