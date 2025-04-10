// src/components/LevelsMenu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/levels-menu.css';

const LevelsMenu = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const toggleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="levels-dropdown-menu-container">
      <button className="menu-toggle-button-levels" onClick={toggleMenuVisibility}>
        Exercises by Level
      </button>
      <nav className={`levels-navbar ${menuVisible ? 'visible' : ''}`}>
        <ul className="levels-navbar-list">
          <li className={`levels-navbar-item ${openSubMenu === 1 ? 'active' : ''}`}>
            <Link to="#" className="levels-navbar-link" onClick={(e) => {e.preventDefault(); toggleSubMenu(1);}}>
              A1/A2 Elementary<span className="caret">&#9660;</span>
            </Link>
            <ul className={`levels-dropdown-submenu ${openSubMenu === 1 ? 'show' : ''}`}>
              <li>-----------------Tenses--------------------------------</li>
              <li><Link to="/grammar-exercises/to-be"><span className="label label-a1">A1</span> To Be</Link></li>
              <li><Link to="/grammar-exercises/simple-present"><span className="label label-a1">A1</span> Simple Present</Link></li>
              <li><Link to="/grammar-exercises/present-continuous"><span className="label label-a2">A2</span> Present Continuous</Link></li>
              <li><Link to="/grammar-exercises/simple-past"><span className="label label-a2">A2</span> Simple Past</Link></li>
              <li><Link to="/grammar-exercises/future"><span className="label label-a2">A2</span> Future</Link></li>
              <li>-----------------Reading-------------------------------</li>
              <li><Link to="/reading-exercises/reading-comprehension"><span className="label label-a2">A2</span> Reading Comprehension</Link></li>
              <li>-----------------Vocabulary----------------------------</li>
              <li><Link to="/vocabulary-exercises/collocations2"><span className="label label-a2">A2</span> Collocations 2</Link></li>
              <li><Link to="/vocabulary-exercises/word-forms"><span className="label label-a2">A2</span> Word Forms</Link></li>
            </ul>
          </li>
          <li className={`levels-navbar-item ${openSubMenu === 2 ? 'active' : ''}`}>
            <Link to="#" className="levels-navbar-link" onClick={(e) => {e.preventDefault(); toggleSubMenu(2);}}>
              B1 Pre-Intermediate<span className="caret">&#9660;</span>
            </Link>
            <ul className={`levels-dropdown-submenu ${openSubMenu === 2 ? 'show' : ''}`}>
              <li><Link to="/grammar-exercises/present-perfect"><span className="label label-b1">B1</span> Present Perfect</Link></li>
              <li><Link to="/grammar-exercises/perfect-past"><span className="label label-b1">B1</span> Present Perfect vs Past Simple</Link></li>
            </ul>
          </li>
          <li className={`levels-navbar-item ${openSubMenu === 3 ? 'active' : ''}`}>
            <Link to="#" className="levels-navbar-link" onClick={(e) => {e.preventDefault(); toggleSubMenu(3);}}>
              B2 Intermediate<span className="caret">&#9660;</span>
            </Link>
            <ul className={`levels-dropdown-submenu ${openSubMenu === 3 ? 'show' : ''}`}>
              <li>-----------------Tenses--------------------------------</li>
              <li><Link to="/grammar-exercises/present-perfect"><span className="label label-b1">B1</span> Present Perfect</Link></li>
              <li><Link to="/grammar-exercises/perfect-past"><span className="label label-b1">B1</span> Present Perfect vs Past Simple</Link></li>
              <li>-----------------Reading-------------------------------</li>
              <li><Link to="/reading-exercises/reading-comprehension"><span className="label label-a2">A2</span> Reading Comprehension</Link></li>
              <li>-----------------Vocabulary----------------------------</li>
              <li><Link to="/vocabulary-exercises/collocations2"><span className="label label-a2">A2</span> Collocations 2</Link></li>
              <li><Link to="/vocabulary-exercises/word-forms"><span className="label label-a2">A2</span> Word Forms</Link></li>
            </ul>
          </li>
          <li className={`levels-navbar-item ${openSubMenu === 4 ? 'active' : ''}`}>
            <Link to="#" className="levels-navbar-link" onClick={(e) => {e.preventDefault(); toggleSubMenu(4);}}>
              C1 Advanced<span className="caret">&#9660;</span>
            </Link>
            <ul className={`levels-dropdown-submenu ${openSubMenu === 4 ? 'show' : ''}`}>
              <li><Link to="/c1-advanced"><span className="label label-c1">C1</span> C1 Advanced</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LevelsMenu;


