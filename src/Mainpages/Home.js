import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import headerimg from "../Images/hungarian-home.jpg";
import { FaBook, FaListUl, FaHeadphones, FaComments, FaBookReader, FaPuzzlePiece, FaClipboardList } from "react-icons/fa";
import "../CSS/Home.css";

const Home = ({ setFilters = () => {} }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const actions = [
  { label: "Vocabulary", icon: <FaBook />, link: "/hungarian/vocabularyHub" },
  { label: "Readings", icon: <FaBookReader />, link: "/hungarian/readingHub" },
  { label: "Grammar Practice", icon: <FaClipboardList />, link: "/hungarian/grammarquizHub" },
  { label: "Grammar", icon: <FaListUl />, link: "/hungarian/grammar-list" },
  { label: "Listening", icon: <FaHeadphones />, link: "/hungarian/listening-list" },
  { label: "Dialogues", icon: <FaComments />, link: "/hungarian/dialogue-list" },
  { label: "Games", icon: <FaPuzzlePiece />, link: "/hungarian/games" }
];


  return (
    <div className="home-wrapper">

      {/* SMALL HEADER */}
      <div className="home-banner">
        <img src={headerimg} alt="Hungarian" className="home-banner-img" />
        <div className="home-banner-text">
          <h1 className="banner-title">Welcome Back!</h1>
          <p className="banner-sub">Continue your Hungarian progress</p>
        </div>
      </div>

      {/* RESUME CARD */}
      <div className="resume-card">
        <h3>Resume Your Lesson</h3>
        <p className="resume-sub">Verb Basics (A1) • 42% complete</p>
        <button className="primary-btn w-100">Continue</button>
      </div>

      {/* LESSON LIST */}
      <Link to="hungarian/lesson-list" className="w-100">
        <button className="secondary-btn w-100">View All Lessons</button>
      </Link>

      {/* QUICK ACTIONS */}
      <section className="home-section">
        <h2>Quick Activities</h2>

        <div className="home-grid">
          {actions.map((item) => (
            <Link to={item.link} key={item.label} className="home-card">
              <div className="home-card-icon">{item.icon}</div>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
