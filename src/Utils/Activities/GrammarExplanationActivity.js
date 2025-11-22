import React from "react";

const GrammarExplanationActivity = ({ data }) => {
  if (!data) return null;

  return (
    <div className="grammar-activity">
      <h2>{data.title}</h2>

      {data.sections?.map((sec, i) => (
        <div key={i} className="grammar-section">
          <h4>{sec.heading}</h4>
          <p style={{ whiteSpace: "pre-line" }}>{sec.content}</p>
        </div>
      ))}
    </div>
  );
};

export default GrammarExplanationActivity;
