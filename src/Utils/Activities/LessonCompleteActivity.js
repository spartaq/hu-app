import React from "react";
import "../../CSS/LessonCompleteActivity.css";
import { Link } from "react-router-dom";

const LessonCompleteActivity = ({ data }) => {
  const {
    title = "Lesson Complete!",
    message = "Great job! You're ready to move on.",
    nextLessonUrl,
    hubUrl = "/activities"
  } = data;

  return (
    <div className="lesson-complete-container">
      <h1 className="lesson-complete-title">🎉 {title}</h1>

      <p className="lesson-complete-text">{message}</p>

      <div className="lesson-complete-buttons">
        {nextLessonUrl && (
          <Link to={nextLessonUrl} className="next-lesson-btn">
            Next Lesson →
          </Link>
        )}

        <Link to={hubUrl} className="activity-hub-btn">
          Back to Activity Hub
        </Link>
      </div>

    </div>
  );
};

export default LessonCompleteActivity;