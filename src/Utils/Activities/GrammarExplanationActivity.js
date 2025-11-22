import React from "react";
import '../../CSS/GrammarExplanationActivity.css';

const GrammarExplanationActivity = ({ data }) => {
  if (!data) return <p>Loading explanation...</p>;

  return (
    <div className="grammar-explanation-card">
      <h2 className="grammar-title">{data.title}</h2>

      {data.sections.map((sec, i) => (
        <div key={i} className="grammar-section">
          {sec.heading && <h3 className="grammar-section-heading">{sec.heading}</h3>}

          {sec.paragraphs &&
            sec.paragraphs.map((p, j) => <p key={j} className="grammar-paragraph">{p}</p>)}

          {sec.table && (
            <div className="grammar-table-container">
              <div className="grammar-flex-row grammar-header-row">
                {sec.table.headers.map((h, idx) => (
                  <div key={idx} className="grammar-cell">{h}</div>
                ))}
              </div>
              {sec.table.rows.map((row, rowIdx) => (
                <div key={rowIdx} className="grammar-flex-row">
                  {row.map((cell, cellIdx) => (
                    <div key={cellIdx} className="grammar-cell">{cell}</div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {sec.list && (
            <ul className="grammar-list">
              {sec.list.map((item, idx) =>
                Array.isArray(item) ? (
                  <li key={idx}>
                    {item[0]}
                    <ul>
                      {item[1].map((sub, subIdx) => (
                        <li key={subIdx}>{sub}</li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={idx}>{item}</li>
                )
              )}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default GrammarExplanationActivity;
