import React, { useState, useMemo, useEffect } from "react";
import "../../CSS/VocabmatchActivity.css";
import ProgressBar from "../../Components/ProgressBar";

export default function VocabMatchModal({ data = {}, onComplete, onProgress }) {
  // Support multiple exercises or single exercise
  const exercises = Array.isArray(data.items) ? data.items : [data];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [matches, setMatches] = useState({});

  const currentExercise = exercises[currentIndex] || {};
  const { title = "Vocabulary Match", items: pairs = [] } = currentExercise;

  // Normalize pairs
  const normalizedPairs = useMemo(() => pairs.filter(p => p.term && p.definition), [pairs]);

  // Terms fixed, definitions shuffled
  const terms = normalizedPairs.map(p => p.term);
  const definitions = useMemo(() => {
    const defs = normalizedPairs.map(p => p.definition);
    for (let i = defs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [defs[i], defs[j]] = [defs[j], defs[i]];
    }
    return defs;
  }, [normalizedPairs, currentIndex]);

  const handleTermClick = (term) => setSelectedTerm(term === selectedTerm ? null : term);

  const handleDefClick = (def) => {
    if (!selectedTerm) return;

    const correct = normalizedPairs.find(p => p.term === selectedTerm);
    if (correct && correct.definition === def) {
      setMatches(prev => ({ ...prev, [selectedTerm]: def }));
    }

    setSelectedTerm(null);
  };

  const unmatchedTerms = terms.filter(t => !matches[t]);
  const unmatchedDefs = definitions.filter(d => !Object.values(matches).includes(d));

  const completed = unmatchedTerms.length === 0;

  // PROGRESS: number of matched pairs
  const progress = Object.keys(matches).length;

  // Report progress
  useEffect(() => {
    if (onProgress) onProgress(progress / normalizedPairs.length);
  }, [progress, normalizedPairs.length, onProgress]);

  // Move to next exercise or finish
  useEffect(() => {
    if (completed) {
      const nextIndex = currentIndex + 1;
      if (nextIndex < exercises.length) {
        setCurrentIndex(nextIndex);
        setMatches({});
        setSelectedTerm(null);
      } else {
        if (onComplete) onComplete();
      }
    }
  }, [completed, currentIndex, exercises.length, onComplete]);

  return (
    <div className="vocabmatch__card">
      <h2 className="vocabmatch__title">{title}</h2>

      {/* Progress Bar */}
      <ProgressBar completed={progress} total={normalizedPairs.length} />

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

      {/* Matched list */}
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
