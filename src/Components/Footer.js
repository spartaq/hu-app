import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../CSS/footer.css';
import Sidebar from '../Components/Sidebar';
import logo from '../Images/homeicon2.png';
import todd2 from '../Images/todd2.png';

const Footer = () => {
  const navigate = useNavigate();

  const handleInternalClick = () => {
    navigate('/tutor'); 
  };

  return (
    <footer className="footer">
      <div className="footer-box">

      <div className="footer-column">
        <div className="logo">
          {/* Your logo image and logline */}
          <img src={logo} alt="Logo" />
          <p>English Exam Practice</p>
        </div>
      </div>
      
      <div className="footer-column">
        <div className="menu-column">
          <h3 className="menu-title">Contact</h3>
          <ul>
            <li>Todd Williams</li>
            <li>letstalk@englishexamexercises.com</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-column">
        <button onClick={handleInternalClick}>
          Find out about my live lessons
        </button>
      </div>
      
 



    </div>
    
    </footer>
  );
};

export default Footer;
