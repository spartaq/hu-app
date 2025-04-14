import React, { useState, useEffect } from "react";
import Checkbox from "rc-checkbox";
import { Link } from "react-router-dom";
import { FaClock, FaGraduationCap } from "react-icons/fa";
import topics from "../Mainpages/Data/activitylist.js";
import readingData from "../Mainpages/Reading-Exercises/Data/readingcomp.js";
import videoData from "../Mainpages/Listening-Exercises/Data/video.json";

const ActivityFilter = ({ setFilters = () => {} }) => { 
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(6);
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
  const currentTopics = filteredTopics.slice(0, visibleCount);

	useEffect(() => {
	  setVisibleCount(topicsPerPage);
	}, [selectedTopics, selectedLevels, selectedTimes]);

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
    <div>
      <div className="home-container">
        <div className="topics-container">
          {/* Filtering Options */}
          <div className="filter-checkbox-container">
            {/* Topic Filter */}
            <div className="filter-checkbox-group">
              <h3>Topic</h3>
              {["grammar-exercises", "vocabulary-exercises", "reading-exercises", "listening-exercises", "quizzes", "flashcards"].map((topic) => (
                <div key={topic}>
                  <Checkbox
                    checked={selectedTopics.includes(topic)}
                    onChange={() => handleCheckboxChange(topic, setSelectedTopics)}
                  />
                  {topic.replace("-", " ").replace("exercises", "").replace(/\b\w/g, c => c.toUpperCase())}
                </div>
              ))}
            </div>

            {/* Level Filter */}
            <div className="filter-checkbox-group">
              <h3>Level</h3>
              {["A1", "A2", "B1", "B2", "C1"].map((level) => (
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

          <ul className="topics-list">
        {currentTopics.map((topic) => {
            // Only attempt this if the category is reading
            const matchingReading = topic.category === "reading-exercises"
            ? readingData.find(
                (reading) => reading.readingcompTitle === topic.title
                )
            : null;
            // Only attempt this if the category is listening
            const matchingVideo = topic.category === "listening-exercises"
            ? videoData.find(
                (video) => video.title === topic.title
                )
            : null;

            return (
<li key={topic.id}>
  <Link
    to={
      topic.category === "reading-exercises" && matchingReading
        ? `/reading-exercises/reading-comprehension?readingcompTitle=${encodeURIComponent(
            matchingReading.readingcompTitle
          )}`
        : topic.category === "listening-exercises" && matchingVideo
        ? `/listening-exercises/videos?title=${encodeURIComponent(matchingVideo.title)}`
        : `/${topic.category}/${topic.id.toLowerCase()}`
    }
    className="topics-box-link" // Custom class to style the link properly
  >
    <div className="topics-box">
      <img src={topic.image} alt={topic.title} className="topics-image" />
      <div className="topics-title">
      <div className="topics-category">
        {topic.category.replace("-exercises", "").toUpperCase()}
      </div>
      {topic.title}
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
            );
        })}
        </ul>

          {/* Pagination Controls */}
			{visibleCount < filteredTopics.length && (
			  <button onClick={() => setVisibleCount(prev => prev + topicsPerPage)} className="load-more-button">
				Load More
			  </button>
			)}
        </div>
      </div>
    </div>
  );
};

export default ActivityFilter;
