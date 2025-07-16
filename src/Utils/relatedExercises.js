import React from "react";
import { FaClock, FaGraduationCap, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import topics from "../Mainpages/Data/activitylist.js";
import readingData from "../Mainpages/Reading-Exercises/Data/readingcomp.js";
import videoData from "../Mainpages/Listening-Exercises/Data/video.json";

const RelatedExercises = ({ currentCategory, currentLevel, currentTitle = "", limit = 3 }) => {
  const levelColors = {
    A1: "#428bca",
    A2: "#5cb85c",
    B1: "goldenrod",
    B2: "orangered",
    C1: "crimson",
    HU: "purple",
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

  const relatedTopics = topics
    .filter((topic) => {
      if (topic.category !== currentCategory || topic.level !== currentLevel || !topic.title) {
        return false;
      }

      // Try to find a matching reading or video item for comparison
      const isReading = topic.category === "reading-exercises";
      const isListening = topic.category === "listening-exercises";
      const matchTitle = isReading
        ? readingData.find((r) => r.readingcompTitle === topic.title)
        : isListening
        ? videoData.find((v) => v.title === topic.title)
        : null;

      const topicTitle = matchTitle?.title || matchTitle?.readingcompTitle || topic.title;
      return topicTitle !== currentTitle;
    })
    .slice(0, limit);

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
