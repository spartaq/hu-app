import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/flashcards.css';
import c1verbs from './Data/c1verbs.json';
import SEO from '../../Components/SEO';
import Sidebar from '../../Components/Sidebar';
import FlashcardMenu from '../../Components/Menus/FlashcardMenu';
import Breadcrumbs from '../../Components/Breadcrumb';
import CrossArrows from '../../Images/cross-arrows.svg';

function FlashC1Verb() {
  const [currentSet, setCurrentSet] = useState('set1');
  const [cards, setCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isReverse, setIsReverse] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCategoryMenu = () => {
    setIsCategoryMenuOpen(!isCategoryMenuOpen);
  };

  useEffect(() => {
    setCards(c1verbs[currentSet]);
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
    setCurrentSet(set);
    setSelectedCategory('all'); // Reset category filter when set changes
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setIsMenuOpen(false); // Close menu after selecting a set
  };

  const formatSetId = (setId) => {
    const number = setId.replace(/\D/g, ''); // Extracts the number
    return `Set ${number}`;
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setIsCategoryMenuOpen(false); // Close category menu after selecting a category
  };

  // Filter cards based on the selected set and category
  const filteredCards = selectedCategory === 'all'
    ? cards
    : Object.values(c1verbs).flat().filter(card => card.cat === selectedCategory);

  const handleTooltipClick = () => {
    setShowTooltip(!showTooltip);
  };

  if (!cards || cards.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SEO
        title='Vocabulary Flashcards - C1 Advanced Verbs - English Exam Exercises'
        description='A collection of flashcards to strengthen your vocabulary'
        name='English Exam Exercises'
        type='article'
      />
       <div className="grammar-container">

      <div className={`flashpage-container div1 ${isFullscreen ? 'fullscreen' : ''}`}>
        <div className={`column-right ${isFullscreen ? 'fullscreen' : ''}`}>
          <div className="flashset-controls">
            <div className='flashsetnum'>C1 Verbs - {formatSetId(currentSet)}</div>
            <div>
              <button className="menu-toggle" onClick={toggleMenu}>
                ☰ More Sets
              </button>
              
            </div>
            <button className="category-toggle" onClick={toggleCategoryMenu}>
              ☰ Categories
            </button>
          </div>
          <div className="flashcard-page">
            <div className="flashcard-container">
              <div className="cardHolder">
                <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
                  <div className={`front ${isReverse ? 'switched' : ''}`}>
                    {isReverse ? filteredCards[currentCardIndex].back : filteredCards[currentCardIndex].front}
                  </div>
                  <div className={`back ${isReverse ? 'switched' : ''}`}>
                    {isReverse ? filteredCards[currentCardIndex].front : filteredCards[currentCardIndex].back}
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
            <div className="set-buttons">
              <button className="close-button" onClick={toggleMenu}>✕</button>
              {Object.keys(c1verbs).map((set, i) => (
                <button
                  key={i}
                  className="flashbtn"
                  onClick={() => handleSetChange(set)}
                >
                  {`Set ${i + 1}`}
                </button>
              ))}
            </div>
          </div>
          <div className={`category-menu ${isCategoryMenuOpen ? 'open' : ''}`}>
            <div className="category-buttons">
              <button className="close-button" onClick={toggleCategoryMenu}>✕</button>
              <button onClick={() => handleCategoryChange('all')}>All</button>
              <button onClick={() => handleCategoryChange('bus')}>Business</button>
              <button onClick={() => handleCategoryChange('env')}>Environment</button>
              <button onClick={() => handleCategoryChange('gen')}>General</button>
            </div>
          </div>
        </div>
      </div>

      <div className="gmenu div2"> <FlashcardMenu /> 
      </div>

      <div className="div3"> 

            <Sidebar />
      </div>

      </div>
    
    
    
    
    </div>
  );
}

export default FlashC1Verb;
