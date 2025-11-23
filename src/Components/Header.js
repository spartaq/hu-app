import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaChevronLeft, FaUserCircle } from "react-icons/fa";
import "../CSS/header.css";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const showBack =
    location.pathname !== "/" &&
    !location.pathname.startsWith("/lessons") &&
    !location.pathname.startsWith("/activities");

  return (
    <header className="app-header">
      <div className="header-left">
        {showBack && (
          <button className="header-icon-btn" onClick={() => navigate(-1)}>
            <FaChevronLeft className="header-icon" />
          </button>
        )}
      </div>

      <div className="header-title">
        VoyaLingo
      </div>

      <div className="header-right">
        <button className="header-icon-btn">
          <FaUserCircle className="header-icon" />
        </button>
      </div>
    </header>
  );
}
