import React from "react";
import "../CSS/modalflow.css"; 

const ProgressBar = ({ completed, total }) => {
  const percentage = total > 0 ? (completed / total) * 100 : 0;

  return (
    <div className="activity__progress-bar">
      <div
        className="activity__progress-bar-fill"
        style={{ width: `${percentage}%` }}
      />
      <span className="activity__progress-text">
        {completed} / {total}
      </span>
    </div>
  );
};

export default ProgressBar;
