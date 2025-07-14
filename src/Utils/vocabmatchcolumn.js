import { useState, useMemo } from "react";

export default function TouchCategorizationExercise({ data, categories = [], topic = "" }) {
  const filteredData = topic ? data.filter(item => item.topic === topic) : data;

  const uniqueCategories = categories.length > 0 ? categories : [
    ...new Set(filteredData.map(item => item.category))
  ];

  const [categorizedWords, setCategorizedWords] = useState({});
  const [selectedWord, setSelectedWord] = useState(null);

  const handleWordClick = (word) => {
    setSelectedWord(word === selectedWord ? null : word); // toggle
  };

  const handleCategoryClick = (category) => {
    if (!selectedWord) return;

    const correctCategory = filteredData.find(item => item.word === selectedWord)?.category;

    if (correctCategory === category) {
      setCategorizedWords(prev => ({
        ...prev,
        [selectedWord]: category
      }));
    }

    setSelectedWord(null); // reset selection
  };

  const resetExercise = () => {
    setCategorizedWords({});
    setSelectedWord(null);
  };

  return (
    <div>
      <button onClick={resetExercise} className="reset-button">Reset</button>
      <div className="exercise-container">
        <div className="vocabcolumn-container">
          {filteredData.map(item => (
            !categorizedWords[item.word] && (
              <div
                key={item.word}
                onClick={() => handleWordClick(item.word)}
                className={`draggable-word ${selectedWord === item.word ? "selected" : ""}`}
              >
                {item.word}
              </div>
            )
          ))}
        </div>

        <div className="categories-container" style={{ display: "flex", justifyContent: "space-around" }}>
          {uniqueCategories.map(category => (
            <div
              key={category}
              className="category-column"
              onClick={() => handleCategoryClick(category)}
              style={{ padding: "10px", border: "1px solid black", width: "200px", cursor: "pointer" }}
            >
              <h3>{category}</h3>
              <div className="dropped-words">
                {filteredData
                  .filter(item => categorizedWords[item.word] === category)
                  .map(item => (
                    <div
                      key={item.word}
                      className="categorized-word"
                      style={{ margin: "5px", padding: "5px", border: "1px solid gray" }}
                    >
                      {item.word}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
