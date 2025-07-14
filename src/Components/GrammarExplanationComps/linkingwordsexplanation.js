import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';

const LinkingWordsExplanation = () => {
  return (
    <div className="grammar-explanation">
      <h2><FaBookOpen /> Linking Words</h2>

      <p>
        Linking words (also called conjunctions or connectors) help connect ideas in a sentence or between sentences. They show relationships such as cause and effect, contrast, time, or condition.
      </p>

      <div className="example-block">
        <p><strong>Examples:</strong></p>
        <ul>
          <li>The meeting was delayed, <strong>so</strong> we used the time to review the report.</li>
          <li>We can go out <strong>after</strong> we finish work.</li>
          <li>You can leave early <strong>as long as</strong> everything is done.</li>
        </ul>
      </div>

      <div className="grammar-explanation-text">
        <h3><FaLightbulb /> Common Linking Words and Their Use</h3>

        <div className="grammar-flex-table">
          {[
            ['so', 'Shows a result or consequence.'],
            ['because', 'Gives a reason.'],
            ['although / though', 'Shows contrast.'],
            ['if', 'Gives a condition.'],
            ['when', 'Refers to a specific time.'],
            ['while', 'Describes two actions happening at the same time.'],
            ['until', 'Shows how long something continues.'],
            ['before', 'Indicates an earlier time.'],
            ['after', 'Indicates a later time.'],
            ['as soon as', 'Means immediately after something happens.'],
            ['since', 'Gives a reason or indicates time from a point in the past.'],
            ['as long as', 'Shows a condition that must be true.'],
            ['in case', 'Describes a precaution.'],
            ['even though', 'Adds a surprising contrast.'],
            ['once', 'Means “after” something happens.'],
            ['as if', 'Describes an imaginary or unreal situation.'],
            ['which', 'Adds extra information about the previous clause.'],
            ['why', 'Gives a reason (often in a relative clause).'],
            ['whenever', 'Means any time or every time.'],
            ['as', 'Shows time or reason.'],
          ].map(([word, description], index) => (
            <div key={index} className="grammar-flex-row">
              <div className="grammar-cell"><strong>{word}</strong></div>
              <div className="grammar-cell">{description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkingWordsExplanation;
