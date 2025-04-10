import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/horizontal-menu.css';

const HorizontalDropdownMenu = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const toggleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="horizontal-dropdown-menu-container">
      <button className="menu-toggle-button-horizontal" onClick={toggleMenuVisibility}>
        ☰ More Exam Exercises
      </button>
      <nav className={`horizontal-navbar ${menuVisible ? 'visible' : ''}`}>
        <ul className="horizontal-navbar-list">
          <li className="horizontal-navbar-item">
            <Link to="#" className="horizontal-navbar-link" onClick={(e) => {e.preventDefault(); toggleSubMenu(1);}}>
              Grammar<span className="caret">&#9660;</span>
            </Link>
            {openSubMenu === 1 && (
              <ul className="horizontal-dropdown-submenu">
                <li><Link to="/grammar-exercises/to-be"><span className="label label-a1">A1</span> To Be</Link></li>
                <li><Link to="/grammar-exercises/simple-present"><span className="label label-a1">A1</span> Simple Present</Link></li>
                <li><Link to="/grammar-exercises/present-continuous"><span className="label label-a2">A2</span> Present Continuous</Link></li>
                <li><Link to="/grammar-exercises/simple-past"><span className="label label-a2">A2</span> Simple Past</Link></li>
                <li><Link to="/grammar-exercises/future"><span className="label label-a2">A2</span> Future</Link></li>
                <li><Link to="/grammar-exercises/present-perfect"><span className="label label-b1">B1</span> Present Perfect</Link></li>
                <li><Link to="/grammar-exercises/perfect-past"><span className="label label-b1">B1</span> Present Perfect vs Past Simple</Link></li>
                <li><Link to="/grammar-exercises/first-conditional"><span className="label label-b2">B2</span> 1st Conditional</Link></li>
                <li><Link to="/grammar-exercises/second-conditional"><span className="label label-b2">B2</span> 2nd Conditional</Link></li>
                <li><Link to="/grammar-exercises/third-conditional"><span className="label label-c1">C1</span> 3rd Conditional</Link></li>
              </ul>
            )}
          </li>
          <li className="horizontal-navbar-item">
            <Link to="#" className="horizontal-navbar-link" onClick={(e) => {e.preventDefault(); toggleSubMenu(2);}}>
              Reading<span className="caret">&#9660;</span>
            </Link>
            {openSubMenu === 2 && (
              <ul className="horizontal-dropdown-submenu">
                <li><Link to="/reading-exercises/reading-comprehension"><span className="label label-success">All</span> Reading Comprehension</Link></li>
                <li><Link to="/reading-exercises/paragraph-headings"><span className="label label-success">All</span> Paragraph Headings</Link></li>
              </ul>
            )}
          </li>
          <li className="horizontal-navbar-item">
            <Link to="#" className="horizontal-navbar-link" onClick={(e) => {e.preventDefault(); toggleSubMenu(3);}}>
              Speaking<span className="caret">&#9660;</span>
            </Link>
            {openSubMenu === 3 && (
              <ul className="horizontal-dropdown-submenu">
                <li><Link to="/speaking-exercises/picture-comparison">Picture Comparison</Link></li>
                <li><Link to="/speaking-exercises/speaking-topics">Speaking Topics</Link></li>
              </ul>
            )}
          </li>
          <li className="horizontal-navbar-item">
            <Link to="#" className="horizontal-navbar-link" onClick={(e) => {e.preventDefault(); toggleSubMenu(4);}}>
              Listening<span className="caret">&#9660;</span>
            </Link>
            {openSubMenu === 4 && (
              <ul className="horizontal-dropdown-submenu">
                <li><Link to="/listening-exercises/videos"><span className="label label-a1">Li</span> Videos</Link></li>
                <li><Link to="/listening-exercises/audio"><span className="label label-a1">Li</span> Audio</Link></li>
              </ul>
            )}
          </li>
          <li className="horizontal-navbar-item">
            <Link to="#" className="horizontal-navbar-link" onClick={(e) => {e.preventDefault(); toggleSubMenu(5);}}>
              Writing<span className="caret">&#9660;</span>
            </Link>
            {openSubMenu === 5 && (
              <ul className="horizontal-dropdown-submenu">
                <li><Link to="/writing-exercises/writing1"><span className="label label-a1">Wr</span> Writing1</Link></li>
              </ul>
            )}
          </li>
          <li className="horizontal-navbar-item">
            <Link to="#" className="horizontal-navbar-link" onClick={(e) => {e.preventDefault(); toggleSubMenu(6);}}>
              Vocabulary<span className="caret">&#9660;</span>
            </Link>
            {openSubMenu === 6 && (
              <ul className="horizontal-dropdown-submenu">
                <li><Link to="/vocabulary-exercises/collocations2"><span className="label label-b2">B2</span> Collocations 2</Link></li>
                <li><Link to="/vocabulary-exercises/word-forms"><span className="label label-c1">B2</span> Word Forms</Link></li>
              </ul>
            )}
          </li>
          <li className="horizontal-navbar-item">
            <Link to="#" className="horizontal-navbar-link" onClick={(e) => {e.preventDefault(); toggleSubMenu(7);}}>
              Flashcards<span className="caret">&#9660;</span>
            </Link>
            {openSubMenu === 7 && (
              <ul className="horizontal-dropdown-submenu">
                <li><Link to="/flashcards"><span className="label label-b2">F</span> Vocabulary Flashcards</Link></li>
              </ul>
            )}
          </li>

          <li className="horizontal-navbar-item">
            <Link to="#" className="horizontal-navbar-link" onClick={(e) => {e.preventDefault(); toggleSubMenu(8);}}>
              Quizzes<span className="caret">&#9660;</span>
            </Link>
            {openSubMenu === 8 && (
              <ul className="horizontal-dropdown-submenu">
                <li><Link to="/quizzes/vocabulary-quizzes"><span className="label label-b2">Q</span> Vocabulary Quizzes</Link></li>
              </ul>
            )}
          </li>

          <li className="horizontal-navbar-item">
            <Link to="#" className="horizontal-navbar-link" onClick={(e) => {e.preventDefault(); toggleSubMenu(8);}}>
              Topics<span className="caret">&#9660;</span>
            </Link>
            {openSubMenu === 9 && (
              <ul className="horizontal-dropdown-submenu">
                <li><Link to="/quizzes/vocabulary-quizzes"><span className="label label-b2">Q</span> Vocabulary Quizzes</Link></li>
              </ul>
            )}
          </li>



          <li className="horizontal-navbar-item">
            
            <Link to="/level-test/level-test">Level Test</Link>
            </li>

            <li className="horizontal-navbar-item">
            <Link to="#" className="horizontal-navbar-link" onClick={(e) => {e.preventDefault(); toggleSubMenu(1);}}>
              Teaching Hub<span className="caret">&#9660;</span>
            </Link>
            {openSubMenu === 10 && (
              <ul className="horizontal-dropdown-submenu">
                <Link to='/about-exams'> About the Exams</Link>
                <Link to='/teachers'> For Teachers</Link>
              </ul>
            )}
          </li>

          <li className="horizontal-navbar-item">
                <Link to='/tutor'> One-on-One Tutoring</Link>
              </li>


        </ul>
      </nav>
    </div>
  );
};

export default HorizontalDropdownMenu;
