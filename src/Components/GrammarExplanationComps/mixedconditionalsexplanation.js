import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';

const MixedConditionalsExplanation = () => {
  return (
    <div className="grammar-explanation">
      <h2><FaBookOpen /> Mixed Conditionals</h2>

      <p>
        Mixed conditionals are used when the two parts of a conditional sentence refer to different times. They describe hypothetical situations where a change in the past could affect the present, or where a present situation might have changed the past.
      </p>

      <div className="example-block">
        <p><strong>Examples:</strong></p>
        <ul>
          <li><strong>If I had studied harder</strong>, I <strong>would have a better job now</strong>. <em>(Past affecting present)</em></li>
          <li><strong>If she were more confident</strong>, she <strong>would have spoken up in the meeting</strong>. <em>(Present affecting past)</em></li>
        </ul>
      </div>

      <div className="grammar-explanation-text">
        <h3><FaLightbulb /> Common Mixed Conditional Structures</h3>

        <div className="grammar-flex-table">
          {[
            ['If + past perfect → would + base verb', 'Past condition, present result'],
            ['If + past simple → would have + past participle', 'Present condition, past result'],
          ].map(([structure, use], index) => (
            <div key={index} className="grammar-flex-row">
              <div className="grammar-cell"><strong>{structure}</strong></div>
              <div className="grammar-cell">{use}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MixedConditionalsExplanation;
