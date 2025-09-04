
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
</div>
        
      <h4>Matched Pairs:</h4>

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


      <button onClick={resetMatch} style={{ marginTop: "20px" }}>
        Reset
      </button>


    </div>
  );
};

export default VocabMatch;
