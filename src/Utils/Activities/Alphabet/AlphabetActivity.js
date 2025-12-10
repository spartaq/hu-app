import React, { useState } from "react";
import LetterTile from "../Alphabet/LetterTile";
import LetterDetailPanel from "../Alphabet/LetterDetailPanel";
import "../../../CSS/AlphabetActivity.css";

const AlphabetActivity = ({ data, title = "Activity", subtitle = "Tap a tile to hear its sound" }) => {
  console.log("AlphabetActivity data:", JSON.stringify(data, null, 2));
  const [selectedItem, setSelectedItem] = useState(null);

  // Support both: data array directly or data.items wrapper
  const itemsArray = Array.isArray(data) ? data : data?.items;

  if (!itemsArray || !Array.isArray(itemsArray) || itemsArray.length === 0) {
    return <div>No data available for this activity.</div>;
  }

  return (
    <div className="alphabet-wrapper">
      <h2 className="alphabet-title">{title}</h2>
      <p className="alphabet-subtitle">{subtitle}</p>

      <div className="alphabet-grid">
        {itemsArray.map((item) => (
          <LetterTile
            key={item.id || item.letter || item.number}
            letter={item.letter || item.hungarian || item.number}
            ipa={item.ipa}
            onSelect={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {selectedItem && (
        <LetterDetailPanel
          data={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};

export default AlphabetActivity;
