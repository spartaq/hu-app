import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';

const PassiveExplanation = () => {
  return (
    <div className="grammar-explanation">
      <h2><FaBookOpen /> Passive Voice</h2>

      <p>
        The passive voice is formed using <strong>"be"</strong> + <strong>past participle</strong> (3rd form of the verb). 
        It's used when the focus is on the action or result, not the person doing it.
      </p>

      <div className="example-block">
        <h3>Why Use the Passive?</h3>
        <p>
          Use the passive when:
        </p>
        <ul>
          <li>You don’t know who did the action.</li>
          <li>It’s not important who did it.</li>
          <li>The doer is obvious or already known.</li>
        </ul>
        <p><strong>Common in:</strong> News, history, science, manufacturing, and rules/laws.</p>
      </div>

      <div className="example-block">
        <h3>Passive Forms by Tense</h3>

        <ul>
          <li><strong>Present Simple:</strong> am / is / are + past participle<br />
            <i>The package is delivered every morning.</i>
          </li>
          <li><strong>Present Continuous:</strong> am / is / are + being + past participle<br />
            <i>The house is being cleaned right now.</i>
          </li>
          <li><strong>Past Simple:</strong> was / were + past participle<br />
            <i>The project was finished yesterday.</i>
          </li>
          <li><strong>Past Continuous:</strong> was / were + being + past participle<br />
            <i>The car was being repaired when I arrived.</i>
          </li>
          <li><strong>Present Perfect:</strong> has / have + been + past participle<br />
            <i>The emails have been sent.</i>
          </li>
          <li><strong>Past Perfect:</strong> had + been + past participle<br />
            <i>The building had been damaged in the storm.</i>
          </li>
          <li><strong>Future (will):</strong> will + be + past participle<br />
            <i>The results will be announced tomorrow.</i>
          </li>
          <li><strong>Modal verbs:</strong> can / should / must + be + past participle<br />
            <i>It must be done today.</i>
          </li>
        </ul>
      </div>

      <div className="example-block">
        <h3>Active vs Passive</h3>
        <p><strong>Active:</strong> The manager wrote the report.</p>
        <p><strong>Passive:</strong> The report was written by the manager.</p>
        <p>
          Notice how the passive puts the object ("the report") at the beginning to make it the focus.
        </p>
      </div>

      <div className="grammar-explanation-text">
        <h3><FaLightbulb /> Tip</h3>
        <p>
          The passive is useful when the action is more important than the person doing it. Use it to sound more formal or when the agent is unknown.
        </p>
      </div>
    </div>
  );
};

export default PassiveExplanation;
