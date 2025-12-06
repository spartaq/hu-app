import React, { useState, useEffect, useMemo, useRef } from "react";
import "../../CSS/AudioWordMatchActivity.css";
import shuffle from "../shuffle";

const AudioWordMatchActivity = ({ data = [], onComplete, showTranslationToggle = false, onProgress }) => {
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [selectedText, setSelectedText] = useState(null);
  const [matchedIds, setMatchedIds] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  // Shuffle once on mount
  const audioCards = useMemo(() => {
    if (!Array.isArray(data)) return [];
    return shuffle([...data]);
  }, [data]);
  const textCards = useMemo(() => {
    if (!Array.isArray(data)) return [];
    return shuffle([...data]);
  }, [data]);

  // Reset state when data changes
  useEffect(() => {
    setSelectedAudio(null);
    setSelectedText(null);
    setMatchedIds([]);
    setCompleted(false);
    setShowTranslation(false);
  }, [data]);

  // Handle audio play
  const audioRefs = useRef({});

  const playAudio = (id, src) => {
    if (!audioRefs.current[id]) {
      audioRefs.current[id] = new Audio(src);
    }
    audioRefs.current[id].currentTime = 0;
    audioRefs.current[id].play();
  };

  // Matching logic
  useEffect(() => {
    if (!selectedAudio || !selectedText) return;

    if (selectedAudio.id === selectedText.id) {
      // correct match
      setMatchedIds((prev) => [...prev, selectedAudio.id]);
      setSelectedAudio(null);
      setSelectedText(null);

      if (Array.isArray(data) && matchedIds.length + 1 === data.length) {
        setCompleted(true);
        if (onComplete) onComplete(true);
      }
    } else {
      // wrong match (flash + reset text selection)
      setSelectedText("wrong");
      setTimeout(() => setSelectedText(null), 500);
    }
  }, [selectedAudio, selectedText, matchedIds, data.length, onComplete]);

  // Update progress
  useEffect(() => {
    if (onProgress && Array.isArray(data)) onProgress(matchedIds.length / data.length);
  }, [matchedIds, data, onProgress]);

  return (
    <div className="audiowordmatch__container">
      <h2 className="audiowordmatch__title">Match the Audio to the Word</h2>

      {showTranslationToggle && (
        <button
          className="audiowordmatch__toggle"
          onClick={() => setShowTranslation((prev) => !prev)}
        >
          {showTranslation ? "Hide Translation" : "Show Translation"}
        </button>
      )}

      <div className="audiowordmatch__columns">
        {/* AUDIO SIDE */}
        <div className="audiowordmatch__column">
          <h3>🎧 Listen</h3>

          {audioCards.map((item) => {
            const isMatched = matchedIds.includes(item.id);
            const isSelected = selectedAudio?.id === item.id;

            return (
              <button
                key={item.id}
                className={`audiowordmatch__audio-card 
                  ${isMatched ? "matched" : ""}
                  ${isSelected ? "selected" : ""}
                `}
                onClick={() => {
                  if (isMatched) return;
                  playAudio(item.id, item.audio);
                  setSelectedAudio(item);
                }}
              >
                ▶️ Play
              </button>
            );
          })}
        </div>

        {/* TEXT SIDE */}
        <div className="audiowordmatch__column">
          <h3>🔤 Words</h3>

          {textCards.map((item) => {
            const isMatched = matchedIds.includes(item.id);
            const isWrong = selectedText === "wrong";

            return (
              <button
                key={item.id}
                className={`audiowordmatch__text-card 
                  ${isMatched ? "matched" : ""}
                  ${selectedText?.id === item.id ? "selected" : ""}
                  ${isWrong ? "wrong" : ""}
                `}
                onClick={() => {
                  if (isMatched) return;
                  setSelectedText(item);
                }}
              >
                {item.text}
                {showTranslation && item.translation && (
                  <span className="audiowordmatch__translation">{item.translation}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {completed && (
        <p className="audiowordmatch__success">🎉 Great job! All matched correctly.</p>
      )}
    </div>
  );
};

export default AudioWordMatchActivity;
