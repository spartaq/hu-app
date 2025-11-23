import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaListAlt,
  FaUser
} from "react-icons/fa";
import "../CSS/footer.css";

export default function Footer() {
  return (
    <div className="footer-nav">
      <NavLink to="/" className="footer-item">
        <FaHome className="footer-icon" />
        <span>Home</span>
      </NavLink>

      <NavLink to="hungarian/lesson-list" className="footer-item">
        <FaBook className="footer-icon" />
        <span>Lessons</span>
      </NavLink>

      <NavLink to="hungarian/activities" className="footer-item">
        <FaListAlt className="footer-icon" />
        <span>Practice</span>
      </NavLink>

      <NavLink to="/profile" className="footer-item">
        <FaUser className="footer-icon" />
        <span>Profile</span>
      </NavLink>
    </div>
  );
}
