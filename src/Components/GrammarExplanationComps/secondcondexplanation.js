import React from 'react';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';
import '../../CSS/grammarPage.css';

const SecondcondExplanation = () => {
  return (
    <div className="grammar-explanation">
      <h2><FaBookOpen style={{ marginRight: '8px' }} />Second Conditional</h2>
      <p>We use the second conditional to talk about imaginary, unlikely, or hypothetical situations in the present or future.</p>

      <h3>Structure</h3>
      <p><strong>If + past simple, would + base verb</strong></p>
      <p>We use the past simple after <strong>if</strong>, and <strong>would</strong> + verb in the main clause.</p>

<<<<<<< HEAD
<div>
                            <div className="agendagrammar">
                            <div className="grammartext">
  <h2>Grammar explanation</h2>
  <p>We use the second conditional to talk about imaginary, unlikely, or hypothetical situations in the present or future.</p>

  <h3>Structure</h3>
  <p><strong>If + past simple, would + base verb</strong></p>
  <p>We use the past simple after <strong>if</strong>, and <strong>would</strong> + verb in the main clause.</p>

  <p><strong>Example structure:</strong></p>
  <ul>
    <li>If + past simple, would + verb</li>
    <li>If I won the lottery, I would travel the world.</li>
    <li>If she studied more, she would pass the test.</li>
    <li>If it rained, we would stay at home.</li>
  </ul>

  <h3>Examples</h3>
  <ul>
    <li>If I were taller, I would play basketball.</li>
    <li>If we had more time, we would visit you.</li>
    <li>If he didn't work so much, he would have more free time.</li>
    <li>If you lived closer, we would see each other more often.</li>
  </ul>

  <h3>Notes</h3>
  <ul>
    <li>The <strong>if-clause</strong> can come first or second in the sentence.</li>
    <li>If the <strong>if-clause</strong> comes first, use a comma.</li>
    <li>If the <strong>if-clause</strong> comes second, no comma is needed.</li>
    <li>We often use <strong>were</strong> instead of <strong>was</strong> for all subjects in the second conditional (especially in formal English).</li>
  </ul>
  <p><strong>Examples:</strong></p>
  <ul>
    <li>If I were you, I would take the job. ✅ (more formal)</li>
    <li>If I was you, I would take the job. ✅ (common in informal speech)</li>
  </ul>
</div>

=======
      <h4>Example structure:</h4>
      <div className="grammar-flex-table">
        {[
          ['If-clause (past simple)', 'Main clause (would + base verb)'],
          ['If I won the lottery', 'I would travel the world'],
          ['If she studied more', 'she would pass the test'],
          ['If it rained', 'we would stay at home'],
        ].map(([ifClause, mainClause], index) => (
          <div key={index} className={`grammar-flex-row${index === 0 ? ' header' : ''}`}>
            <div className="grammar-cell">{ifClause}</div>
            <div className="grammar-cell">{mainClause}</div>
          </div>
        ))}
      </div>
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c

      <h3>Examples</h3>
      <ul>
        <li>If I were taller, I would play basketball.</li>
        <li>If we had more time, we would visit you.</li>
        <li>If he didn't work so much, he would have more free time.</li>
        <li>If you lived closer, we would see each other more often.</li>
      </ul>

      <h3>Notes</h3>
      <ul>
        <li>The <strong>if-clause</strong> can come first or second in the sentence.</li>
        <li>If the <strong>if-clause</strong> comes first, use a comma.</li>
        <li>If the <strong>if-clause</strong> comes second, no comma is needed.</li>
        <li>We often use <strong>were</strong> instead of <strong>was</strong> for all subjects in the second conditional (especially in formal English).</li>
      </ul>

      <h4>Examples:</h4>
      <ul>
        <li>If I were you, I would take the job. ✅ (more formal)</li>
        <li>If I was you, I would take the job. ✅ (common in informal speech)</li>
      </ul>
    </div>
  );
};

export default SecondcondExplanation;
