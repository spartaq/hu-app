import React, { useEffect, useRef, useState } from "react";
import "../../CSS/dialoguePlayer.css";

export default function DialoguePlayer({ lines = [], audioSrc = null, subtitleMode = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(true);
  const audioRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!audioSrc || !audioRef.current) return;
    const audio = audioRef.current;
    const onTimeUpdate = () => {
      if (!playing) return;
      const nextIndex = lines.findIndex(
        (line, i) => audio.currentTime * 1000 >= line.start && audio.currentTime * 1000 <= line.end && i !== currentIndex
      );
      if (nextIndex !== -1) setCurrentIndex(nextIndex);
    };
    audio.addEventListener("timeupdate", onTimeUpdate);
    return () => audio.removeEventListener("timeupdate", onTimeUpdate);
  }, [lines, currentIndex, playing]);

  useEffect(() => {
    if (containerRef.current) {
      const activeLine = containerRef.current.children[currentIndex];
      if (activeLine) activeLine.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [currentIndex]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.pause();
    else audioRef.current.play().catch(() => {});
    setPlaying(!playing);
  };

  const handleStart = () => {
    if (!audioRef.current) return;
    audioRef.current.play().catch(() => {});
    setPlaying(true);
    setReady(false);
  };

  const handleRestart = () => {
    if (audioRef.current) audioRef.current.currentTime = 0;
    setCurrentIndex(0);
    setPlaying(false);
    setReady(true);
  };

  const currentLine = lines[currentIndex] || {};

  return (
    <div>
      
    <div className="dialogue-card">
      {audioSrc && <audio ref={audioRef} src={audioSrc} preload="auto" />}

   
      <div className="dialogue-container" ref={containerRef}>
        {lines.map((line, i) => (
          <div
            key={i}
            className={`dialogue-line ${line.position === "right" ? "right" : "left"} ${i === currentIndex ? "active" : ""}`}
          >
            {line.avatar && <img src={line.avatar} className="avatar" alt="" />}
            <div className="bubble">
              <b>{line.speaker}:</b> {line.text}
            </div>
          </div>
        ))}
      </div>

      {subtitleMode && currentLine && (
        <div className="subtitle-bar">
          <b>{currentLine.speaker}:</b> {currentLine.text}
        </div>
      )}

      <div className="dialogue-controls">
        <button onClick={handlePlayPause} className="control-btn">{playing ? "Pause" : "Play"}</button>
        <button onClick={handleRestart} className="control-btn">Restart</button>
      </div>

    </div></div>
  );
}
