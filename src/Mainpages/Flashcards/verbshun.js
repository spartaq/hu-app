import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../CSS/flashcards.css';
import verbshun from './Data/verbshun.json';
import SEO from '../../Components/SEO';
import FlashcardMenu from '../../Components/Menus/FlashcardMenu';
import CrossArrows from '../../Images/cross-arrows.svg';

function VerbsHun() {
  const [currentSet, setCurrentSet] = useState('set1');
  const [cards, setCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isReverse, setIsReverse] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTopicMenuOpen, setIsTopicMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [showTooltip, setShowTooltip] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTopicMenu = () => {
    setIsTopicMenuOpen(!isTopicMenuOpen);
  };

  const setLabels = Object.keys(verbshun).map(setKey => {
    const range = verbshun[setKey][0].range; // Get the range from the first card of each set
    return { setKey, label: `${setKey} ${range}` };
  });

  useEffect(() => {
    setCards(verbshun[currentSet]);
  }, [currentSet]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1023) {
        setIsFullscreen(true);
      } else {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const topic = params.get('topic');
    if (topic) {
      setSelectedTopic(topic);
    }
  }, [location]);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === filteredCards.length - 1 ? 0 : prevIndex + 1
    );
    setIsFlipped(false);
    setShowTooltip(false); // Hide tooltip when navigating to next card
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? filteredCards.length - 1 : prevIndex - 1
    );
    setIsFlipped(false);
    setShowTooltip(false); // Hide tooltip when navigating to previous card
  };

  const handleSwitch = () => {
    setIsReverse(!isReverse);
    setIsFlipped(false);
  };



  const handleSetChange = (set) => {
    console.log(`Navigating to: /verbshun?set=${set}&topic=all`);
    setCurrentSet(set);
    setSelectedTopic('all'); // Reset topic filter when set changes
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setIsMenuOpen(false); // Close menu after selecting a set
    navigate(`/flashcards/verbshun?set=${set}&topic=all`);
  };
  
  const handleTopicChange = (topic) => {
    console.log(`Navigating to: /verbshun?set=${currentSet}&topic=${topic}`);
    setSelectedTopic(topic);
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setIsTopicMenuOpen(false); // Close topic menu after selecting a topic
    navigate(`/flashcards/verbshun?set=${currentSet}&topic=${topic}`);
  };
  

  const formatSetId = (setId) => {
    const number = setId.replace(/\D/g, ''); // Extracts the number
    return `Set ${number}`;
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };



  // Filter cards based on the selected set and topic
  const filteredCards = selectedTopic === 'all'
    ? cards
    : Object.values(verbshun).flat().filter(card => card.topic === selectedTopic);

  const handleTooltipClick = () => {
    setShowTooltip(!showTooltip);
  };

  if (!cards || cards.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SEO
        title='Vocabulary Flashcards - B2 Adjectives - English Exam Exercises'
        description='A collection of flashcards to strengthen your vocabulary'
        name='English Exam Exercises'
        type='article'
      />
       <div className="grammar-container">

      <div className={`flashpage-container  ${isFullscreen ? 'fullscreen' : ''}`}>
        <div className={`column-right ${isFullscreen ? 'fullscreen' : ''}`}>
          <div className="flashset-controls">
           
            <div className="flashmenutog">
              <button className="menu-toggle" onClick={toggleMenu}>
                ☰ More
              </button>
              
            </div>
            <div className="flashmenutog">
            <button className="menu-toggle" onClick={toggleTopicMenu}>
              ☰ Topics
            </button>
            </div>
          </div>
          <div className="flashheader">
            <div className='flashsetnum'>100 Most Common Verbs </div><span className="card-level">{filteredCards[currentCardIndex].range}</span>
            <div className="card-meta">
                    <span className="card-topic">{filteredCards[currentCardIndex].topic}</span>
                    <span className="card-level">{filteredCards[currentCardIndex].level}</span>
                    
                  </div>
            
            
          </div>
          <div className="flashcard-page">
            <div className="flashcard-container">
            <div className="cardHolder">
  <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
    <div className={`front ${isReverse ? 'switched' : ''}`}>
      {isReverse ? (
        <>
          <div className="backText">{filteredCards[currentCardIndex].back}</div>
        </>
      ) : (
        <>
          <div className="frontText">{filteredCards[currentCardIndex].front}</div>
          <div className="context">{filteredCards[currentCardIndex].context}</div>
        </>
      )}
    </div>
    <div className={`back ${isReverse ? 'switched' : ''}`}>
      {isReverse ? (
        <>
          <div className="context">{filteredCards[currentCardIndex].context}</div>
          <div className="frontText">{filteredCards[currentCardIndex].front}</div>
        </>
      ) : (
        <>
          <div className="backText">{filteredCards[currentCardIndex].back}</div>
        </>
      )}
    </div>
  </div>
  {showTooltip && (
    <div className="tooltip-content">
      {filteredCards[currentCardIndex].tip}
    </div>
  )}
</div>

              
              <div className="flashCardButtons">
                <div>
                  <button className="fullscreen-toggle" onClick={toggleFullscreen}>
                    {isFullscreen ? 'X' : '⤢'}
                  </button>
                </div>
                <button className="flash-next-btn" onClick={handlePrevCard}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                </button>
                <button><span>{currentCardIndex + 1}/{filteredCards.length}</span></button>
                <button onClick={handleNextCard}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </button>
                <button onClick={handleSwitch} className="icon-button">
                  <img src={CrossArrows} width="15px" alt="arrows" />
                </button>
                <button className="tooltip-button" onClick={handleTooltipClick}>hint</button>
              </div>
            </div>
          </div>
          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
              <button className="close-button" onClick={toggleMenu}>✕</button>
              <div className="set-buttons">
                
                {Object.keys(verbshun).map((set, i) => (
                  <button
                    key={i}
                    className="flashbtn"
                    onClick={() => handleSetChange(set)}
                  >
                    {`Set ${i + 1} ${verbshun[set][0].range}`}
                  </button>
                ))}
              
              </div>
            </div>
          <div className={`topic-menu ${isTopicMenuOpen ? 'open' : ''}`}>
          <button className="close-button" onClick={toggleTopicMenu}>✕</button>
            <div className="topic-buttons">
              <button className="flashbtn" onClick={() => handleTopicChange('all')}>All</button>
              <button className="flashbtn" onClick={() => handleTopicChange('Business')}>Business</button>
              <button className="flashbtn" onClick={() => handleTopicChange('Health')}>Health</button>              
              <button className="flashbtn" onClick={() => handleTopicChange('Environment')}>Environment</button>
              <button className="flashbtn" onClick={() => handleTopicChange('General')}>General</button>
              <button className="flashbtn" onClick={() => handleTopicChange('Money')}>Money</button>
            </div>
          </div>
        </div>
      </div>

      <div className="gmenu"> <FlashcardMenu /> 
      </div>

  
      </div>
    </div>
  );
}

export default VerbsHun;
