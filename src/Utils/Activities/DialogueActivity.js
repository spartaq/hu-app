import React from "react";
import DialoguePlayer from "./DialoguePlayer";

const DialogueActivity = ({ image, data }) => {
  if (!data || !Array.isArray(data.lines)) {
    return <div>Error: Dialogue data format invalid.</div>;
  }

  // Optional: avatars if included in your JSON
  const processed = data.lines.map((line) => ({
    ...line,
    avatar: line.avatar || "/img/default-avatar.png",
    position: line.speaker === "Anna" ? "left" : "right",
  }));

  return (
    <DialoguePlayer
      lines={processed}
      audioSrc={data.audio}
      subtitleMode={true}
      image={image}
    />
  );
};

export default DialogueActivity;
