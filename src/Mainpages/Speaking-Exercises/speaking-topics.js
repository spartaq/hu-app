import React, { useState } from 'react';
import '../../CSS/speaking.css';
import data from './Data/speakingtopics.json';
import Breadcrumbs from '../../Components/Breadcrumb';
import SEO from '../../Components/SEO';
import SpeakingMenu from '../../Components/Menus/SpeakingMenu';

function SpeakingTopics() {
  const [topics, setTopics] = useState(data);
  const [selectedTopic, setSelectedTopic] = useState(0); // Default to the first topic
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSelectTopic = (index) => {
    setSelectedTopic(index);
    setIsMenuOpen(false); // Close the menu
  };

  const handlePreviousTopic = () => {
    if (selectedTopic > 0) {
      setSelectedTopic(selectedTopic - 1);
    }
  };

  const handleNextTopic = () => {
    if (selectedTopic < topics.length - 1) {
      setSelectedTopic(selectedTopic + 1);
    }
  };

  return (
    <div>
      <SEO
        title='Speaking Topics - English Exam Exercises'
        description='A collection of topics to help you prepare for the speaking parts of English exams'
        name='English Exam Exercises'
        type='article'
      />
      
      <div className="introtext">
        <Breadcrumbs />
        <h3 className=" mt-2">Speaking Topics</h3>
        <p>Choose a topic to see the related speaking prompts.</p>
      </div>
      
      <div className="grammar-container">
        <div className="column-right-speaking">
          <div className="skill-controls">
            <div className='flashsetnum'>Topics - {`Topic ${selectedTopic + 1}`}</div>
            <div>
              <button onClick={toggleMenu}>
                ☰ More Topics
              </button>
              <button 
                type="button" 
                className="prevnex-button" 
                onClick={handlePreviousTopic}
                disabled={selectedTopic === 0}
              >
                <i className="fas fa-arrow-left"></i>
              </button>
              <button 
                type="button" 
                className="prevnex-button" 
                onClick={handleNextTopic}
                disabled={selectedTopic === topics.length - 1}
              >
                <i className="fas fa-arrow-right"></i>
              </button> 
            </div>

            <div>Topic: {topics[selectedTopic].topic}</div>
            <div>Level: {topics[selectedTopic].level}</div>
          </div>

          <div className="exercises-container">
            <div className="topic-content">
              {topics[selectedTopic] && (
                <>
                  <h2>{topics[selectedTopic].title}</h2>
                  <div className="speaking-container">
                  
                    {topics[selectedTopic].content.map((item, index) => (
                      <div className="speaking-list-container" key={index}>{item}</div>
                    ))}
                  
                  </div>
                </>
              )}
            </div>
          </div>

          <div className={`mobile-menu-speaking ${isMenuOpen ? 'open' : ''}`}>
            <div className="set-buttons">
              <button className="close-button" onClick={toggleMenu}>✕</button>
              {topics.map((topic, index) => (
                <button
                  key={index}
                  className="flashbtn"
                  onClick={() => handleSelectTopic(index)}
                >
                  {topic.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <SpeakingMenu />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default SpeakingTopics;
