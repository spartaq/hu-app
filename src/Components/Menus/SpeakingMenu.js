import React, { useState, useEffect } from 'react';
import '../../CSS/speaking-menu.css'
import { Link } from 'react-router-dom';

const SpeakingMenu = () => {
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
    <div className="speaking-menu-container">
      <div className="menu-title-container">
        <button 
          className="menu-toggle-button-speaking" 
          onClick={toggleMenuVisibility} 
          disabled={!isMobile}
        >
          ☰ More Speaking Exercises
        </button>
        <span className="menu-title">More speaking Exercises</span>
      </div>
      <nav className={`speaking-navbar ${menuVisible || !isMobile ? 'visible' : ''}`}>
        <ul className="speaking-navbar-list">
          <li className="speaking-navbar-item">
            <ul className="speaking-submenu">
              <li><Link to="/speaking-exercises/speaking-topics"><span className="label label-b2">B2</span> Speaking Topics</Link></li>
              <li><Link to="/speaking-exercises/picture-comparison"><span className="label label-b1">B2</span> Picture Comparisons</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SpeakingMenu;
