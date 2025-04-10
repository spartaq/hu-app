import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import background from '../Images/logo512-new.png';
import '../CSS/header.css';
import HorizontalDropdownMenu from './HorizontalMenu';

const Header = () => {
  return (
   
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      <img
              src={background}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="English Exam Exercises logo"
            />
        <Navbar.Brand href="/">English Exam Exercises</Navbar.Brand>
       
        <HorizontalDropdownMenu/>
      </Container>
 
    </Navbar>


  );
}

export default Header;