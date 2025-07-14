import React, { useState, useEffect, useMemo } from "react";
import shuffle from "../shuffle.js";

const ITEMS_PER_PAGE = 5;

const VocabMatch = ({ data }) => {
  const quizTitle = data?.quizTitle || "Vocabulary Match";

  const pairs = useMemo(() => data?.pairs || [], [data]);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [matches, setMatches] = useState({});
  const [completed, setCompleted] = useState(false);
  const [page, setPage] = useState(0);

  const currentPairs = useMemo(() => {
    const start = page * ITEMS_PER_PAGE;
    return pairs.slice(start, start + ITEMS_PER_PAGE);
  }, [page, pairs]);

  const shuffledDefinitions = useMemo(() => {
    return shuffle(currentPairs.map((p) => p.definition));
  }, [currentPairs]);

  const handleTermClick = (term) => {
    setSelectedTerm(term === selectedTerm ? null : term);
  };

  const handleDefinitionClick = (definition) => {
    if (!selectedTerm) return;
    const correctDef = pairs.find((p) => p.term === selectedTerm)?.definition;
    if (definition === correctDef) {
      setMatches((prev) => ({
        ...prev,
        [selectedTerm]: definition,
      }));
      setSelectedTerm(null);
    }
  };

  useEffect(() => {
    if (pairs.length > 0 && Object.keys(matches).length === pairs.length) {
      setCompleted(true);
    }
  }, [matches, pairs]);

  if (!pairs.length) {
    return <div>No vocabulary data found.</div>;
  }

  const unmatchedTerms = currentPairs.filter((p) => !matches[p.term]);
  const unmatchedDefs = shuffledDefinitions.filter(
    (def) => !Object.values(matches).includes(def)
  );

  const totalPages = Math.ceil(pairs.length / ITEMS_PER_PAGE);

  return (
    <div className="vocab-match-container">
      <h2>{quizTitle}</h2>

      <div className="vocab-columns" style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
        
        <div className="terms column">
          <h3>Terms</h3>
          {unmatchedTerms.map(({ term }) => (
            <div
              key={term}
              className="vocab-item"
              onClick={() => handleTermClick(term)}
              style={{
                background: selectedTerm === term ? "#def" : "white",
                border: "1px solid gray",
                padding: "8px",
                margin: "5px",
                cursor: "pointer"
              }}
            >
              {term}
            </div>
          ))}
        </div>
 
        <div className="definitions column">
         <h3>Definitions</h3>
          {unmatchedDefs.map((definition, idx) => (
            <div
              key={idx}
              className="vocab-item"
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

      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "10px" }}>
        <button disabled={page === 0} onClick={() => setPage((p) => p - 1)}>⬅️ Previous</button>
        <span>Page {page + 1} / {totalPages}</span>
        <button disabled={page >= totalPages - 1} onClick={() => setPage((p) => p + 1)}>Next ➡️</button>
      </div>

      <h4 style={{ marginTop: "20px" }}>Matched Pairs:</h4>
      <ul>
        {Object.entries(matches).map(([term, def]) => (
          <li key={term}>
            <strong>{term}</strong> → {def}
          </li>
        ))}
      </ul>

      {completed && <p className="completion-message">✅ All matched correctly!</p>}
    </div>
  );
};

export default VocabMatch;
