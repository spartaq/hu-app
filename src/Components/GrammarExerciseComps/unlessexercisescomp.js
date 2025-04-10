import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Select, { components } from 'react-select';
import sentencesData from '../../Mainpages/Grammar-Exercises/Data/unless.json';
import PageCounter from '../../Utils/pagecounter';
import { FaQuestionCircle } from "react-icons/fa";

const Unlessexercises = () => {
    const [answers, setAnswers] = useState(Array(5).fill(''));
    const [evaluation, setEvaluation] = useState(Array(5).fill(''));
    const [displayedSentences, setDisplayedSentences] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedTopic, setSelectedTopic] = useState(null);
    
      
  
    const uniqueTopics = useMemo(() => {
      const topics = sentencesData.map((sentence) => sentence.topic);
      return Array.from(new Set(topics)).map((topic) => ({ label: topic, value: topic }));
    }, []);
  
    const filteredSentences = useMemo(() => {
      return selectedTopic
        ? sentencesData.filter((sentence) => sentence.topic === selectedTopic)
        : sentencesData;
    }, [selectedTopic]);
  
    // Calculate total number of pages based on filtered sentences
    const totalPages = Math.ceil(filteredSentences.length / 5);
    // Calculate current page
    const currentPage = Math.floor(currentIndex / 5) + 1;
    
      
        const [showAnswers, setShowAnswers] = useState(false);
      
        const toggleShowAnswers = () => {
          setShowAnswers((prevState) => !prevState);
        };
  
    // Generate new sentences based on current index and selected topic
    const generateNewSentences = useCallback(() => {
      const newSentences = filteredSentences.slice(currentIndex, currentIndex + 5);
      setDisplayedSentences(newSentences);
      setAnswers(Array(newSentences.length).fill(''));
      setEvaluation(Array(newSentences.length).fill(''));
    }, [currentIndex, filteredSentences]);
  
    useEffect(() => {
      generateNewSentences();
    }, [currentIndex, filteredSentences, generateNewSentences]);
  
    const handleChange = (index, value) => {
      const updatedAnswers = [...answers];
      updatedAnswers[index] = value;
      setAnswers(updatedAnswers);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const updatedEvaluation = displayedSentences.map((sentence, index) => {
        const correctAnswer = sentence.answer;
        const userAnswer = answers[index]?.trim();
  
        if (!userAnswer) return '';
  
        return userAnswer.toLowerCase() === correctAnswer?.trim().toLowerCase()
          ? 'correct'
          : 'incorrect';
      });
      setEvaluation(updatedEvaluation);
    };
  
    const handleReset = () => {
      setAnswers(Array(displayedSentences.length).fill(''));
      setEvaluation(Array(displayedSentences.length).fill(''));
    };
  
    const handleNextExercise = () => {
      const filteredSentences = selectedTopic
        ? sentencesData.filter((sentence) => sentence.topic === selectedTopic)
        : sentencesData;
  
      const nextIndex = (currentIndex + 5) % filteredSentences.length;
      setCurrentIndex(nextIndex);
    };
  
    const handlePreviousExercise = () => {
      const filteredSentences = selectedTopic
        ? sentencesData.filter((sentence) => sentence.topic === selectedTopic)
        : sentencesData;
  
      const previousIndex = (currentIndex - 5 + filteredSentences.length) % filteredSentences.length;
      setCurrentIndex(previousIndex);
    };
    



  return (
    <div>
      <div className="grammar-comp-container">
        <div className="introtext">
          <div className="exercises-container">
            <div className="exercisectrl">
              <button type="button" className="checkbtn" onClick={handlePreviousExercise}>
                <i className="fas fa-arrow-left"></i> Prev Set
              </button>
              <button type="button" className="checkbtn" onClick={handleNextExercise}>
                Next Set <i className="fas fa-arrow-right"></i>
              </button>
              <button type="submit" className="checkbtn" onClick={handleSubmit}>Check</button>
              <button type="submit" className="checkbtn" onClick={handleReset}>Reset</button>
              <button 
                    type="button" 
                    className="checkbtn" 
                    onClick={toggleShowAnswers}
                    >
                    {showAnswers ? 'Hide Answers' : 'Show Answers'}
                    </button>
              <div className="filter-dropdown-container">
                <Select
                  value={selectedTopic ? { label: selectedTopic, value: selectedTopic } : null}
                  onChange={(option) => setSelectedTopic(option?.value || null)}
                  options={[{ label: 'All Topics', value: null }, ...uniqueTopics]}
                  placeholder="Sentence topic"
                  isClearable
                  components={{ Input: components.Input }}
                />
              </div>
            </div>
            <p className="descriptionbox">Complete the sentences below based on the prompts.</p>
            <form className="exercises-form" onSubmit={handleSubmit}>
                
            <PageCounter currentPage={currentPage} totalPages={totalPages} />
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unlessexercises;
