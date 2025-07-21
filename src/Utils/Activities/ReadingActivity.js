import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import '../../CSS/skills.css';
import { addTooltipsToText } from '../tooltipUtils.js';
import VocabularyMatch from '../vocabmatchcolumn.js';
import vocabData from "../../Components/VocabularyListComps/Data/vocabcolumn.json";
import { FaAngleDown } from 'react-icons/fa';

const ReadingActivity = ({ data }) => {
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(true);
  const [showVocab, setShowVocab] = useState(false);
  const topicMenuRef = useRef(null);

  useEffect(() => {
    if (data?.paragraphs?.[0]?.questions?.length) {
      const qCount = data.paragraphs[0].questions.length;
      setAnswers(Array(qCount).fill(''));
    }
  }, [data]);

  const handleAnswerChange = (questionIndex, choice) => {
    const updated = [...answers];
    updated[questionIndex] = choice;
    setAnswers(updated);
    setShowResults(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const isCorrect = (qIdx) =>
    answers[qIdx] === data?.paragraphs?.[0]?.questions?.[qIdx]?.correctAnswer;

  const getResultIcon = (qIdx, cIdx) => {
    if (!showResults) return null;
    const choice = data?.paragraphs?.[0]?.questions?.[qIdx]?.choices?.[cIdx];
    if (isCorrect(qIdx) && answers[qIdx] === choice) {
      return <span style={{ color: 'green' }}>&#10003;</span>;
    } else if (!isCorrect(qIdx) && answers[qIdx] === choice) {
      return <span style={{ color: 'red' }}>&#10005;</span>;
    }
    return null;
  };

  const toggleGridVisibility = () => setIsGridVisible((prev) => !prev);
  const toggleVocab = () => setShowVocab((prev) => !prev);
  const closeVocab = () => setShowVocab(false);

  if (!data) {
    return <div>Loading reading...</div>;
  }

  return (
      <div className="readings-container">
        <form className="readingform" onSubmit={handleSubmit}>
          <div className="reading-text introtext">
            <h3 className="mt-2">{data.readingcompTitle}</h3>
            {data.paragraphs?.map((p, idx) => (
              <div
                key={idx}
                dangerouslySetInnerHTML={{
                  __html: addTooltipsToText(p.text, data.vocabulary),
                }}
              />
            ))}
          </div>

          <div className="question-container">
            <Carousel interval={null} wrap={false} controls indicators={false} pause="hover">
              {data.paragraphs?.[0]?.questions?.map((q, qIdx) => (
                <Carousel.Item key={qIdx}>
                  <div className="question">
                    {q.number}. {q.question}
                  </div>
                  <div className="choices-container">
                    {q.choices.map((choice, cIdx) => (
                      <label key={cIdx}>
                        <input
                          type="radio"
                          value={choice}
                          checked={answers[qIdx] === choice}
                          onChange={() => handleAnswerChange(qIdx, choice)}
                        />
                        {choice}
                        {getResultIcon(qIdx, cIdx)}
                      </label>
                    ))}
                  </div>
                  <button type="submit" className="checkbtn">
                    Check Answer
                  </button>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          {showVocab && (
            <div className="overlay" onClick={closeVocab}>
              <div className="transcript-overlay" onClick={(e) => e.stopPropagation()}>
                <div className="vocabulary-text">
                  {data.vocabulary?.length ? (
                    <ul>
                      {data.vocabulary.map((item, idx) => (
                        <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  ) : (
                    <p>No vocabulary available for this reading.</p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="reading-vocab-header-box" onClick={toggleGridVisibility}>
            Vocabulary <FaAngleDown />
          </div>
          {isGridVisible && (
            <div className="grammar-display-grid">
                  {data.vocabulary?.length ? (
                    <ul>
                      {data.vocabulary.map((item, idx) => (
                        <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  ) : (
                    <p>No vocabulary available for this reading.</p>
                  )}
            </div>
          )}


        </form>
      </div>
    
  );
};

export default ReadingActivity;
