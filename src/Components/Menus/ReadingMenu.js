import React, { useState, useEffect } from 'react';
import '../../CSS/reading-menu.css'
import { Link } from 'react-router-dom';

const ReadingMenu = () => {
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
          className="menu-toggle-button-reading" 
          onClick={toggleMenuVisibility} 
          disabled={!isMobile}
        >
          ☰ More Reading Exercises
        </button>
        <span className="menu-title">More Reading Exercises</span>
      </div>
      <nav className={`reading-navbar ${menuVisible || !isMobile ? 'visible' : ''}`}>
        <ul className="reading-navbar-list">
          <li className="reading-navbar-item">
            <ul className="reading-submenu">
              <li><Link to="/reading-exercises/reading-comprehension"><span className="label label-b2">B2</span> Reading Comprehension</Link></li>
              <li><Link to="/reading-exercises/paragraph-headings"><span className="label label-b2">B2</span> Paragraph Headings</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ReadingMenu;
