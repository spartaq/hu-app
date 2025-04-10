import React, { useState, useEffect } from 'react';
import '../../CSS/reading-menu.css'
import { Link } from 'react-router-dom';

const FlashcardMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 990);

   const toggleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 990);
      if (window.innerWidth > 990) {
        setMenuVisible(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="reading-menu-container">
      <div className="menu-title-container">
        <button 
          className="flashmenubtn" 
          onClick={toggleMenuVisibility} 
          disabled={!isMobile}
        >
          ☰ Other Flashcard Sets
        </button>
        <span className="menu-title">Other Flashcard Sets</span>
      </div>
      <nav className={`reading-navbar ${menuVisible || !isMobile ? 'visible' : ''}`}>
        <ul className="reading-navbar-list">
          <li className="reading-navbar-item">
            <ul className="reading-submenu">
              <li><Link to="/flashcards/b2-adj-flashcards"><span className="label label-b2">B2</span> B2 Adjectives</Link></li>
              <li><Link to="/flashcards/b2-verb-flashcards"><span className="label label-b2">B2</span> B2 Verbs</Link></li>
              <li><Link to="/flashcards/c1-verb-flashcards"><span className="label label-c1">B2</span> C1 Verbs</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FlashcardMenu;
