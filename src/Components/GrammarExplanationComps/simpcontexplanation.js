import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';

const SimpcontExplanation = () => {
  return (
    <div className="grammar-explanation">
      <h2><FaBookOpen /> Present Simple vs Present Continuous</h2>

      <p>The present simple and present continuous are both used to talk about the present, but in different ways.</p>

<<<<<<< HEAD
<div>
                            <div className="agendagrammar">
                            
                            <div className="grammartext">
  <h2>Grammar explanation</h2>
  <p>The present simple and the present continuous are both used to talk about the present, but in different ways.</p>

  <h3>Present Simple</h3>
  <p>We use the present simple to talk about:</p>
  <ul>
    <li>regular actions or habits</li>
    <li>things that are always true</li>
    <li>facts and general truths</li>
  </ul>
  <p><strong>Examples:</strong></p>
  <ul>
    <li>I work in an office.</li>
    <li>She goes to the gym every Saturday.</li>
    <li>Water boils at 100 degrees Celsius.</li>
    <li>They live in New York.</li>
  </ul>

  <h3>Present Continuous</h3>
  <p>We use the present continuous to talk about:</p>
  <ul>
    <li>actions happening now, at the moment of speaking</li>
    <li>temporary actions or situations</li>
    <li>future plans or arrangements</li>
  </ul>
  <p><strong>Examples:</strong></p>
  <ul>
    <li>I am working from home today.</li>
    <li>She is studying for her exams this week.</li>
    <li>They are visiting their grandparents tomorrow.</li>
    <li>It is raining right now.</li>
  </ul>

  <h3>Key Differences</h3>
  <ul>
    <li><strong>Present simple</strong> = habits and routines (<em>always, often, usually</em>).</li>
    <li><strong>Present continuous</strong> = things happening now or around now (<em>at the moment, right now</em>).</li>
    <li>We often use time expressions like <strong>always, often, usually, every day</strong> with the present simple.</li>
    <li>We often use <strong>now, today, at the moment, currently</strong> with the present continuous.</li>
  </ul>

  <h3>Quick comparison</h3>
  <ul>
    <li>He <strong>works</strong> in a bank. (Present simple – It's his regular job.)</li>
    <li>He <strong>is working</strong> from home today. (Present continuous – Temporary situation.)</li>
    <li>I <strong>usually eat</strong> lunch at 1 p.m. (Present simple – Habit.)</li>
    <li>I <strong>am eating</strong> lunch now. (Present continuous – Action happening right now.)</li>
  </ul>
</div>
=======
      <div className="example-block">
        <h3>Present Simple</h3>
        <p>We use the present simple to talk about:</p>
        <ul>
          <li>regular actions or habits</li>
          <li>things that are always true</li>
          <li>facts and general truths</li>
        </ul>
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c

        <p><strong>Examples:</strong></p>
        <ul>
          <li>I work in an office.</li>
          <li>She goes to the gym every Saturday.</li>
          <li>Water boils at 100 degrees Celsius.</li>
          <li>They live in New York.</li>
        </ul>
      </div>

      <div className="example-block">
        <h3>Present Continuous</h3>
        <p>We use the present continuous to talk about:</p>
        <ul>
          <li>actions happening now, at the moment of speaking</li>
          <li>temporary actions or situations</li>
          <li>future plans or arrangements</li>
        </ul>

        <p><strong>Examples:</strong></p>
        <ul>
          <li>I am working from home today.</li>
          <li>She is studying for her exams this week.</li>
          <li>They are visiting their grandparents tomorrow.</li>
          <li>It is raining right now.</li>
        </ul>
      </div>

      <div className="example-block">
        <h3><FaLightbulb /> Key Differences</h3>
        <ul>
          <li><strong>Present simple</strong> = habits and routines (<em>always, often, usually</em>).</li>
          <li><strong>Present continuous</strong> = things happening now or around now (<em>at the moment, right now</em>).</li>
          <li>We often use time expressions like <strong>always, often, usually, every day</strong> with the present simple.</li>
          <li>We often use <strong>now, today, at the moment, currently</strong> with the present continuous.</li>
        </ul>
      </div>

      <div className="grammar-explanation-text">
        <h3><FaLightbulb /> Quick Comparison</h3>

        <div className="grammar-flex-table">
          {[
            ['Present Simple', 'Present Continuous'],
            ['He <strong>works</strong> in a bank. (Regular job)', 'He <strong>is working</strong> from home today. (Temporary situation)'],
            ['I <strong>usually eat</strong> lunch at 1 p.m. (Habit)', 'I <strong>am eating</strong> lunch now. (Action happening now)'],
          ].map(([simple, cont], index) => (
            <div key={index} className={`grammar-flex-row${index === 0 ? ' header' : ''}`}>
              <div className="grammar-cell" dangerouslySetInnerHTML={{ __html: simple }} />
              <div className="grammar-cell" dangerouslySetInnerHTML={{ __html: cont }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpcontExplanation;
