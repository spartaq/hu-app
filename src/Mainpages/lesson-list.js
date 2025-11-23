import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaGraduationCap } from "react-icons/fa";
import topics from "../Mainpages/Data/activitylist.js";
import "../CSS/lessonlist.css";

export default function LessonList() {
  const levelOrder = ["A1", "A2", "B1", "B2", "C1", "HU1", "HU2"];

  // Sort lessons by level
  const sortedLessons = [...topics].sort(
    (a, b) => levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level)
  );

  return (

    <div className="grammar-container">
    <div className="lessonlist-wrapper">
      <h2 className="lessonlist-title">Lessons</h2>

      <div className="lessonlist-scroll">
        {sortedLessons.map((lesson) => (
          <Link
            key={lesson.id}
            to={
              lesson.category === "reading-exercises"
                ? `/reading/${encodeURIComponent(lesson.id.toLowerCase())}`
                : `/${lesson.category}/${encodeURIComponent(lesson.id.toLowerCase())}`
            }
            className="lessonlist-item"
          >
            <img src={lesson.image} alt="" className="lessonlist-thumb" />

            <div className="lessonlist-info">
              <h3>{lesson.title}</h3>
              <p className="lessonlist-sub">{lesson.subtitle}</p>

              <div className="lessonlist-meta">
                <span><FaGraduationCap /> {lesson.level}</span>
                <span><FaClock /> {lesson.time}</span>
              </div>
            </div>

            <div className="lessonlist-arrow">›</div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
}
