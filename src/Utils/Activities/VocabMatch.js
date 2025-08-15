<<<<<<< HEAD
import React, { useState } from "react";

const VocabMatch = ({ data }) => {
  const { quizTitle, pairs } = data;

  const [selectedTerm, setSelectedTerm] = useState(null);
  const [matches, setMatches] = useState({});
  const [completed, setCompleted] = useState(false);

  const handleTermClick = (term) => {
    setSelectedTerm(term === selectedTerm ? null : term); // toggle selection
=======
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
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
  };

  const handleDefinitionClick = (definition) => {
    if (!selectedTerm) return;
<<<<<<< HEAD

    const correctDef = pairs.find(p => p.term === selectedTerm)?.definition;

    if (definition === correctDef) {
      setMatches(prev => ({
        ...prev,
        [selectedTerm]: definition
=======
    const correctDef = pairs.find((p) => p.term === selectedTerm)?.definition;
    if (definition === correctDef) {
      setMatches((prev) => ({
        ...prev,
        [selectedTerm]: definition,
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
      }));
      setSelectedTerm(null);
    }
  };

<<<<<<< HEAD
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
=======
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
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c

  return (
    <div className="vocab-match-container">
      <h2>{quizTitle}</h2>

      <div className="vocab-columns" style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
<<<<<<< HEAD
        <div className="terms">
=======
        
        <div className="terms column">
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
          <h3>Terms</h3>
          {unmatchedTerms.map(({ term }) => (
            <div
              key={term}
<<<<<<< HEAD
              onClick={() => handleTermClick(term)}
              style={{
                border: "1px solid gray",
                padding: "8px",
                margin: "5px",
                cursor: "pointer",
                background: selectedTerm === term ? "#def" : "white"
=======
              className="vocab-item"
              onClick={() => handleTermClick(term)}
              style={{
                background: selectedTerm === term ? "#def" : "white",
                border: "1px solid gray",
                padding: "8px",
                margin: "5px",
                cursor: "pointer"
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
              }}
            >
              {term}
            </div>
          ))}
        </div>
<<<<<<< HEAD

        <div className="definitions">
          <h3>Definitions</h3>
          {unmatchedDefs.map((definition, idx) => (
            <div
              key={idx}
=======
 
        <div className="definitions column">
         <h3>Definitions</h3>
          {unmatchedDefs.map((definition, idx) => (
            <div
              key={idx}
              className="vocab-item"
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
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

<<<<<<< HEAD
      <h4>Matched Pairs:</h4>
=======
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "10px" }}>
        <button disabled={page === 0} onClick={() => setPage((p) => p - 1)}>⬅️ Previous</button>
        <span>Page {page + 1} / {totalPages}</span>
        <button disabled={page >= totalPages - 1} onClick={() => setPage((p) => p + 1)}>Next ➡️</button>
      </div>

      <h4 style={{ marginTop: "20px" }}>Matched Pairs:</h4>
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
      <ul>
        {Object.entries(matches).map(([term, def]) => (
          <li key={term}>
            <strong>{term}</strong> → {def}
          </li>
        ))}
      </ul>

      {completed && <p className="completion-message">✅ All matched correctly!</p>}
<<<<<<< HEAD

      <button onClick={resetMatch} style={{ marginTop: "20px" }}>
        Reset
      </button>
=======
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
    </div>
  );
};

export default VocabMatch;
<<<<<<< HEAD

=======
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
