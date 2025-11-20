import React, { useState, useEffect } from "react";
import Checkbox from "rc-checkbox";
import { Link } from "react-router-dom";
import { FaClock, FaGraduationCap, FaBook, FaAngleDown } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import topics from "../Mainpages/Data/activitylist.js";

const ActivityFilter = ({ setFilters = () => {} }) => {
  const topicsPerPage = 6;
  const [visibleCount, setVisibleCount] = useState(topicsPerPage);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [isGrammarVisible, setIsGrammarVisible] = useState(false);

  const handleCheckboxChange = (value, setState) => {
    setState((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const filteredTopics = topics.filter((topic) => {
    const matchesTopic = selectedTopics.length === 0 || selectedTopics.includes(topic.category);
    const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(topic.level);
    const matchesTime = selectedTimes.length === 0 || selectedTimes.includes(topic.time);
    return matchesTopic && matchesLevel && matchesTime;
  });

  const totalPages = Math.ceil(filteredTopics.length / topicsPerPage);

  const levelOrder = ["A1", "A2", "B1", "B2", "C1", "HU1", "HU2"];

  const sortedTopics = [...filteredTopics].sort(
    (a, b) => levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level)
  );
  const currentTopics = sortedTopics.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(topicsPerPage);
  }, [selectedTopics, selectedLevels, selectedTimes]);

  const toggleGrammarVisibility = () => {
    setIsGrammarVisible((prev) => !prev);
  };

  const levelColors = {
    A1: "#428bca",
    A2: "#5cb85c",
    B1: "goldenrod",
    B2: "orangered",
    C1: "crimson",
    HU1: "purple",
    HU2: "darkred",
  };

  const skillColors = {
    "grammar-exercises": "red",
    "reading-exercises": "orange",
    "vocabulary-exercises": "blue",
    "videos": "purple",
    "flashcards": "#ff7f50",
    "quizzes": "yellow",
    "hungarian": "green",
  };

  return (
    <div className="activity-container">
      <div className="topics-container">
        <div className="grammar-display-grid">
          <div className="filter-container">
            <div className="filter-box">
              <AnimatePresence initial={false}>
                {isGrammarVisible && (
                  <motion.div
                    layout
                    className="filter-checkbox-wrapper"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="filter-checkbox-group">
                      <h3>Skill</h3>
                      {[
                        "grammar-exercises",
                        "vocabulary-exercises",
                        "reading-exercises",
                        "videos",
                        "quizzes",
                        "flashcards",
                        "hungarian",
                      ].map((topic) => (
                        <div key={topic}>
                          <Checkbox
                            checked={selectedTopics.includes(topic)}
                            onChange={() => handleCheckboxChange(topic, setSelectedTopics)}
                          />
                          &nbsp;&nbsp;
                          {topic
                            .replace("-", " ")
                            .replace("exercises", "")
                            .replace(/\b\w/g, (c) => c.toUpperCase())}
                        </div>
                      ))}
                    </div>

                    <div className="filter-checkbox-group">
                      <h3>Level</h3>
                      {["A1", "A2", "B1", "B2", "C1", "HU1", "HU2"].map((level) => (
                        <div key={level}>
                          <Checkbox
                            checked={selectedLevels.includes(level)}
                            onChange={() => handleCheckboxChange(level, setSelectedLevels)}
                          />
                          &nbsp;&nbsp;{level}
                        </div>
                      ))}
                    </div>

                    <div className="filter-checkbox-group">
                      <h3>Time</h3>
                      {["30 min", "45 min", "60 min"].map((time) => (
                        <div key={time}>
                          <Checkbox
                            checked={selectedTimes.includes(time)}
                            onChange={() => handleCheckboxChange(time, setSelectedTimes)}
                          />
                          &nbsp;&nbsp;{time}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button className="toggle-filter-btn" onClick={toggleGrammarVisibility}>
                {isGrammarVisible ? "Close Filters" : "Show Filters"} <FaAngleDown />
              </button>
            </div>
          </div>

          <ul className="topics-list">
            <AnimatePresence>
              {currentTopics.map((topic) => (
                <motion.li
                  key={topic.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={
                      topic.category === "videos"
                        ? `/videos/videos?title=${encodeURIComponent(topic.title)}`
                        : topic.category === "reading-exercises"
                        ? `/reading/${encodeURIComponent(topic.id.toLowerCase())}`
                        : `/${topic.category}/${encodeURIComponent(topic.id.toLowerCase())}`
                    }
                    className="topics-box-link"
                  >
                    <div className="topics-box">
                      <div
                        className="topics-box-ribbon"
                        style={{ backgroundColor: skillColors[topic.category] || "lightseagreen" }}
                      >
                        {topic.category
                          .replace("-exercises", "")
                          .replace(/\b\w/g, (c) => c.toUpperCase())}
                      </div>

                      <img src={topic.image} alt={topic.title} className="topics-image" />

                      <div
                        className="topics-card-header"
                        style={{ backgroundColor: levelColors[topic.level] || "lightseagreen" }}
                      >
                        <div className="topics-category">{topic.levelname}</div>
                        <div className="topics-title">{topic.title}</div>
                        <div className="topics-subtitle">{topic.subtitle}</div>
                      </div>

                      <div className="topics-details">
                        <div className="topics-level-time">
                          <FaGraduationCap className="topics-icon" /> {topic.level} &nbsp; | &nbsp;
                          <FaClock className="topics-icon" /> {topic.time} &nbsp; | &nbsp;
                          <FaBook className="topics-icon" />{" "}
                          {topic.category.replace("-exercises", "").toUpperCase()}
                        </div>
                        <div className="topics-description">{topic.description}</div>
                      </div>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>

          {visibleCount < filteredTopics.length && (
            <button
              onClick={() => setVisibleCount((prev) => prev + topicsPerPage)}
              className="load-more-button"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityFilter;
