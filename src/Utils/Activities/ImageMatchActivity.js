import React, { useState } from "react";
import "../../CSS/ImageMatchActivity.css";

export default function ImageMatchActivity({ data, onComplete }) {
  const {
    quizTitle,
    prompt,
    promptImage,
    translation,
    audio,
    mode = "word-to-image", // default
    options = []
  } = data || {};

  const [selected, setSelected] = useState(null);
  const [showTranslation, setShowTranslation] = useState(false);

  const handleSelect = (opt) => {
    if (selected) return;
    setSelected(opt);

    setTimeout(() => {
      onComplete && onComplete(opt.isCorrect);
    }, 800);
  };

  const playAudio = () => {
    if (audio) {
      const sound = new Audio(audio);
      sound.play();
    }
  };

  return (
    <div className="image-match-container">

      <h2 className="im-title">{quizTitle}</h2>

      <div className="im-prompt-box">
        <span className="im-prompt">{prompt}</span>

        <button
          className="im-translation-toggle"
          onClick={() => setShowTranslation(!showTranslation)}
        >
          {showTranslation ? "Hide translation" : "Show translation"}
        </button>

        {showTranslation && (
          <span className="im-translation">({translation})</span>
        )}
      </div>

      {audio && (
        <button className="im-audio-btn" onClick={playAudio}>
          🔊 Play Audio
        </button>
      )}

      {mode === "word-to-image" ? (
        <div className="im-grid">
          {options.map((opt) => (
            <div
              key={opt.id}
              className={`im-option 
                ${selected?.id === opt.id ? (opt.isCorrect ? "correct" : "wrong") : ""}`}
              onClick={() => handleSelect(opt)}
            >
              <img src={opt.image} alt="" className="im-image" />
            </div>
          ))}
        </div>
      ) : (
        <div>
          {/* Show one main image at top */}
          <img src={promptImage} alt="" className="im-image-top" />

          {/* Text options below */}
          <div className="im-text-grid">
            {options.map((opt) => (
              <div
                key={opt.id}
                className={`im-text-option
                  ${selected?.id === opt.id ? (opt.isCorrect ? "correct" : "wrong") : ""}`}
                onClick={() => handleSelect(opt)}
              >
                {opt.word}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
