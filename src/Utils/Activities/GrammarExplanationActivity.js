import React from "react";
import { FaBookOpen, FaList, FaTable } from "react-icons/fa";
import '../../CSS/GrammarExplanationActivity.css';

const GrammarExplanationActivity = ({ data, title }) => {
  if (!data) return <p>Loading explanation...</p>;

  return (
    <div className="grammarexplanation-card">
      <h2 className="grammarexplanation-title">
        <FaBookOpen style={{ marginRight: '0.5rem', color: 'rebeccapurple' }} />
        {title}
      </h2>

      {data.sections.map((sec, i) => (
        <div key={i} className="grammarexplanation-section">
          {sec.heading && (
            <h3 className="grammarexplanation-section-heading">
              <FaBookOpen style={{ marginRight: '0.5rem', color: 'rebeccapurple' }} />
              {sec.heading}
            </h3>
          )}

          {sec.paragraphs &&
            sec.paragraphs.map((p, j) => (
              <p key={j} className="grammarexplanation-paragraph">{p}</p>
            ))}

          {sec.table && (
            <div className="grammarexplanation-table-container">
              <div className="grammarexplanation-flex-row grammarexplanation-header-row">
                {sec.table.headers.map((h, idx) => (
                  <div key={idx} className="grammarexplanation-cell">
                    {h}
                  </div>
                ))}
              </div>
              {sec.table.rows.map((row, rowIdx) => (
                <div key={rowIdx} className="grammarexplanation-flex-row">
                  {row.map((cell, cellIdx) => (
                    <div key={cellIdx} className="grammarexplanation-cell">{cell}</div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {sec.list && (
            <div className="grammarexplanation-list">
              {sec.list.map((item, idx) =>
                Array.isArray(item) ? (
                  <div key={idx} className="grammarexplanation-list-group">
                    <div className="grammarexplanation-list-item">{item[0]}</div>
                    {item[1].map((sub, subIdx) => (
                      <div key={subIdx} className="grammarexplanation-list-subitem">{sub}</div>
                    ))}
                  </div>
                ) : (
                  <div key={idx} className="grammarexplanation-list-item">{item}</div>
                )
              )}
            </div>
          )}


        </div>
      ))}
    </div>
  );
};

export default GrammarExplanationActivity;
