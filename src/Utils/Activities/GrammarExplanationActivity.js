import React from "react";
import { FaBookOpen } from "react-icons/fa";
import "../../CSS/GrammarExplanationActivity.css";

const GrammarExplanationActivity = ({ data, title }) => {
  if (!data) return <p>Loading explanation...</p>;

  return (
    <div className="grammarexplanation-wrapper">

      {/* Title */}
      <h2 className="grammarexplanation-title">
        <FaBookOpen className="grammarexplanation-title-icon" />
        {title}
      </h2>

      {/* Sections */}


      {data.sections.map((sec, i) => (
  <div className="grammarexplanation-section" key={i}>
    <div className="ge-heading">
      <span className="ge-icon"></span>
      <h2>{sec.heading}</h2>
    </div>

    {sec.paragraphs?.map((p, idx) => (
      <p key={idx} className="ge-paragraph">{p}</p>
    ))}

    {sec.list && (
      <ul className="ge-list">
        {sec.list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    )}
  </div>
))}


    </div>
  );
};

export default GrammarExplanationActivity;
