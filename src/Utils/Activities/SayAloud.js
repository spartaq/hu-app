import React, { useRef, useState } from "react";
import "../../CSS/SayAloud.css";
import ProgressBar from "../../Components/ProgressBar";

const SayAloud = ({ data, onComplete }) => {
  // Get items
  const items = data?.data?.items || data?.items || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [audioContext, setAudioContext] = useState(null);
  const [levels, setLevels] = useState(new Array(12).fill(0)); // 12 bars

  const streamRef = useRef(null);
  const sourceRef = useRef(null);
  const audioRef = useRef(null);

  const currentItem = items[currentIndex];
  const instructions = data?.instructions || "Say it aloud";

  if (!items.length) return null;

  /* ---------------------------------------
     START MICROPHONE
  ---------------------------------------- */
  const startRecording = async () => {
    if (isRecording) return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const analyserNode = ctx.createAnalyser();
      analyserNode.fftSize = 256;

      const source = ctx.createMediaStreamSource(stream);
      source.connect(analyserNode);

      setAudioContext(ctx);
      sourceRef.current = source;

      setIsRecording(true);
    } catch (err) {
      console.error("Microphone error:", err);
    }
  };

  /* ---------------------------------------
     STOP MICROPHONE
  ---------------------------------------- */
  const stopRecording = () => {
    if (!isRecording) return;

    streamRef.current?.getTracks().forEach((t) => t.stop());
    audioContext?.close();

    setIsRecording(false);
    setAudioContext(null);
    setLevels(new Array(12).fill(0));
  };




  /* ---------------------------------------
     AUDIO PLAYBACK
  ---------------------------------------- */
  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  /* ---------------------------------------
     NEXT ITEM
  ---------------------------------------- */
  const handleNext = () => {
    stopRecording(); // stop mic when advancing

    if (currentIndex + 1 < items.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete?.();
    }
  };

  const isLast = currentIndex === items.length - 1;

  return (
    <div className="activity-card sayaloud-container">
      <h2 className="sayaloud-title">{instructions}</h2>

      <ProgressBar completed={currentIndex} total={items.length} />

      <audio ref={audioRef} src={currentItem.audio} />

      <div className="sayaloud-phrase">{currentItem.phrase}</div>

      {currentItem.translation && (
        <div className="sayaloud-translation">{currentItem.translation}</div>
      )}

      <button className="sayaloud-play-btn" onClick={handlePlay}>
        ▶️ Play Audio
      </button>

      {/* Microphone Controls */}
      {!isRecording ? (
        <button className="sayaloud-next-btn" onClick={startRecording}>
          Start Recording
        </button>
      ) : (
        <button className="sayaloud-next-btn" onClick={stopRecording}>
          Stop Recording
        </button>
      )}

      {/* Waveform Visualizer */}
      {isRecording && (
        <div className="waveform-container">
          {levels.map((level, i) => (
            <div
              key={i}
              className="wave-bar"
              style={{ height: `${level}px` }}
            />
          ))}
        </div>
      )}

      <button
        className="sayaloud-next-btn"
        onClick={handleNext}
        disabled={false}
      >
        {isLast ? "Done" : "Next"}
      </button>

      <div className="sayaloud-progress">
        Phrase {currentIndex + 1} of {items.length}
      </div>
    </div>
  );
};

export default SayAloud;
