import React from "react";
import { FaClock, FaGraduationCap, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import topics from "../Mainpages/Data/activitylist.js";
import readingData from "../Mainpages/Reading-Exercises/Data/readingcomp.js";
import videoData from "../Mainpages/Videos/Data/video.json";
import ScrollToTop from "../Components/ScrollToTop.js";

const RelatedExercises = ({ currentCategory, currentLevel, currentTitle = "", limit = 3 }) => {
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
    "listening-exercises": "purple",
    "flashcards": "#ff7f50",
    "quizzes": "yellow",
    "hungarian": "green",
  };

  // Step 1: Filter topics by category, level, and must have title
const filteredTopics = topics.filter(
  
  (topic) => topic.category === currentCategory && topic.level === currentLevel && topic.title
);

 

// Step 2: Find index of the current exercise (by title)
const currentIndex = filteredTopics.findIndex(
  (topic) => topic.title === currentTitle
);

let relatedTopics = [];

// Step 3: If current exercise not found, show first `limit` items
if (currentIndex === -1) {
  relatedTopics = filteredTopics.slice(0, limit);
} else {
  // Step 4: Collect next `limit` exercises after current, wrap around if needed
  for (let i = 1; i <= limit; i++) {
    const nextIndex = (currentIndex + i) % filteredTopics.length;
    relatedTopics.push(filteredTopics[nextIndex]);
  }
}
 console.log("Current Title:", currentTitle);
console.log("Current Index in filteredTopics:", currentIndex);
  return (
    <div className="related-exercises">
      <p>Try these activities next</p>
      <ul className="topics-list">
        {relatedTopics.map((topic) => {
          const isReading = topic.category === "reading-exercises";
          const isListening = topic.category === "listening-exercises";

          const matchingReading = isReading
            ? readingData.find((r) => r.readingcompTitle === topic.title)
            : null;
          const matchingVideo = isListening
            ? videoData.find((v) => v.title === topic.title)
            : null;

          const image = matchingReading?.image || matchingVideo?.image || topic.image;
          const title = topic.title;
          const destination =
            isReading && matchingReading
              ? `/reading-exercises/reading-comprehension?readingcompTitle=${encodeURIComponent(title)}`
              : isListening && matchingVideo
              ? `/listening-exercises/videos?title=${encodeURIComponent(title)}`
              : `/${topic.category}/${topic.id.toLowerCase()}`;

          return (
            <li key={topic.id}>
                <ScrollToTop />

              <Link to={destination} className="topics-box-link">
              
                <div className="topics-box">
                  <div
                    className="topics-box-ribbon"
                    style={{
                      backgroundColor: skillColors[topic.category] || "lightseagreen",
                    }}
                  >
                    {topic.category
                      .replace("-exercises", "")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </div>
                  <img src={image} alt={title} className="topics-image" />
                  <div
                    className="topics-card-header"
                    style={{
                      backgroundColor: levelColors[topic.level] || "lightseagreen",
                    }}
                  >
                    <div className="topics-category">{topic.levelname}</div>
                    <div className="topics-title">{title}</div>
                    <div className="topics-subtitle">{topic.subtitle}</div>
                  </div>
                  <div className="topics-details">
                    <div className="topics-level-time">
                      <FaGraduationCap className="topics-icon" /> {topic.level} |{" "}
                      <FaClock className="topics-icon" /> {topic.time} |{" "}
                      <FaBook className="topics-icon" />{" "}
                      {topic.category.replace("-exercises", "").toUpperCase()}
                    </div>
                    <div className="topics-description">{topic.description}</div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      
      <div className="related-exercises-footer">
        <Link to="/#filter" className="see-all-btn">
          See all exercises
        </Link>
      </div>
    </div>
  );
};

export default RelatedExercises;
