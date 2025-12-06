import React, { useState, useEffect } from 'react';
import '../../CSS/ReadingActivity.css';
import { FaAngleDown } from 'react-icons/fa';

const ReadingActivity = ({ data }) => {
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showVocab, setShowVocab] = useState(false);

  // Normalize paragraphs
  const paragraphs = data?.paragraphs || [];
  const vocab = data?.vocabulary || [];
  const title = data?.readingcompTitle || 'Reading Exercise';

  // Initialize answers for first paragraph if questions exist
  useEffect(() => {
    if (paragraphs[0]?.questions?.length) {
      setAnswers(Array(paragraphs[0].questions.length).fill(''));
    }
  }, [paragraphs]);

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
    answers[qIdx] === paragraphs[0]?.questions?.[qIdx]?.correctAnswer;

  return (
    <div className="reading-activity-card">
      <h2 className="reading-title">{title}</h2>

      {/* Reading Text */}
      <div className="reading-text">
        {paragraphs[0]?.text?.split("\n").map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>

      {/* Questions */}
      {paragraphs[0]?.questions?.length > 0 && (
        <form className="reading-questions-form" onSubmit={handleSubmit}>
          {paragraphs[0].questions.map((q, qIdx) => (
            <div key={qIdx} className="reading-question-block">
              <div className="question-text">
                {q.number}. {q.question}
              </div>
              <div className="question-choices">
                {q.choices.map((choice, cIdx) => (
                  <label
                    key={cIdx}
                    className={`choice-label ${
                      showResults
                        ? isCorrect(qIdx) && answers[qIdx] === choice
                          ? 'correct'
                          : answers[qIdx] === choice
                          ? 'incorrect'
                          : ''
                        : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${qIdx}`}
                      value={choice}
                      checked={answers[qIdx] === choice}
                      onChange={() => handleAnswerChange(qIdx, choice)}
                    />
                    {choice}
                    {showResults && answers[qIdx] === choice && isCorrect(qIdx) && (
                      <span className="result-icon">✔️</span>
                    )}
                    {showResults && answers[qIdx] === choice && !isCorrect(qIdx) && (
                      <span className="result-icon">❌</span>
                    )}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button type="submit" className="checkbtn">Check Answers</button>
        </form>
      )}

      {/* Vocabulary Toggle */}
      {vocab.length > 0 && (
        <>
          <div className="vocab-toggle" onClick={() => setShowVocab(!showVocab)}>
            Vocabulary <FaAngleDown className={`toggle-icon ${showVocab ? 'open' : ''}`} />
          </div>
          {showVocab && (
            <div className="vocab-grid">
              <ul>
                {vocab.map((item, idx) => (
                  <li key={idx}>{item.hun} - {item.eng}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ReadingActivity;
