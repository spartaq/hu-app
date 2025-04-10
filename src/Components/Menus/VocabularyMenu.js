import React, { useState, useEffect } from 'react';
import '../../CSS/vocabulary-menu.css'
import { Link } from 'react-router-dom';

const VocabularyMenu = () => {
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
    <div className="grammar-menu-container">
<figure data-title="More Vocabulary Exercises"
          className="menu-toggle-button-grammar" 
          onClick={toggleMenuVisibility} 
          disabled={!isMobile}
        >
   <figcaption>

      <nav className={`vocabulary-navbar ${menuVisible || !isMobile ? 'visible' : ''}`}>
        <ul className="vocabulary-navbar-list">
          <li className="vocabulary-navbar-item">
            <ul className="vocabulary-submenu">
            <li><Link to="/vocabulary-exercises/collocations1"><span className="label label-b2">B2</span> Collocations 1</Link></li>
            <li><Link to="/vocabulary-exercises/word-forms"><span className="label label-b2">B2</span> Word Forms</Link></li> 
            <li><Link to="/vocabulary-exercises/idioms"><span className="label label-b2">B2</span> Idioms</Link></li> 
            <li><Link to="/vocabulary-exercises/linking-words"><span className="label label-b2">B2</span> Linking Words</Link></li> 
            <li><Link to="/vocabulary-exercises/phrasal-verbs"><span className="label label-b2">B2</span> Phrasal Verbs</Link></li>
            <li><Link to="/vocabulary-exercises/dependent-prepositions"><span className="label label-b2">B2</span> Dependent Prepositions</Link></li>  
            </ul>
          </li>
        </ul>
      </nav></figcaption></figure>
    </div>
  );
};

export default VocabularyMenu;
