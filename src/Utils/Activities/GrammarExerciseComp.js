import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Select, { components } from 'react-select';
import PageCounter from '../../Utils/pagecounter';
import { FaQuestionCircle } from "react-icons/fa";

const GrammarExerciseComp = ({ data, title, description }) => {
  const [answers, setAnswers] = useState([]);
  const [evaluation, setEvaluation] = useState([]);
  const [displayedSentences, setDisplayedSentences] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showAnswers, setShowAnswers] = useState(false);

  const uniqueTopics = useMemo(() => {
    const topics = data.map((s) => s.topic);
    return Array.from(new Set(topics)).map((topic) => ({ label: topic, value: topic }));
  }, [data]);

  const filteredSentences = useMemo(() => {
    return selectedTopic ? data.filter((s) => s.topic === selectedTopic) : data;
  }, [data, selectedTopic]);

  const totalPages = Math.ceil(filteredSentences.length / 5);
  const currentPage = Math.floor(currentIndex / 5) + 1;

  const generateNewSentences = useCallback(() => {
    const newSet = filteredSentences.slice(currentIndex, currentIndex + 5);
    setDisplayedSentences(newSet);
    setAnswers(Array(newSet.length).fill(''));
    setEvaluation(Array(newSet.length).fill(''));
  }, [currentIndex, filteredSentences]);

  useEffect(() => {
    generateNewSentences();
  }, [currentIndex, filteredSentences, generateNewSentences]);

  const handleChange = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const handleSubmit = (e, index = null) => {
    if (e) e.preventDefault();
    setEvaluation((prev) => {
      const updated = [...prev];
      if (index !== null) {
        const correct = displayedSentences[index].answer.trim().toLowerCase();
        const user = (answers[index] || '').trim().toLowerCase();
        updated[index] = user === '' ? null : user === correct ? 'correct' : 'incorrect';
      } else {
        displayedSentences.forEach((s, i) => {
          const correct = s.answer.trim().toLowerCase();
          const user = (answers[i] || '').trim().toLowerCase();
          updated[i] = user === '' ? null : user === correct ? 'correct' : 'incorrect';
        });
      }
      return updated;
    });
  };

  const handleReset = () => {
    setAnswers(Array(displayedSentences.length).fill(''));
    setEvaluation(Array(displayedSentences.length).fill(null));
  };

  const handleNext = () => {
    const next = (currentIndex + 5) % filteredSentences.length;
    setCurrentIndex(next);
  };

  const handlePrevious = () => {
    const prev = (currentIndex - 5 + filteredSentences.length) % filteredSentences.length;
    setCurrentIndex(prev);
  };

  const CustomInput = (props) => <components.Input {...props} readOnly />;

  return (
    <div className="grammar-comp-container">
      <div className="introtext">
        <div className="exercises-container">
          <h2>{title}</h2>
          <p className="descriptionbox">{description}</p>
          <form className="exercises-form" onSubmit={handleSubmit}>
            <div className="counterfilter">
              <PageCounter currentPage={currentPage} totalPages={totalPages} />
              <div className="filter-dropdown-container">
                <Select
                  value={selectedTopic ? { label: selectedTopic, value: selectedTopic } : null}
                  onChange={(option) => setSelectedTopic(option?.value || null)}
                  options={[{ label: 'All Topics', value: null }, ...uniqueTopics]}
                  placeholder="Sentence topic"
                  isClearable
                  components={{ Input: CustomInput }}
                />
              </div>
            </div>
            {displayedSentences.map((sentence, index) => (
              <div key={index} className="sentence-container">
                <span className="circle">{index + 1}</span>
                {sentence.text.split('___').map((part, partIndex) => (
                  <React.Fragment key={partIndex}>
                    {partIndex > 0 && (
                      <input
                        type="text"
                        value={showAnswers ? sentence.answer : answers[index] || ''}
                        onChange={(e) => handleChange(index, e.target.value)}
                        readOnly={showAnswers}
                      />
                    )}
                    {part}
                  </React.Fragment>
                ))}
                <FaQuestionCircle className="evaluation-icon" onClick={(e) => handleSubmit(e, index)} />
                {evaluation[index] === 'correct' ? ' ✔️' : evaluation[index] === 'incorrect' ? ' ❌' : ''}
              </div>
            ))}
            <div className="exercisectrl">
              <button type="button" className="checkbtn" onClick={handlePrevious}>
                <i className="fas fa-arrow-left"></i> Prev Set
              </button>
              <button type="button" className="checkbtn" onClick={handleNext}>
                Next Set <i className="fas fa-arrow-right"></i>
              </button>
              <button type="submit" className="checkbtn" onClick={handleReset}>Reset</button>
              <button type="button" className="checkbtn" onClick={() => setShowAnswers(!showAnswers)}>
                {showAnswers ? 'Hide Answers' : 'Show Answers'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GrammarExerciseComp;
