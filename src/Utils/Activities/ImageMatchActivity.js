import React, { useState, useEffect } from "react";
import "../../CSS/ImageMatchActivity.css";
import ProgressBar from "../../Components/ProgressBar";

export default function ImageMatchActivity({
  data,
  items,
  index,
  onNext,
  onScore,
  onComplete,
  meta
}) {
  const title = meta?.title || "Image Match Exercise";

  const [selected, setSelected] = useState(null);
  const [completed, setCompleted] = useState(false);

  const currentItem = items[index];

  useEffect(() => {
    // Reset selection when index changes
    setSelected(null);
    setCompleted(false);
  }, [index]);

  if (!currentItem) return <p>No items to display</p>;

  const handleSelect = (opt) => {
    if (selected) return;
    setSelected(opt);
    setCompleted(true);
  };

  const handleNext = () => {
    if (selected?.isCorrect) onScore();
    onNext();

    // If this was the last item, trigger onComplete
    if (index + 1 >= items.length) {
      onComplete?.();
    }
  };

  const playAudio = () => {
    if (currentItem.audio) {
      const sound = new Audio(currentItem.audio);
      sound.play();
    }
  };

  const {
    instructions,
    prompt,
    promptImage,
    translation,
    audio,
    mode = "word-to-image",
    options = [],
  } = currentItem;

  return (
    <div className="image-match-container">

      {/* PROGRESS BAR */}
      <ProgressBar completed={index} total={items.length} />

      <div className="instructions">
        <span className="im-title">{instructions}</span>
      </div>

      {audio && (
        <div>
          <button className="im-audio-btn" onClick={playAudio}>
            🔊 Play Audio
          </button>
        </div>
      )}

      {mode === "word-to-image" && (
        <div className="im-prompt-box">
          <span className="im-prompt">{prompt}</span>
        </div>
      )}

      {mode === "word-to-image" ? (
        <div className="im-grid">
          {options.map((opt) => (
            <div
              key={opt.id}
              className={`im-option ${
                selected?.id === opt.id
                  ? opt.isCorrect
                    ? "correct"
                    : "wrong"
                  : ""
              }`}
              onClick={() => handleSelect(opt)}
            >
              <img src={opt.image} alt="" className="im-image" />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <img src={promptImage} alt="" className="im-image-top" />
          <div className="im-text-grid">
            {options.map((opt) => (
              <div
                key={opt.id}
                className={`im-text-option ${
                  selected?.id === opt.id
                    ? opt.isCorrect
                      ? "correct"
                      : "wrong"
                    : ""
                }`}
                onClick={() => handleSelect(opt)}
              >
                {opt.word}
              </div>
            ))}
          </div>
        </div>
      )}

      {completed && (
        <div className="im-feedback">
          <p>{selected?.isCorrect ? "✅ Correct!" : "❌ Incorrect."}</p>

          {selected?.isCorrect && (
            <div className="im-solution">
              <p>
                <strong>Correct answer:</strong>{" "}
                {options.find((o) => o.isCorrect)?.word || "N/A"}
              </p>
              {translation && (
                <p>
                  <strong>Translation:</strong> {translation}
                </p>
              )}
            </div>
          )}

          <button className="im-next-btn" onClick={handleNext}>
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
