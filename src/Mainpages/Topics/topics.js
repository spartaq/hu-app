import React, { useState, useEffect } from "react";
import Checkbox from "rc-checkbox";
import { Link } from "react-router-dom";
import { FaClock, FaAngleDown, FaGraduationCap } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import topics from "./Data/topicslist.js";

const TopicsList = ({ setFilters = () => {} }) => {  
  const [currentPage, setCurrentPage] = useState(1);
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

  // **Filtered Topics Logic**
  const filteredTopics = topics.filter((topic) => {
    const matchesTopic = selectedTopics.length === 0 || selectedTopics.includes(topic.category);
    const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(topic.level);
    const matchesTime = selectedTimes.length === 0 || selectedTimes.includes(topic.time);
    return matchesTopic && matchesLevel && matchesTime;
  });

  const totalPages = Math.ceil(filteredTopics.length / topicsPerPage);

  // **Pagination Logic**
  const indexOfLastTopic = currentPage * topicsPerPage;
  const indexOfFirstTopic = indexOfLastTopic - topicsPerPage;
  const currentTopics = filteredTopics.slice(0, visibleCount);

useEffect(() => {
  setVisibleCount(topicsPerPage);
}, [selectedTopics, selectedLevels, selectedTimes]);

const toggleGrammarVisibility = () => {
  setIsGrammarVisible((prev) => !prev);
};

const categoryColors = {
  Business: "royalblue",
  General: "green",
  Food: "goldenrod",
  Health: "blueviolet",
  Travel: "crimson",
  Environment: "darkorange",
  Education: "darkgreen",};

  return (
    <div>
      <div className="home-container">
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
          <h3>Topic</h3>
          {["Business", "General", "Listening", "Food", "Travel", "Environment", "Health", "Education"].map((topic) => (
            <div key={topic}>
              <Checkbox
                checked={selectedTopics.includes(topic)}
                onChange={() => handleCheckboxChange(topic, setSelectedTopics)}
              />&nbsp;&nbsp;
              {topic}
            </div>
          ))}
        </div>

        {/* Level Filter */}
        <div className="filter-checkbox-group">
          <h3>Level</h3>
          {["B1", "B2", "C1"].map((level) => (
            <div key={level}>
              <Checkbox
                checked={selectedLevels.includes(level)}
                onChange={() => handleCheckboxChange(level, setSelectedLevels)}
              />&nbsp;&nbsp;
              {level}
            </div>
          ))}
        </div>

        {/* Time Filter */}
        <div className="filter-checkbox-group">
          <h3>Time</h3>
          {["30 min", "45 min", "60 min"].map((time) => (
            <div key={time}>
              <Checkbox
                checked={selectedTimes.includes(time)}
                onChange={() => handleCheckboxChange(time, setSelectedTimes)}
              />&nbsp;&nbsp;
              {time}
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
        {currentTopics.map((topic) => (
          <li key={topic.id}>
            <Link to={`/topics/${topic.id}`} className="topics-box-link">
            <div className="topics-box">
              <img src={topic.image} alt={topic.title} className="topics-image" />
      
      <div className="topics-card-header" style={{ backgroundColor: categoryColors[topic.category] || "lightseagreen" }}>
          <div className="topics-category">
            {topic.category.replace("-exercises", "").toUpperCase()}
          </div>
          <div className="topics-title">{topic.title}</div>
          <div className="topics-subtitle">{topic.subtitle}</div>
      </div>     
      <div className="topics-details">
              <div className="topics-level-time">
                <FaGraduationCap className="topics-icon" /> {topic.level} &nbsp; | &nbsp;
                <FaClock className="topics-icon" /> {topic.time}
              </div>
              <div className="topics-description">{topic.description}</div>
              </div>
              
            </div>
            </Link>
          </li>
        ))}
      </ul>
     
      {/* Pagination Controls */}


      {visibleCount < filteredTopics.length && (
  <div className="load-more-container">
    <button
      onClick={() => setVisibleCount((prev) => prev + topicsPerPage)}
      className="load-more-button"
    >
      Load More
    </button>
  </div>
)}
</div>


</div></div>

    </div>
  );
};

export default TopicsList;
