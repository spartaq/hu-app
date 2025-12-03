import React, { useState, useMemo } from "react";
import "../../CSS/VocabmatchActivity.css";

export default function VocabMatchModal({ pairs = [], title = "Vocabulary Match" }) {
  // normalize input — always a flat array of objects
  const normalizedPairs = useMemo(() => {
    if (!Array.isArray(pairs)) return [];
    return pairs.filter(p => p.term && p.definition);
  }, [pairs]);

  // NO SHUFFLE — KEEP TERMS FIXED
  const terms = normalizedPairs.map(p => p.term);

  // SHUFFLE ONLY DEFINITIONS (safe)
  const definitions = useMemo(() => {
    const defs = normalizedPairs.map(p => p.definition);
    for (let i = defs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [defs[i], defs[j]] = [defs[j], defs[i]];
    }
    return defs;
  }, [pairs]);

  const [selectedTerm, setSelectedTerm] = useState(null);
  const [matches, setMatches] = useState({});

  const handleTermClick = (t) => {
    setSelectedTerm(t === selectedTerm ? null : t);
  };

  const handleDefClick = (d) => {
    if (!selectedTerm) return;

    const correct = normalizedPairs.find(p => p.term === selectedTerm);
    if (correct && correct.definition === d) {
      setMatches(prev => ({ ...prev, [selectedTerm]: d }));
    }

    setSelectedTerm(null);
  };

  const unmatchedTerms = terms.filter(t => !matches[t]);
  const unmatchedDefs = definitions.filter(
    d => !Object.values(matches).includes(d)
  );

  const completed = unmatchedTerms.length === 0;

  return (
    <div className="vocabmatch__card">
      <h2 className="vocabmatch__title">{title}</h2>

      {/* TWO COLUMNS */}
      <div className="vocabmatch__columns">

        {/* TERMS */}
        <div className="vocabmatch__column">
          <div className="vocabmatch__list">
            {unmatchedTerms.map(term => (
              <button
                key={term}
                className={`vocabmatch__item ${selectedTerm === term ? "selected" : ""}`}
                onClick={() => handleTermClick(term)}
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* DEFINITIONS */}
        <div className="vocabmatch__column">
          <div className="vocabmatch__list">
            {unmatchedDefs.map(def => (
              <button
                key={def}
                className="vocabmatch__item"
                onClick={() => handleDefClick(def)}
              >
                {def}
              </button>
            ))}
          </div>
        </div>
      </div>

      <h3 className="vocabmatch__subtitle">Matched</h3>
      <ul className="vocabmatch__matched-list">
        {Object.entries(matches).map(([term, def]) => (
          <li key={term} className="vocabmatch__matched-item">
            <strong>{term}</strong> → {def}
          </li>
        ))}
      </ul>

      {completed && (
        <p className="vocabmatch__complete">🎉 All matched!</p>
      )}

      {/* RESET */}
      <button
        className="vocabmatch__reset"
        onClick={() => {
          setMatches({});
          setSelectedTerm(null);
        }}
      >
        Reset
      </button>
    </div>
  );
}
