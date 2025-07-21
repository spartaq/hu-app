import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';

const HabitsExplanation = () => {
  return (
    <div className="grammar-explanation">

      {/* Present Habits Section */}
      <h2><FaBookOpen /> Present Habits</h2>
      <p>
        Present habits describe actions or behaviors that happen regularly or typically in the present.
        These habits often express tendencies, routines, or repeated actions.
      </p>

      <div className="example-block">
        <p><strong>Examples:</strong></p>
        <ul>
          <li>She <strong>goes</strong> to the gym every morning.</li>
          <li>He <strong>always arrives</strong> early to meetings.</li>
          <li>They <strong>keep asking</strong> for help.</li>
        </ul>
      </div>

      <div className="grammar-explanation-text">
        <h3><FaLightbulb /> Common Expressions for Present Habits</h3>
        <div className="grammar-flex-table">
          {[
            ['keep + verb-ing', 'always + verb (for habits)'],
            ['be + prone to + verb-ing', 'tend to + base verb'],
            ['be in the habit of + verb-ing', 'be used to + verb-ing'],
            ['be always + verb-ing (irritating habit)', ''],
          ].map((row, index) => (
            <div key={index} className="grammar-flex-row">
              {row.map((item, idx) => (
                <div key={idx} className="grammar-cell">{item}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Past Habits Section */}
      <h2><FaBookOpen /> Past Habits</h2>
      <p>
        Past habits describe repeated actions or states that happened regularly in the past but no longer happen.
        They often indicate routines or tendencies that were true in the past.
      </p>

      <div className="example-block">
        <p><strong>Examples:</strong></p>
        <ul>
          <li>I <strong>used to</strong> play football every weekend.</li>
          <li>When we were kids, we <strong>would</strong> visit our grandparents every summer.</li>
          <li>She <strong>walked</strong> to school before the bus service started.</li>
        </ul>
      </div>

      <div className="grammar-explanation-text">
        <h3><FaLightbulb /> Common Expressions for Past Habits</h3>
        <div className="grammar-flex-table">
          {[
            ['used to + base verb', 'would + base verb (for repeated actions)'],
            ['simple past (for specific repeated actions)', 'didn\'t use to + base verb (negative)'],
          ].map((row, index) => (
            <div key={index} className="grammar-flex-row">
              {row.map((item, idx) => (
                <div key={idx} className="grammar-cell">{item}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HabitsExplanation;
