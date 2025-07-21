import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';

const PerfectPastExplanation = () => {
  return (
    <div className="grammar-explanation">

      <h2><FaBookOpen /> Present Perfect vs Simple Past</h2>

      <p>
        The <strong>present perfect</strong> and <strong>simple past</strong> tenses both talk about past actions, but they focus on different meanings:
      </p>

      <div className="example-block">
        <p><strong>Examples:</strong></p>
        <ul>
          <li><strong>I lived</strong> in Sacramento for 18 years. (Simple Past: I don’t live there now.)</li>
          <li><strong>I have lived</strong> in Budapest for 33 years. (Present Perfect: I still live here.)</li>
        </ul>
      </div>

      <div className="grammar-explanation-text">
        <h3><FaLightbulb /> Time Expressions</h3>

        <div className="grammar-flex-table">
          {[
            ['Present Perfect', 'Simple Past'],
            ['for, since, yet, already', 'for, when, ago, last, yesterday'],
            ['I have lived in Budapest <strong>for</strong> 33 years.', 'I lived in Sacramento 33 years <strong>ago</strong>.'],
            ['I have lived on Pannonia <strong>since</strong> last summer.', '<strong>When</strong> I lived in Sacramento, I was still a teenager.'],
            ["I haven't been to Switzerland <strong>yet</strong>.", ''],
            ['Have you tried making French baguettes <strong>yet</strong>?', ''],
            ['I have <strong>already</strong> been to France.', ''],
          ].map((row, index) => (
            <div key={index} className="grammar-flex-row" dangerouslySetInnerHTML={{ __html: row.map(cell => `<div class="grammar-cell">${cell}</div>`).join('') }} />
          ))}
        </div>

      </div>

    </div>
  );
};

export default PerfectPastExplanation;
