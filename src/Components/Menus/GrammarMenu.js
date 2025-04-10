import React, { useState, useEffect } from 'react';
import '../../CSS/grammar-menu.css'
import { Link } from 'react-router-dom';

const GrammarMenu = () => {
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
      <figure data-title="More Grammar Exercises"
          className="menu-toggle-button-grammar" 
          onClick={toggleMenuVisibility} 
          disabled={!isMobile}
        >
      <figcaption>
      <nav className={`grammar-navbar ${menuVisible || !isMobile ? 'visible' : ''}`}>
        <ul className="grammar-navbar-list">
          <li className="grammar-navbar-item">
            <ul className="grammar-submenu">
              <li><span className="label label-a1">A1</span><Link to="/grammar-exercises/to-be"> To Be - present</Link></li>
              <li><span className="label label-a1">A1</span><Link to="/grammar-exercises/to-be-past"> To Be - past</Link></li>
              <li><Link to="/grammar-exercises/simple-present"><span className="label label-a1">A1</span> Simple Present</Link></li>
              <li><Link to="/grammar-exercises/present-continuous"><span className="label label-a1">A1</span> Present Continuous</Link></li>
              <li><Link to="/grammar-exercises/simpcont"><span className="label label-a2">A2</span> Simple Present vs. Present Continuous</Link></li>
              <li><Link to="/grammar-exercises/simple-past"><span className="label label-a2">A2</span> Simple Past</Link></li>
              <li><Link to="/grammar-exercises/past-continuous"><span className="label label-a2">A2</span> Past Continuous</Link></li>
              <li><Link to="/grammar-exercises/future"><span className="label label-a2">A2</span> Future</Link></li>
              <li><Link to="/grammar-exercises/present-perfect"><span className="label label-b1">B1</span> Present Perfect</Link></li>
              <li><Link to="/grammar-exercises/perfect-past"><span className="label label-b1">B1</span> Present Perfect vs Past Simple</Link></li>
              <li><Link to="/grammar-exercises/first-conditional"><span className="label label-b1">B1</span> 1st Conditional</Link></li>
              <li><Link to="/grammar-exercises/first-cond-prod"><span className="label label-b1">B1</span> 1st Conditional (prod)</Link></li>
              <li><Link to="/grammar-exercises/second-conditional"><span className="label label-b1">B1</span> 2nd Conditional</Link></li>
              <li><Link to="/grammar-exercises/second-cond-prod"><span className="label label-b1">B1</span> 2nd Conditional (prod)</Link></li>
              <li><Link to="/grammar-exercises/third-conditional"><span className="label label-b2">B2</span> 3rd Conditional</Link></li>
              <li><Link to="/grammar-exercises/third-cond-prod"><span className="label label-b2">B2</span> 3rd Conditional (prod)</Link></li>
              <li><Link to="/grammar-exercises/mixed-cond-prod"><span className="label label-b2">B2</span> Mixed Conditionals (prod)</Link></li>
              <li><Link to="/grammar-exercises/passive"><span className="label label-b2">B2</span> Passive</Link></li>
              <li><Link to="/grammar-exercises/passivebeing"><span className="label label-b2">B2</span> Passive Being</Link></li>
              <li><Link to="/grammar-exercises/indirect-speech"><span className="label label-b2">B2</span> Indirect Speech</Link></li>
              <li><Link to="/grammar-exercises/sense-verbs"><span className="label label-b2">B2</span> Sense Verbs</Link></li>
              <li><Link to="/grammar-exercises/ed-ing"><span className="label label-b2">B2</span> Ed or Ing</Link></li>
              <li><Link to="/grammar-exercises/reported-speech"><span className="label label-b2">B2</span> Reported Speech</Link></li>
              <li><Link to="/grammar-exercises/modals-obligation"><span className="label label-b2">B2</span> Modals of Obligation</Link></li>
              <li><Link to="/grammar-exercises/gerunds"><span className="label label-b2">B2</span> Gerunds</Link></li>
              <li><Link to="/grammar-exercises/infinitives"><span className="label label-b2">B2</span> Infinitives</Link></li>
              <li><Link to="/grammar-exercises/causeeffect"><span className="label label-b2">B2</span> Cause and Effect</Link></li>
              <li><Link to="/grammar-exercises/comparison"><span className="label label-b2">B2</span> Comparison</Link></li>
              <li><Link to="/grammar-exercises/relativeclauses"><span className="label label-b2">B2</span> Relative Clauses</Link></li>
              <li><Link to="/grammar-exercises/soenough"><span className="label label-b2">B2</span> So, Such, Enough, Too </Link></li>
              <li><Link to="/grammar-exercises/unless"><span className="label label-b2">B2</span> Unless </Link></li>
              <li><Link to="/grammar-exercises/wish"><span className="label label-b2">B2</span> Wish </Link></li>
              <li><Link to="/grammar-exercises/adjadv"><span className="label label-b2">B2</span> Adjectives and Adverbs </Link></li>
              <li><Link to="/grammar-exercises/pasthabits"><span className="label label-b2">B2</span> Past Habits </Link></li>
            </ul>
          </li>
        </ul>
      </nav></figcaption></figure>
    </div>
  );
};

export default GrammarMenu;
