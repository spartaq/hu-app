import React from "react";
import "../../../CSS/AlphabetActivity.css";

const LetterTile = ({ letter, ipa, onSelect }) => {
  return (
    <div className="letter-tile" onClick={onSelect}>
      <div className="letter-tile-main">{letter}</div>
      {ipa && <div className="letter-tile-ipa">{ipa}</div>}
    </div>
  );
};

export default LetterTile;
