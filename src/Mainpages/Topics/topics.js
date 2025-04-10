import React, { useState } from "react";
import Checkbox from "rc-checkbox";
import { Link } from "react-router-dom";
import { FaClock, FaBook, FaGraduationCap } from "react-icons/fa";
import topics from "./Data/topicslist.js";

const TopicsList = ({ setFilters = () => {} }) => {  // Ensure setFilters is always defined
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const topicsPerPage = 6;
  
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
  const currentTopics = filteredTopics.slice(indexOfFirstTopic, indexOfLastTopic);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredTopics.length / topicsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="topics-container">
      {/* Filtering Options */}
      <div className="filter-checkbox-container">
        {/* Topic Filter */}
        <div className="filter-checkbox-group">
          <h3>Topic</h3>
          {["Business", "General", "Listening", "Food", "Travel", "Environment", "Health", "Education"].map((topic) => (
            <div key={topic}>
              <Checkbox
                checked={selectedTopics.includes(topic)}
                onChange={() => handleCheckboxChange(topic, setSelectedTopics)}
              />
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
              />
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
              />
              {time}
            </div>
          ))}
        </div>

      </div>

      {/* Topics List */}
      <ul className="topics-list">
        {currentTopics.map((topic) => (
          <li key={topic.id}>
            <div className="topics-box">
              <img src={topic.image} alt={topic.title} className="topics-image" />
              <div className="topics-title">{topic.title}</div>
              <div className="topics-category">
                <FaBook className="topics-icon" /> {topic.category}
              </div>
              <div className="topics-level-time">
                <FaGraduationCap className="topics-icon" /> {topic.level} &nbsp; | &nbsp;
                <FaClock className="topics-icon" /> {topic.time}
              </div>
              <div className="topics-description">{topic.description}</div>
              <Link to={`/topics/${topic.id}`} className="topics-button">
                Go to Lesson Plan
              </Link>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      {filteredTopics.length > topicsPerPage && (
  <div className="pagination">
    <button
      onClick={prevPage}
      disabled={currentPage === 1}
      className="pagination-button"
    >
      ←
    </button>

    {Array.from({ length: totalPages }, (_, i) => i + 1)
      .filter((page) => {
        // Only show 4 numbers around the current page
        if (totalPages <= 4) return true;
        if (currentPage <= 2) return page <= 4;
        if (currentPage >= totalPages - 1) return page >= totalPages - 3;
        return Math.abs(currentPage - page) <= 1;
      })
      .map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => setCurrentPage(pageNumber)}
          className="pagination-button"
          style={{
            backgroundColor:
              currentPage === pageNumber ? "orangered" : "white",
            color: currentPage === pageNumber ? "white" : "orangered",
          }}
        >
          {pageNumber}
        </button>
      ))}

    <button
      onClick={nextPage}
      disabled={currentPage === totalPages}
      className="pagination-button"
    >
      →
    </button>
  </div>
)}

    </div>
  );
};

export default TopicsList;
