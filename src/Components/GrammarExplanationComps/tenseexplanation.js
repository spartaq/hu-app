import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';

const TenseExplanation = () => {
  return (
    <div className="grammar-explanation">

      <h2><FaBookOpen /> Tense Review</h2>

      <section>
        <h3><FaLightbulb /> Present Simple</h3>
        <p>Used for routines, facts, and general truths.</p>
        <p><strong>Example:</strong> I work at Magyar Telekom.</p>
      </section>

      <section>
        <h3><FaLightbulb /> Present Continuous</h3>
        <p>Used for actions happening now or temporary situations.</p>
        <p><strong>Example:</strong> I am leading a small team.</p>
      </section>

      <section>
        <h3><FaLightbulb /> Present Perfect</h3>
        <p>Used for actions connected to the present or life experiences.</p>
        <p><strong>Example:</strong> I have worked here for five years.</p>
      </section>

      <section>
        <h3><FaLightbulb /> Past Simple</h3>
        <p>Used for completed actions in the past.</p>
        <p><strong>Example:</strong> I graduated in 2018.</p>
      </section>

      <section>
        <h3><FaLightbulb /> Past Perfect</h3>
        <p>Used for actions that happened before another past event.</p>
        <p><strong>Example:</strong> I had never worked in a large company before.</p>
      </section>

      <section>
        <h3><FaLightbulb /> Future Simple</h3>
        <p>Used for predictions or decisions about the future.</p>
        <p><strong>Example:</strong> I will attend a training next month.</p>
      </section>

      <section>
        <h3><FaLightbulb /> Future Perfect</h3>
        <p>Used for actions that will be completed before a specific future time.</p>
        <p><strong>Example:</strong> By next year, I will have completed my certification.</p>
      </section>

      <section>
        <h3><FaLightbulb /> Conditionals</h3>
        <p>Used for hypothetical or unreal situations.</p>
        <p><strong>Example:</strong> If I had more free time, I would take a cybersecurity course.</p>
      </section>

    </div>
  );
};

export default TenseExplanation;
