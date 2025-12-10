import React, { useState } from "react";
import alphabetData from "../../../Utils/Activities/Data/sounds/sounds_alphabet.json";
import LetterTile from "../Alphabet/LetterTile";
import LetterDetailPanel from "../Alphabet/LetterDetailPanel";
import "../../../CSS/AlphabetActivity.css";

const AlphabetActivity = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);

  return (
    <div className="alphabet-wrapper">
      <h2 className="alphabet-title">Alphabet</h2>
      <p className="alphabet-subtitle">Tap a letter to hear its sound</p>

      <div className="alphabet-grid">
        {alphabetData.alphabet.map((item) => (
          <LetterTile
            key={item.letter}
            letter={item.letter}
            ipa={item.ipa}
            onSelect={() => setSelectedLetter(item)}
          />
        ))}
      </div>

      {selectedLetter && (
        <LetterDetailPanel
          data={selectedLetter}
          onClose={() => setSelectedLetter(null)}
        />
      )}
    </div>
  );
};

export default AlphabetActivity;
