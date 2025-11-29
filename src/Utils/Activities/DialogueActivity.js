import React from "react";
import DialoguePlayer from "./DialoguePlayer";
import dialogueData from "./Data/dialogues/dialogue_lenni.json";

export default function DialogueActivity() {
  const processedLines = dialogueData.lines.map((line) => ({
    ...line,
    avatar: line.speaker === "Anna" ? "/img/anna.png" : "/img/balint.png",
    position: line.speaker === "Anna" ? "left" : "right",
  }));

  return (
    <DialoguePlayer
      lines={processedLines}
      audioSrc="/audio/Ujszomszedok.mp3"
      subtitleMode={true}
    />
  );
}
