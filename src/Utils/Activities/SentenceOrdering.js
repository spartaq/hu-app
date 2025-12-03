import React, { useState, useMemo, useEffect } from "react";
import "../../CSS/WordOrderActivity.css";

const SentenceOrdering = ({ data, onComplete }) => {
  console.log("🔵 COMPONENT RENDER, incoming data:", data);
const item = data;
  // Normalize incoming data

  const [completed, setCompleted] = useState(false);
  const [shuffledWords, setShuffledWords] = useState([]);
  const [placedWords, setPlacedWords] = useState([]);
  const [showTranslation, setShowTranslation] = useState(false);



  // Get current exercise
  const sentence = item?.sentence || "";
  const translation = item?.translation || "";
  const title = item?.quizTitle || "";

  console.log("🟣 current item:", item);

  // Split original words with position ids
  const correctWords = useMemo(() => {
    const result = sentence.split(" ").map((word, idx) => ({ word, id: idx }));
    console.log("🟢 correctWords:", result);
    return result;
  }, [sentence]);

  // Shuffle when exercise changes
  useEffect(() => {
    console.log("🟡 useEffect triggered for sentence:", sentence);

    if (!sentence) return;

    const shuffled = shuffle([...correctWords]);
    console.log("🟡 shuffledWords:", shuffled);

    setShuffledWords(shuffled);
    setPlacedWords(Array(correctWords.length).fill(null));
    setCompleted(false);
    setShowTranslation(false);
  }, [sentence]);

  function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  const handlePlaceWord = (wordObj) => {
    console.log("🟩 placeWord:", wordObj);

    if (completed) {
      console.log("⚠️ ignored: already completed");
      return;
    }

    const nextBlankIdx = placedWords.findIndex((p) => p === null);
    console.log("🟩 next blank index:", nextBlankIdx);

    if (nextBlankIdx === -1) return;

    const updated = [...placedWords];
    updated[nextBlankIdx] = wordObj;

    console.log("🟩 updated placedWords:", updated);

    setPlacedWords(updated);

    // Check completion
    const isCorrect = updated.every((w, idx) => w?.id === idx);
    console.log("🟩 is correct sentence:", isCorrect);

    if (isCorrect) {
      console.log("🎉 sentence completed correctly");
      setCompleted(true);
      setShowTranslation(true);
    }
  };

  const handleNext = () => {
  console.log("➡️ Continue clicked!");

  if (onComplete) {
    onComplete();   // tell parent we're done
  }
};

  const handleSkip = () => {
    console.log("⏭️ Skip clicked");
    handleNext();
  };


  if (!sentence) {
    console.log("❌ Error: no sentence found");
    return <p>Error: Invalid sentence data</p>;
  }

  return (
    <div className="wordorder-card">
      <h2 className="wordorder-title">{title}</h2>

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
      {completed && (
        <>
          <p className="completion-message">✅ Correct! 🎉</p>
          {translation && (
            <p className="translation-text">💬 {translation}</p>
          )}
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
};

export default SentenceOrdering;
