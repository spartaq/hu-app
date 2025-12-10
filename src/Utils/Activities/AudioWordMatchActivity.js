import React, { useState, useEffect, useMemo, useRef } from "react";
import "../../CSS/AudioWordMatchActivity.css";
import shuffle from "../shuffle";
import ProgressBar from "../../Components/ProgressBar";

const AudioWordMatchActivity = ({ data = {}, onComplete, showTranslationToggle = false }) => {
  const items = useMemo(() => data.items || [], [data]);

  const [selectedAudio, setSelectedAudio] = useState(null);
  const [selectedText, setSelectedText] = useState(null);
  const [matchedIds, setMatchedIds] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  // Shuffled cards
  const audioCards = useMemo(() => shuffle([...items]), [items]);
  const textCards = useMemo(() => shuffle([...items]), [items]);

  // Reset when items change
  useEffect(() => {
    setSelectedAudio(null);
    setSelectedText(null);
    setMatchedIds([]);
    setCompleted(false);
    setShowTranslation(false);
  }, [items]);

  const audioRefs = useRef({});

  const playRawAudio = (id, src) => {
    if (!src) return;
    if (!audioRefs.current[id]) audioRefs.current[id] = new Audio(src);
    const audio = audioRefs.current[id];
    audio.currentTime = 0;
    audio.play();
  };

  const playSegment = (id, audioFile, start, end) => {
    if (!audioFile || start == null || end == null) return;
    if (!audioRefs.current[id]) audioRefs.current[id] = new Audio(audioFile);
    const audio = audioRefs.current[id];
    audio.currentTime = start;
    audio.play();
    const onTimeUpdate = () => {
      if (audio.currentTime >= end) {
        audio.pause();
        audio.removeEventListener("timeupdate", onTimeUpdate);
      }
    };
    audio.addEventListener("timeupdate", onTimeUpdate);
  };

  const playAudio = (item) => {
    if (!item) return;
    const { id, audio, start, end } = item;
    if (audio) playRawAudio(id, audio);
    else if (data.audioFile && start != null && end != null) playSegment(id, data.audioFile, start, end);
  };

  // Matching logic
  useEffect(() => {
    if (!selectedAudio || !selectedText) return;

    if (selectedAudio.id === selectedText.id) {
      setMatchedIds((prev) => {
        const next = [...prev, selectedAudio.id];
        if (next.length === items.length) {
          setCompleted(true);
          onComplete?.(true);
        }
        return next;
      });
      setSelectedAudio(null);
      setSelectedText(null);
      return;
    }

    // Wrong match feedback
    setSelectedText("wrong");
    const timeout = setTimeout(() => setSelectedText(null), 500);
    return () => clearTimeout(timeout);
  }, [selectedAudio, selectedText, items.length, onComplete]);

  // PROGRESS: number of matches
  const progress = matchedIds.length;

  return (
    <div className="audiowordmatch__container">
      <h2 className="audiowordmatch__title">{data.title || "Match the Audio to the Word"}</h2>

      {/* Progress Bar */}
      <ProgressBar completed={progress} total={items.length} />

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
                className={[
                  "audiowordmatch__audio-card",
                  isMatched && "matched",
                  isSelected && "selected",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => {
                  if (isMatched) return;
                  playAudio(item);
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
            const isSelected = selectedText?.id === item.id;
            const isWrong = selectedText === "wrong";

            return (
              <button
                key={item.id}
                className={[
                  "audiowordmatch__text-card",
                  isMatched && "matched",
                  isSelected && "selected",
                  isWrong && "wrong",
                ]
                  .filter(Boolean)
                  .join(" ")}
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
