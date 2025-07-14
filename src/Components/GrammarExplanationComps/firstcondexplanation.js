import React from 'react';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';
import '../../CSS/grammarPage.css';

const FirstconditionalExplanation = () => {
  return (
    <div className="grammar-explanation">
      <h2><FaBookOpen style={{ marginRight: '8px' }} />First Conditional</h2>
      <p>We use the first conditional to talk about real and possible situations in the future.</p>

      <h3>Structure</h3>
      <p><strong>If + present simple, will + base verb</strong></p>
      <p>Use the present simple after <strong>if</strong>, and <strong>will</strong> + verb in the main clause.</p>

      <h4>Example structure:</h4>
      <div className="grammar-flex-table">
        {[
          ['If-clause (present simple)', 'Main clause (will + base verb)'],
          ['If it rains', 'we will stay at home'],
          ['If I study hard', 'I will pass the exam'],
          ["If they don't hurry", 'they will miss the bus'],
        ].map(([ifClause, mainClause], index) => (
          <div key={index} className={`grammar-flex-row${index === 0 ? ' header' : ''}`}>
            <div className="grammar-cell">{ifClause}</div>
            <div className="grammar-cell">{mainClause}</div>
          </div>
        ))}
      </div>

      <h3>Examples</h3>
      <ul>
        <li>If you eat too much, you will feel sick.</li>
        <li>If she calls, I will answer the phone.</li>
        <li>If we leave now, we will catch the train.</li>
        <li>If it doesn't stop raining, the match will be canceled.</li>
      </ul>

      <h3>Notes</h3>
      <ul>
        <li>The <strong>if-clause</strong> can come first or second in the sentence.</li>
        <li>If the <strong>if-clause</strong> comes first, use a comma.</li>
        <li>If the <strong>if-clause</strong> comes second, no comma is needed.</li>
      </ul>

      <h4>Examples:</h4>
      <ul>
        <li>If you study, you will pass. ✅ (comma after the if-clause)</li>
        <li>You will pass if you study. ✅ (no comma)</li>
      </ul>
    </div>
  );
};

export default FirstconditionalExplanation;
