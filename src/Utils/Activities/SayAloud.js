import React, { useRef } from "react";
import "../../CSS/SayAloud.css"; // optional styling

const SayAloud = ({ data, onComplete }) => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div className="sayaloud-container">
      <audio ref={audioRef} src={data.audio} />

      <div className="sayaloud-prompt">
        Say this phrase out loud:
      </div>

      <div className="sayaloud-phrase">
        {data.phrase}
      </div>

      {data.translation && (
        <div className="sayaloud-translation">
          {data.translation}
        </div>
      )}

      <button className="sayaloud-play-btn" onClick={handlePlay}>
        ▶️ Play Audio
      </button>

      <button
        className="sayaloud-next-btn"
        onClick={onComplete}
      >
        Next
      </button>
    </div>
  );
};

export default SayAloud;
