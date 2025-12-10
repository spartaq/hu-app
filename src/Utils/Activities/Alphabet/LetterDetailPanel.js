import React from "react";
import WordRow from "./WordRow";
import "../../../CSS/AlphabetActivity.css";

const LetterDetailPanel = ({ data, onClose }) => {
  const playAudio = (src) => {
    const audio = new Audio(src);
    audio.play();
  };

  return (
    <div className="letter-detail-overlay" onClick={onClose}>
      <div className="letter-detail-panel" onClick={(e) => e.stopPropagation()}>
        <button className="letter-detail-close" onClick={onClose}>
          ×
        </button>

        <h2 className="letter-big">{data.letter}</h2>
        <div className="letter-ipa-big">{data.ipa}</div>

        <button
          className="play-letter-btn"
          onClick={() => playAudio(data.letterAudio)}
        >
          ▶ Play Letter
        </button>

        <div className="examples-header">Example Words</div>

        <div className="examples-list">
          {data.examples.map((ex, index) => (
            <WordRow
              key={index}
              word={ex.word}
              translation={ex.translation}
              audio={ex.audio}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LetterDetailPanel;
