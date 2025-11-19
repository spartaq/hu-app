import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import background from '../Images/logo512-new.png';
import crossarrows from '../Images/cross-arrows.svg';
import '../CSS/main-navbar.css';

const AMenu = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleCollapse = () => setExpanded(false);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" expanded={expanded}>
      <Container className="custom-container">
        <div className="logo-brand">
          <img
            src={background}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="English Exam Exercises logo"
          />
          <Navbar.Brand as={Link} to="/">Hungarian Exercises</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle}>
          <span>
            <div className="mobile-menu-title">Menu</div>
            <div className="mobile-menu-icon">
              <img
                src={crossarrows}
                width="12"
                height="12"
                className="d-inline-block align-top"
                alt="Menu"
              />
            </div>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/" onClick={handleCollapse}>Home</Nav.Link>
            <Nav.Link as={Link} to="/hungarian" onClick={handleCollapse}>Hungarian</Nav.Link>
            <Nav.Link as={Link} to="/reading-exercises" onClick={handleCollapse}>Reading</Nav.Link>
            <Nav.Link as={Link} to="/videos/videos" onClick={handleCollapse}>Videos</Nav.Link>
            <Nav.Link as={Link} to="/flashcards" onClick={handleCollapse}>Flashcards</Nav.Link>
            <Nav.Link as={Link} to="/quizzes/vocabulary-quizzes" onClick={handleCollapse}>Quizzes</Nav.Link>
            <Nav.Link as={Link} to="/Topics/topics" onClick={handleCollapse}>Topics</Nav.Link>
            <Nav.Link as={Link} to="/level-test/level-test" onClick={handleCollapse}>Level Test</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AMenu;
