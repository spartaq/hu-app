import { Link, Outlet } from 'react-router-dom';
import '../CSS/hometest.css';
import React, { useEffect } from 'react';
import $ from 'jquery';
import SEO from '../SEO';

const DashMenu = () => {
  useEffect(() => {
    const sidenavEl = $('.sidenav');
    const gridEl = $('.grid');
    const SIDENAV_ACTIVE_CLASS = 'sidenav--active';
    const GRID_NO_SCROLL_CLASS = 'grid--noscroll';
    let currentOpenSubheading = null;

    const toggleClass = (el, className) => {
      if (el.hasClass(className)) {
        el.removeClass(className);
      } else {
        el.addClass(className);
      }
    };

    const setUserhtdropdownListener = () => {
      const userAvatar = $('.header__avatar');
      userAvatar.on('click', function (e) {
        const htdropdown = $(this).children('.htdropdown');
        toggleClass(htdropdown, 'htdropdown--active');
      });
    };

    const setSidehtnavListeners = () => {
      const subHeadings = $('.htnavList__subheading');
      const SUBHEADING_OPEN_CLASS = 'htnavList__subheading--open';
      const SUBLIST_HIDDEN_CLASS = 'subList--hidden';

      subHeadings.each((i, subHeadingEl) => {
        $(subHeadingEl).on('click', (e) => {
          const subListEl = $(subHeadingEl).siblings();

          // Close the current open subheading if it's different from the one clicked
          if (currentOpenSubheading && currentOpenSubheading !== subHeadingEl) {
            toggleClass($(currentOpenSubheading), SUBHEADING_OPEN_CLASS);
            toggleClass($(currentOpenSubheading).siblings(), SUBLIST_HIDDEN_CLASS);
          }

          toggleClass($(subHeadingEl), SUBHEADING_OPEN_CLASS);
          toggleClass($(subListEl), SUBLIST_HIDDEN_CLASS);

          // Update the current open subheading
          currentOpenSubheading = subHeadingEl;
        });
      });
    };

    const addResizeListeners = () => {
      $(window).resize(function (e) {
        const width = window.innerWidth;
        if (width > 750) {
          sidenavEl.removeClass(SIDENAV_ACTIVE_CLASS);
          gridEl.removeClass(GRID_NO_SCROLL_CLASS);
        }
      });
    };

    const setMenuClickListener = () => {
      $('.header__menu').on('click', function (e) {
        toggleClass(sidenavEl, SIDENAV_ACTIVE_CLASS);
        toggleClass(gridEl, GRID_NO_SCROLL_CLASS);
      });
    };

    const setSidenavCloseListener = () => {
      $('.sidenav__brand-close').on('click', function (e) {
        toggleClass(sidenavEl, SIDENAV_ACTIVE_CLASS);
        toggleClass(gridEl, GRID_NO_SCROLL_CLASS);
      });
    };

    const setMenuItemsClickListener = () => {
      $('.sidenav a, .subList__item').on('click', function (e) {
        if (window.innerWidth < 991) {
          sidenavEl.removeClass(SIDENAV_ACTIVE_CLASS);
          gridEl.removeClass(GRID_NO_SCROLL_CLASS);
        }

        // Close all open subLists when a subList item is clicked
        if (currentOpenSubheading) {
          toggleClass($(currentOpenSubheading), 'htnavList__subheading--open');
          toggleClass($(currentOpenSubheading).siblings(), 'subList--hidden');
          currentOpenSubheading = null;
        }
      });
    };

    setUserhtdropdownListener();
    setSidehtnavListeners();
    addResizeListeners();
    setMenuClickListener();
    setSidenavCloseListener();
    setMenuItemsClickListener();
  }, []);

  return (
    <div>
      <SEO
        title="English Exam Exercises"
        description="Prepare for your English exam with free preparation materials. These include practice tests, vocabulary lists and exam guides."
        name="English Exam Exercises"
        type="article"
      />
      <>
        <div className="grid">
          <header className="header">
            <i className="fas fa-bars header__menu"> Exercises Menu</i>
            <div className="header__search"></div>
          </header>

          <aside className="sidenav">
            <div className="sidenav__brand">
              <i className="fas fa-feather-alt sidenav__brand-icon"></i>
              <div>
                Exam<span className="text-light"> Exercises</span>
              </div>
              <i className="fas fa-times sidenav__brand-close"></i>
            </div>
            <div className="sidenav__profile">
              <div className="sidenav__profile-avatar"></div>
              <div className="sidenav__profile-title text-light">Let's practice!</div>
            </div>
            <div className="htrow htrow--align-v-center htrow--align-h-center">
              <ul className="htnavList">

                <li className="htnavList__heading">
                  Find your level<i className="far fa-file-alt"></i>
                </li>
                <li>
                  <div className="htnavList__nosub htrow htrow--align-v-center">
                    <span className="htnavList__subheading-icon">
                      <i className="fas fa-briefcase-medical"></i>
                    </span>
                    <span className="htnavList__subheading-title">
                      <Link to="level-test/level-test">Level Test</Link>
                    </span>
                  </div>
                </li>

                <li className="htnavList__heading">
                  levels<i className="far fa-file-alt"></i>
                </li>
                <li>
                  <div className="htnavList__nosub htrow htrow--align-v-center">
                    <span className="htnavList__subheading-icon">
                      <i className="fas fa-briefcase-medical"></i>
                    </span>
                    <span className="htnavList__subheading-title">
                      <Link to="/a1-a2-elementary">A1/A2</Link>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="htnavList__nosub htrow htrow--align-v-center">
                    <span className="htnavList__subheading-icon">
                      <i className="fas fa-plane-departure"></i>
                    </span>
                    <span className="htnavList__subheading-title">
                      <Link to="/b1-b2-intermediate">B1/B2</Link>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="htnavList__nosub htrow htrow--align-v-center">
                    <span className="htnavList__subheading-icon">
                      <i className="far fa-angry"></i>
                    </span>
                    <span className="htnavList__subheading-title">
                      <Link to="/c1-advanced">C1</Link>
                    </span>
                  </div>
                </li>
                <li className="htnavList__heading">
                  Exercises<i className="fas fa-book"></i>
                </li>
                <li>
                  <div className="htnavList__subheading htrow htrow--align-v-center">
                    <span className="htnavList__subheading-icon">
                      <i className="fas fa-book"></i>
                    </span>
                    <span className="htnavList__subheading-title">grammar</span>
                  </div>
                  <ul className="subList subList--hidden">
                    <li className="subList__item">
                      <Link to="/grammar-exercises/to-be">
                        <span className="label label-a1">A1</span> Forms of To Be
                      </Link>
                    </li>
                    <li className="subList__item">
                      <Link to="/grammar-exercises/simple-present">
                        <span className="label label-a1">A1</span> Simple Present
                      </Link>
                    </li>
                    <li className="subList__item">
                      <Link to="/grammar-exercises/present-continuous">
                        <span className="label label-a2">A2</span> Present Continuous
                      </Link>
                    </li>
                    <li className="subList__item">
                      <Link to="/grammar-exercises/simple-past">
                        <span className="label label-a2">A2</span> Simple Past
                      </Link>
                    </li>
                    <li className="subList__item">
                      <Link to="/grammar-exercises/future">
                        <span className="label label-a2">A2</span> Future
                      </Link>
                    </li>
                    <li className="subList__item">
                      <Link to="/grammar-exercises/present-perfect">
                        <span className="label label-b1">B1</span> Present Perfect
                      </Link>
                    </li>
                    <li className="subList__item">
                      <Link to="/grammar-exercises/perfect-past">
                        <span className="label label-b1">B1</span> Present Perfect vs Past Simple
                      </Link>
                    </li>
                    <li className="subList__item">
                      <Link to="/grammar-exercises/first-conditional">
                        <span className="label label-b2">B2</span> 1st Conditional
                      </Link>
                    </li>
                    <li className="subList__item">
                      <Link to="/grammar-exercises/second-conditional">
                        <span className="label label-b2">B2</span> 2nd Conditional
                      </Link>
                    </li>
                    <li className="subList__item">
                      <Link to="/grammar-exercises/third-conditional">
                        <span className="label label-c1">C1</span> 3rd Conditional
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <div className="htnavList__subheading htrow htrow--align-v-center">
                    <span className="htnavList__subheading-icon">
                    <i className="fa-solid fa-book-open-reader"></i>
                    </span>
                    <span className="htnavList__subheading-title">reading</span>
                  </div>
                  <ul className="subList subList--hidden">
                    <li className="subList__item">
                      <Link to="/reading-exercises/reading-comprehension">
                        <span className="label label-success">All</span> Reading Comprehension
                      </Link>
                    </li>
                    <li className="subList__item">
                      <span className="label label-b1">All</span>
                      <Link to="/reading-exercises/paragraph-headings">
                        {' '}
                        Paragraph Headings
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <div className="htnavList__subheading htrow htrow--align-v-center">
                    <span className="htnavList__subheading-icon">
                    <i className="fa-regular fa-comments"></i>
                    </span>
                    <span className="htnavList__subheading-title">speaking</span>
                  </div>
                  <ul className="subList subList--hidden">
                    <li className="subList__item">
                      <Link to="/speaking-exercises/picture-comparison">
                        Picture Comparison
                      </Link>
                    </li>
                    <li className="subList__item">
                      <Link to="/speaking-exercises/speaking-topics">
                        Speaking Topics
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <div className="htnavList__subheading htrow htrow--align-v-center">
                    <span className="htnavList__subheading-icon">
                    <i className="fa-solid fa-ear-listen"></i>
                    </span>
                    <span className="htnavList__subheading-title">listening</span>
                  </div>
                  <ul className="subList subList--hidden">
                    <li className="subList__item">
                      <Link to="/listening-exercises/videos">
                        <span className="label label-a1">Li</span> Videos
                      </Link>
                    </li>
                    <li className="subList__item">
                      <Link to="/listening-exercises/audio">
                        <span className="label label-a1">Li</span> Audio
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <div className="htnavList__subheading htrow htrow--align-v-center">
                    <span className="htnavList__subheading-icon">
                    <i className="fa-solid fa-pencil"></i>
                    </span>
                    <span className="htnavList__subheading-title">writing</span>
                  </div>
                  <ul className="subList subList--hidden">
                    <li className="subList__item">
                      <Link to="/writing-exercises/writing1">
                        <span className="label label-a1">Wr</span> Writing1
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>

                  <div className="htnavList__subheading htrow htrow--align-v-center">
                    <span className="htnavList__subheading-icon">
                    <i className="fa-brands fa-readme"></i>
                    </span>
                    <span className="htnavList__subheading-title">vocabulary</span>
                  </div>

                  <ul className="subList subList--hidden">

                    <li className="subList__item">
                      <Link to="/vocabulary-exercises/collocations1">
                        <span className="label label-b2">B2</span> Collocations 1
                      </Link>
                    </li>

                    <li className="subList__item">
                      <Link to="/vocabulary-exercises/word-forms">
                        <span className="label label-c1">B2</span> Word Forms
                      </Link>
                    </li>

                  </ul>
                </li>

                <li className="htnavList__heading">
                  Quizzes & Flashcards<i className="fas fa-book"></i>
                </li>

                <li>
                  <div className="htnavList__subheading htrow htrow--align-v-center">
                    <span className="htnavList__subheading-icon">
                      <i className="fas fa-rocket"></i>
                    </span>
                    <span className="htnavList__subheading-title">quizzes</span>
                  </div>
                  <ul className="subList subList--hidden">
                    <li className="subList__item">
                      <Link to="/quizzes/vocabulary-quizzes">
                        <span className="label label-b2">Q</span> Vocabulary Quizzes
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <div className="htnavList__subheading htrow htrow--align-v-center">
                    <span className="htnavList__subheading-icon">
                    <i className="fa-solid fa-building-columns"></i>
                    </span>
                    <span className="htnavList__subheading-title">flashcards</span>
                  </div>
                  <ul className="subList subList--hidden">
                    <li className="subList__item">
                      <Link to="/flashcards">
                        <span className="label label-b2">F</span> Vocabulary Flashcards
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="htnavList__heading">
                  Topics<i className="fas fa-book"></i>
                </li>

                <li>
                  <div className="htnavList__subheading htrow htrow--align-v-center">
                    <span className="htnavList__subheading-icon">
                      <i className="fas fa-rocket"></i>
                    </span>
                    <span className="htnavList__subheading-title">Health</span>
                  </div>
                  <ul className="subList subList--hidden">
                    <li className="subList__item">
                      <Link to="/flashcards/b2-adj-flashcards?topic=health">
                        <span className="label label-b2">B2</span> Health Flashcards
                      </Link>
                    </li>
                    <li className="subList__item">
                      <Link to="/reading-exercises/reading-comprehension?topic=daily">
                        <span className="label label-b2">B2</span> Reading
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <div className="htnavList__subheading htrow htrow--align-v-center">
                    <span className="htnavList__subheading-icon">
                    <i className="fa-solid fa-building-columns"></i>
                    </span>
                    <span className="htnavList__subheading-title">Money</span>
                  </div>
                  <ul className="subList subList--hidden">
                    <li className="subList__item">
                      <Link to="/topics/money">
                        <span className="label label-b2">B2</span> Money
                      </Link>
                    </li>
                    <li className="subList__item">
                      <Link to="/reading-exercises/reading-comprehension?topic=daily">
                        <span className="label label-b2">B2</span> Money Reading
                      </Link>
                    </li>
                  </ul>
                </li>


                <li className="htnavList__heading">
                  Find a Topic<i className="far fa-file-alt"></i>
                </li>
                <li>
                  <div className="htnavList__nosub htrow htrow--align-v-center">
                    <span className="htnavList__subheading-icon">
                   
                      <i className="fas fa-book"></i>
                    </span>
                    <span className="htnavList__subheading-title">
                      <Link to="/topics">Topics</Link>
                    </span>
                  </div>
                </li>

              </ul>
            </div>
          </aside>

          <main className="main">
            <Outlet />
          </main>
        </div>
      </>
    </div>
  );
};

export default DashMenu;
