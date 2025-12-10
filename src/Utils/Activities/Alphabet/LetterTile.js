import React from "react";
import "../../../CSS/AlphabetActivity.css";

const LetterTile = ({ letter, ipa, onSelect }) => {
  return (
    <button className="letter-tile" onClick={onSelect}>
      <div className="letter-tile-letter">{letter}</div>
      <div className="letter-tile-ipa">{ipa}</div>
    </button>
  );
};

export default LetterTile;
