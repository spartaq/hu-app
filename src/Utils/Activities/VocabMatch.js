import React, { useState } from "react";

const VocabMatch = ({ data }) => {
  const { quizTitle, pairs } = data;

  const [selectedTerm, setSelectedTerm] = useState(null);
  const [matches, setMatches] = useState({});
  const [completed, setCompleted] = useState(false);

  const handleTermClick = (term) => {
    setSelectedTerm(term === selectedTerm ? null : term); // toggle selection
  };

  const handleDefinitionClick = (definition) => {
    if (!selectedTerm) return;

    const correctDef = pairs.find(p => p.term === selectedTerm)?.definition;

    if (definition === correctDef) {
      setMatches(prev => ({
        ...prev,
        [selectedTerm]: definition
      }));
      setSelectedTerm(null);
    }
  };

  const resetMatch = () => {
    setSelectedTerm(null);
    setMatches({});
    setCompleted(false);
  };

  React.useEffect(() => {
    if (Object.keys(matches).length === pairs.length) {
      setCompleted(true);
    }
  }, [matches, pairs.length]);

  const unmatchedTerms = pairs.filter(p => !matches[p.term]);
  const unmatchedDefs = pairs
    .map(p => p.definition)
    .filter(def => !Object.values(matches).includes(def));

  return (
    <div className="vocab-match-container">
      <h2>{quizTitle}</h2>

      <div className="vocab-columns" style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
        <div className="terms">
          <h3>Terms</h3>
          {unmatchedTerms.map(({ term }) => (
            <div
              key={term}
              onClick={() => handleTermClick(term)}
              style={{
                border: "1px solid gray",
                padding: "8px",
                margin: "5px",
                cursor: "pointer",
                background: selectedTerm === term ? "#def" : "white"
              }}
            >
              {term}
            </div>
          ))}
        </div>

        <div className="definitions">
          <h3>Definitions</h3>
          {unmatchedDefs.map((definition, idx) => (
            <div
              key={idx}
              onClick={() => handleDefinitionClick(definition)}
              style={{
                border: "1px solid gray",
                padding: "8px",
                margin: "5px",
                cursor: "pointer"
              }}
            >
              {definition}
            </div>
          ))}
        </div>
      </div>

      <h4>Matched Pairs:</h4>
      <ul>
        {Object.entries(matches).map(([term, def]) => (
          <li key={term}>
            <strong>{term}</strong> → {def}
          </li>
        ))}
      </ul>

      {completed && <p className="completion-message">✅ All matched correctly!</p>}

      <button onClick={resetMatch} style={{ marginTop: "20px" }}>
        Reset
      </button>
    </div>
  );
};

export default VocabMatch;

