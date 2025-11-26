import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import "../../CSS/VocabActivity.css";

const VocabMatch = ({ data: propData, onCorrect, onComplete }) => {
  const location = useLocation();
  const data = propData || location.state?.data;
  const isArray = Array.isArray(data);
  const quizTitle = isArray ? "Vocabulary Match" : data?.quizTitle || "Vocabulary Match";

  // Use full pairs, no pagination
  const pairs = useMemo(() => (isArray ? data : data?.pairs || []), [data]);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [matches, setMatches] = useState({});
  const [completed, setCompleted] = useState(false);

  const getTerm = (p) => p.term || p.word;

  const handleTermClick = (p) => {
    const term = getTerm(p);
    setSelectedTerm(term === selectedTerm ? null : term);
  };

  const handleDefClick = (def) => {
    if (selectedTerm) {
      const correctPair = pairs.find((p) => p.definition === def);
      if (correctPair && getTerm(correctPair) === selectedTerm) {
        setMatches((prev) => ({ ...prev, [selectedTerm]: def }));
        onCorrect && onCorrect();
      }
      setSelectedTerm(null);
    }
  };

  const resetMatch = () => {
    setSelectedTerm(null);
    setMatches({});
    setCompleted(false);
  };

  useEffect(() => {
    if (pairs.length > 0 && Object.keys(matches).length === pairs.length) {
      setCompleted(true);
      onComplete && onComplete();
    }
  }, [matches, pairs, onComplete]);

  if (!pairs.length) return <div>No vocabulary data found.</div>;

  const unmatchedTerms = pairs.filter((p) => !matches[getTerm(p)]);
  const unmatchedDefs = pairs
    .map((p) => p.definition)
    .filter((def) => !Object.values(matches).includes(def));

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
                key={getTerm(p)}
                onClick={() => handleTermClick(p)}
                className={`vocabmatch__item ${selectedTerm === getTerm(p) ? "selected" : ""}`}
              >
                {getTerm(p)}
              </button>
            ))}
          </div>
        </div>

        {/* DEFINITIONS */}
        <div className="vocabmatch__column">
          <h3>Definitions</h3>
          <div className="vocabmatch__list">
            {unmatchedDefs.map((def) => (
              <button
                key={def}
                onClick={() => handleDefClick(def)}
                className="vocabmatch__item"
              >
                {def}
              </button>
            ))}
          </div>
        </div>
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

      {completed && <p className="vocabmatch__complete">🎉 All matched correctly!</p>}

      {/* RESET */}
      <button className="vocabmatch__reset" onClick={resetMatch}>
        Reset Activity
      </button>
    </div>
  );
};

export default VocabMatch;
