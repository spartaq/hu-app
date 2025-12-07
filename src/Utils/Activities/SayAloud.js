import React, { useRef, useState } from "react";
import "../../CSS/SayAloud.css";

const SayAloud = ({ data, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(null);

  if (!data?.items || data.items.length === 0) return null;

  const currentItem = data.items[currentIndex];

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < data.items.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete?.();
    }
  };

  const isLast = currentIndex === data.items.length - 1;

  return (
    <div className="sayaloud-container">
      <audio ref={audioRef} src={currentItem.audio} />

      <div className="sayaloud-prompt">Say this phrase out loud:</div>

      <div className="sayaloud-phrase">{currentItem.phrase}</div>

      {currentItem.translation && (
        <div className="sayaloud-translation">{currentItem.translation}</div>
      )}

      <button className="sayaloud-play-btn" onClick={handlePlay}>
        ▶️ Play Audio
      </button>

      <button
        className="sayaloud-next-btn"
        onClick={handleNext}
        disabled={isLast} // optional: disable when last phrase
      >
        {isLast ? "Done" : "Next"}
      </button>

      <div className="sayaloud-progress">
        Phrase {currentIndex + 1} of {data.items.length}
      </div>
    </div>
  );
};

export default SayAloud;
