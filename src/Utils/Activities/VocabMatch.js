
import React, { useState, useEffect, useMemo } from "react";
import "../../CSS/VocabActivity.css";
import shuffle from "../shuffle.js";

const ITEMS_PER_PAGE = 5;

const VocabMatch = ({ data }) => {
  const quizTitle = data?.quizTitle || "Vocabulary Match";

  const pairs = useMemo(() => shuffle(data?.pairs || []), [data]);
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

  const handleDefClick = (def) => {
    if (selectedTerm) {
      const correctPair = currentPairs.find(p => p.definition === def);
      if (correctPair && correctPair.term === selectedTerm) {
        setMatches(prev => ({...prev, [selectedTerm]: def}));
      }
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
  <div className="vocabmatch__card">
    <h2 className="vocabmatch__title">{quizTitle}</h2>

    {/* TWO COLUMN MATCH AREA */}
    <div className="vocabmatch__columns">
      
      {/* TERMS */}
      <div className="vocabmatch__column">
        <h3>Terms</h3>
        <div className="vocabmatch__list">
          {unmatchedTerms.map((p) => (
            <button
              key={p.term}
              onClick={() => handleTermClick(p.term)}
              className={`vocabmatch__item ${
                selectedTerm === p.term ? "selected" : ""
              }`}
            >
              {p.term}
            </button>
          ))}
        </div>
      </div>

      {/* DEFINITIONS */}
      <div className="vocabmatch__column">
        <h3>Definitions</h3>
        <div className="vocabmatch__list">
          {unmatchedDefs.map((def, i) => (
            <button
              key={i}
              onClick={() => handleDefClick(def)}
              className="vocabmatch__item"
            >
              {def}
            </button>
          ))}
        </div>
      </div>
    </div>

    {/* PAGINATION */}
    <div className="vocabmatch__pagination">
      <button disabled={page === 0} onClick={() => setPage((p) => p - 1)}>
        ⬅️ Prev
      </button>
      <span>Page {page + 1} / {totalPages}</span>
      <button
        disabled={page >= totalPages - 1}
        onClick={() => setPage((p) => p + 1)}
      >
        Next ➡️
      </button>
    </div>

    {/* MATCHED PAIRS */}
    <h3 className="vocabmatch__subtitle">Matched Pairs</h3>
    <ul className="vocabmatch__matched-list">
      {Object.entries(matches).map(([term, def]) => (
        <li key={term} className="vocabmatch__matched-item">
          <strong>{term}</strong> <span>→</span> {def}
        </li>
      ))}
    </ul>

    {completed && (
      <p className="vocabmatch__complete">🎉 All matched correctly!</p>
    )}

    {/* RESET */}
    <button className="vocabmatch__reset" onClick={resetMatch}>
      Reset Activity
    </button>
  </div>
);

};

export default VocabMatch;
