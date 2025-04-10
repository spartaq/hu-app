import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useNavigate, useLocation } from 'react-router-dom';
import SEO from '../../Components/SEO';
import headingsExercises from './Data/headings-exercises.json';
import Breadcrumbs from '../../Components/Breadcrumb';
import ReadingMenu from '../../Components/Menus/ReadingMenu';
import Sidebar from '../../Components/Sidebar';

const Headings = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [units, setUnits] = useState(headingsExercises);
  const [selectedChoices, setSelectedChoices] = useState([]);
  const [evaluation, setEvaluation] = useState([]);
  const [submissionError, setSubmissionError] = useState([]);
  const [currentUnit, setCurrentUnit] = useState(0); // Track the current unit
  const [isTopicMenuOpen, setIsTopicMenuOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('all');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const topic = searchParams.get('topic') || 'all';
    setSelectedTopic(topic);
    filterUnits(topic);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isTopicMenuOpen && !event.target.closest('.topic-menu')) {
        setIsTopicMenuOpen(true); // Close the menu when clicking outside
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isTopicMenuOpen]);

  const filterUnits = (topic) => {
    if (topic === 'all') {
      setUnits(headingsExercises);
    } else {
      const filtered = headingsExercises.filter(unit => unit.topic === topic);
      setUnits(filtered);
    }
  };

  const toggleTopicMenu = () => {
    setIsTopicMenuOpen(!isTopicMenuOpen);
  };

  const handleTopicChange = (topic) => {
    setSelectedTopic(topic);
    filterUnits(topic);
    setCurrentUnit(0);
    setIsTopicMenuOpen(false);
    navigate(`/reading-exercises/paragraph-headings?topic=${topic}`);
  };

  const handleNextUnit = () => {
    setCurrentUnit(current => (current + 1) % units.length);
  };

  const handlePrevUnit = () => {
    setCurrentUnit(current => (current - 1 + units.length) % units.length);
  };

// NEW handleChoiceSelect Function
const handleChoiceSelect = (index, selectedOption) => {
  const newSelectedChoices = [...selectedChoices];
  newSelectedChoices[index] = selectedOption.value;
  setSelectedChoices(newSelectedChoices);
};

// Add this new function to get filtered options based on selections
const getFilteredOptions = (choices, index) => {
  const selectedSet = new Set(selectedChoices); // Track all selected choices
  return choices
    .filter(choice => !selectedSet.has(choice)) // Exclude already selected choices
    .map(choice => ({ value: choice, label: choice })); // Convert remaining choices to dropdown format
};

  const handleSubmit = (e, unitIndex, paragraphIndex) => {
    e.preventDefault();
    if (selectedChoices[paragraphIndex] === "") {
      const newSubmissionError = [...submissionError];
      newSubmissionError[paragraphIndex] = true;
      setSubmissionError(newSubmissionError);
      return;
    }
    const updatedEvaluation = [...evaluation];
    updatedEvaluation[paragraphIndex] = selectedChoices[paragraphIndex] === units[unitIndex].paragraphs[paragraphIndex].correctChoice ? 'correct' : 'incorrect';
    setEvaluation(updatedEvaluation);
  };

  const resetSelectedChoices = () => {
    setSelectedChoices(Array(units[currentUnit].paragraphs.length).fill(""));
    setEvaluation(Array(units[currentUnit].paragraphs.length).fill(""));
    setSubmissionError(Array(units[currentUnit].paragraphs.length).fill(false));
  };

  return (
    <div>
      <SEO
        title='Reading Exercises - Paragraph Headings'
        description='A big list of English grammar exercises to practice for exams'
        name='English Exam Exercises'
        type='article'
      />
      <Breadcrumbs />
      <div className="home-container">
      <div className="introtext">
        
        <h3 className="mt-2">Paragraph Headings {currentUnit + 1}</h3>
        <div className="details">
                                <span className="level">Level: {units[currentUnit]?.level}</span>
                                <span className="topic">Topic: {units[currentUnit]?.topic}</span>
                            </div>
        <p>Here are heading exercises where you have to choose the correct heading for each paragraph. This type of task is generally found on TOEFL, EuroExam and Cambridge exams.</p>
      </div></div>
      <div className="grammar-container">
        <div className="exercises-container div1">
        <div className="skills-controls">

            <button  className="prevnex-button" onClick={toggleTopicMenu}>☰ Topic</button>
            <button type="button" className="prevnex-button"  onClick={handlePrevUnit}><i className="fas fa-arrow-left"></i></button>
            <button type="button" className="prevnex-button"  onClick={handleNextUnit}><i className="fas fa-arrow-right"></i></button> 
            
          </div>
          <div className="instructions">Choose the best heading to match each paragraph</div>
          <h1>{units[currentUnit].headingsTitle}</h1>
          {units[currentUnit].paragraphs.map((paragraph, index) => (
            <div key={index} className="paragraph">
              <form onSubmit={(e) => handleSubmit(e, currentUnit, index)}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <Select
                    value={selectedChoices[index] ? { value: selectedChoices[index], label: selectedChoices[index] } : null}
                    onChange={(selectedOption) => handleChoiceSelect(index, selectedOption)}
                    options={getFilteredOptions(paragraph.choices, index)} 
                    isSearchable={false}
                    className="select-dropdown"
                  />
                  {evaluation[index] && (
                    <span style={{ marginLeft: '5px' }}>
                      {evaluation[index] === 'correct' ? ' ✔️' : ' ❌'}
                    </span>
                  )}
                  {submissionError[index] && (
                    <span style={{ marginLeft: '5px', color: 'red' }}> ❌</span>
                  )}
                  <button className="check-button" type="submit">Check</button>
                </div>
              </form>
              <p>{paragraph.text}</p>
            </div>
          ))}
          <button type="button" onClick={resetSelectedChoices}>Reset Choices</button>
        </div>
        
      
      <div className={`topic-menu ${isTopicMenuOpen ? 'open' : ''}`}>
        <div className="topic-buttons">
          <button className="close-button" onClick={toggleTopicMenu}>✕</button>
          <button className="flashbtn" onClick={() => handleTopicChange('all')}>All</button>
          <button className="flashbtn" onClick={() => handleTopicChange('Daily')}>Daily Life and Activities</button>
          <button className="flashbtn" onClick={() => handleTopicChange('NoDaily')}>Work</button>
          </div> </div>
          <div className="gmenu div2"><ReadingMenu /></div>
                <div className="div3"> <Sidebar /></div> 
                </div>      
      </div>
    
  );
};

export default Headings;
