import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { addTooltipsToText } from '../tooltipUtils.js';
import { FaAngleDown } from 'react-icons/fa';
import '../../CSS/ReadingActivity.css';

const ReadingActivity = ({ data: propData }) => {
  const location = useLocation();
  const data = propData || location.state?.data;
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showVocab, setShowVocab] = useState(false);

  useEffect(() => {
    if (data?.paragraphs?.[0]?.questions?.length) {
      setAnswers(Array(data.paragraphs[0].questions.length).fill(''));
    }
  }, [data]);

  const handleAnswerChange = (qIdx, choice) => {
    const updated = [...answers];
    updated[qIdx] = choice;
    setAnswers(updated);
    setShowResults(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const isCorrect = (qIdx) =>
    answers[qIdx] === data?.paragraphs?.[0]?.questions?.[qIdx]?.correctAnswer;

  return (
    <div className="reading-activity-card">
      <h2 className="reading-title">{data?.readingcompTitle || 'Reading Exercise'}</h2>

{/* Reading Text */}
<div className="reading-text">
  {data?.paragraphs?.[0]?.text
    ?.split("\n")
    .map((line, index) => (
      <p key={index}>{line}</p>
    ))}
</div>

      {/* Questions */}
      <form className="reading-questions-form" onSubmit={handleSubmit}>
        {data?.paragraphs?.[0]?.questions?.map((q, qIdx) => (
          <div key={qIdx} className="reading-question-block">
            <div className="question-text">
              {q.number}. {q.question}
            </div>
            <div className="question-choices">
              {q.choices.map((choice, cIdx) => (
                <label key={cIdx} className={`choice-label ${showResults ? (isCorrect(qIdx) && answers[qIdx] === choice ? 'correct' : answers[qIdx] === choice ? 'incorrect' : '') : ''}`}>
                  <input
                    type="radio"
                    name={`question-${qIdx}`}
                    value={choice}
                    checked={answers[qIdx] === choice}
                    onChange={() => handleAnswerChange(qIdx, choice)}
                  />
                  {choice}
                  {showResults && answers[qIdx] === choice && isCorrect(qIdx) && <span className="result-icon">✔️</span>}
                  {showResults && answers[qIdx] === choice && !isCorrect(qIdx) && <span className="result-icon">❌</span>}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button type="submit" className="checkbtn">Check Answers</button>
      </form>

      {/* Vocabulary Toggle */}
      <div className="vocab-toggle" onClick={() => setShowVocab(!showVocab)}>
        Vocabulary <FaAngleDown className={`toggle-icon ${showVocab ? 'open' : ''}`} />
      </div>
      {showVocab && (
        <div className="vocab-grid">
          {data?.vocabulary?.length ? (
            <ul>
              {data.vocabulary.map((item, idx) => (
                <li key={idx}>{item.hun} - {item.eng}</li>
              ))}
            </ul>
          ) : (
            <p>No vocabulary available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ReadingActivity;
