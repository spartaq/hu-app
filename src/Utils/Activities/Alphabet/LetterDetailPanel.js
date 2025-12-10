import React, { useState } from "react";
import "../../../CSS/AlphabetActivity.css";

const LetterDetailPanel = ({ data, onClose }) => {
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);
  const examples = data.examples || [];

  const nextExample = () => {
    setCurrentExampleIndex((prev) => (prev + 1) % examples.length);
  };

  const currentExample = examples[currentExampleIndex];

  return (
    <div className="letter-detail-panel">
      <button className="close-btn" onClick={onClose}>X</button>

      <h3>{data.letter || data.hungarian || data.number}</h3>
      {data.ipa && <p className="ipa">{data.ipa}</p>}

      {examples.length > 0 ? (
        <div className="examples">
          <p>
            <strong>Example:</strong> {currentExample.word} - {currentExample.translation}
          </p>
          {currentExample.audio && (
            <audio controls src={currentExample.audio}>
              Your browser does not support the audio element.
            </audio>
          )}
          <button onClick={nextExample}>Next Example</button>
        </div>
      ) : (
        <p>No examples available.</p>
      )}

      {data.letterAudio || data.numberAudio ? (
        <audio controls src={data.letterAudio || data.numberAudio}>
          Your browser does not support the audio element.
        </audio>
      ) : null}
    </div>
  );
};

export default LetterDetailPanel;
