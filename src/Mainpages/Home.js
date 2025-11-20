import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import headerimg from '../Images/hungarian-home.jpg';
import ActivityFilter from "../Utils/activityFilter.js";
import { Link } from "react-router-dom";
import ExerciseCard from '../Components/exerciseCard';

const Home = ({ setFilters = () => {} }) => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="home-container">

      {/* HEADER */}
      <div className="home-header">
        <img src={headerimg} alt="Hungarian" className="home-header-img" />
        <div className="home-header-text">
          <h1>Learn Hungarian</h1>
          <p className="home-subtitle">Build your skills step by step</p>
        </div>
      </div>

      {/* RESUME BUTTON */}
      <button className="home-resume-btn">
        Continue Lesson – Verb Basics (A1)
      </button>

      
<Link to="hungarian/activities" className="home-resume-btn-link">
  <button className="home-resume-btn">
    Lesson List
  </button>
</Link>


      {/* QUICK ACTIONS */}
      <div className="home-section">
        <h2>Quick Activities</h2>

        <div className="home-actions-grid">
          <div className="action-card">Vocabulary</div>
          <div className="action-card">Grammar</div>
          <div className="action-card">Listening</div>
          <div className="action-card">Dialogues</div>
          <div className="action-card">Readings</div>
          <div className="action-card">Quizzes</div>
          <div className="action-card">Games</div>

        </div>
      </div>

      

    </div>
  );
};

export default Home;
