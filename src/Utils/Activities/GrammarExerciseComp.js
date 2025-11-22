import React, { useState, useEffect, useCallback, useMemo } from 'react';
import PageCounter from '../../Utils/pagecounter';
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Select from 'react-select';
import "../../CSS/GrammarActivity.css";

const GrammarExerciseComp = ({ data, title, description }) => {
  const [answers, setAnswers] = useState([]);
  const [evaluation, setEvaluation] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showAnswers, setShowAnswers] = useState(false);

  const uniqueTopics = useMemo(() => {
    const topics = data.map((s) => s.topic);
    return Array.from(new Set(topics)).map(t => ({ label: t, value: t }));
  }, [data]);

  const filteredSentences = useMemo(() => {
    return selectedTopic ? data.filter((s) => s.topic === selectedTopic) : data;
  }, [data, selectedTopic]);

  const totalPages = Math.ceil(filteredSentences.length / 5);
  const currentPage = Math.floor(currentIndex / 5) + 1;

  const displayedSentences = useMemo(() => {
    return filteredSentences.slice(currentIndex, currentIndex + 5);
  }, [filteredSentences, currentIndex]);

  useEffect(() => {
    setAnswers(Array(displayedSentences.length).fill(''));
    setEvaluation(Array(displayedSentences.length).fill(null));
  }, [displayedSentences]);

  const handleChange = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const handleSubmit = (index) => {
    const updated = [...evaluation];
    const correct = displayedSentences[index].answer.trim().toLowerCase();
    const user = (answers[index] || '').trim().toLowerCase();
    updated[index] = user === '' ? null : user === correct ? 'correct' : 'incorrect';
    setEvaluation(updated);
  };

  const handleReset = () => {
    setAnswers(Array(displayedSentences.length).fill(''));
    setEvaluation(Array(displayedSentences.length).fill(null));
  };

  const handleNext = () => setCurrentIndex((currentIndex + 5) % filteredSentences.length);
  const handlePrevious = () => setCurrentIndex((currentIndex - 5 + filteredSentences.length) % filteredSentences.length);

  return (
    <div className="grammar-card">
      <h2 className="grammar-title">{title}</h2>
      <p className="grammar-description">{description}</p>

      <div className="grammar-controls">
        <PageCounter currentPage={currentPage} totalPages={totalPages} />
        <Select
          value={selectedTopic ? { label: selectedTopic, value: selectedTopic } : null}
          onChange={(option) => setSelectedTopic(option?.value || null)}
          options={[{ label: 'All Topics', value: null }, ...uniqueTopics]}
          placeholder="Filter by topic"
          isClearable
        />
      </div>

      <div className="grammar-sentences">
        {displayedSentences.map((sentence, index) => (
          <div key={index} className="grammar-sentence-card">
            <span className="grammar-number">{currentIndex + index + 1}</span>
            <span className="grammar-text">
              {sentence.text.split('___').map((part, i) => (
                <React.Fragment key={i}>
                  {i > 0 && (
                    <input
                      type="text"
                      value={showAnswers ? sentence.answer : answers[index] || ''}
                      onChange={(e) => handleChange(index, e.target.value)}
                      readOnly={showAnswers}
                      className={`grammar-input ${evaluation[index] === 'correct' ? 'correct' : evaluation[index] === 'incorrect' ? 'incorrect' : ''}`}
                    />
                  )}
                  {part}
                </React.Fragment>
              ))}
            </span>
            {evaluation[index] === 'correct' && <FaCheckCircle className="evaluation-icon correct-icon" />}
            {evaluation[index] === 'incorrect' && <FaTimesCircle className="evaluation-icon incorrect-icon" />}
            <button className="grammar-check-btn" onClick={() => handleSubmit(index)}>Check</button>
          </div>
        ))}
      </div>

      <div className="grammar-buttons">
        <button onClick={handlePrevious}>⬅️ Prev Set</button>
        <button onClick={handleNext}>Next Set ➡️</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={() => setShowAnswers(!showAnswers)}>
          {showAnswers ? 'Hide Answers' : 'Show Answers'}
        </button>
      </div>
    </div>
  );
};

export default GrammarExerciseComp;
