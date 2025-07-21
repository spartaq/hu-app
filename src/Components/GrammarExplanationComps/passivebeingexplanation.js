import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';

const PassivebeingExplanation = () => {
  return (
    <div className="grammar-explanation">
      <h2><FaBookOpen /> Passive: "Being" and "Having Been"</h2>

      <p>
        In English, we use <strong>"being + past participle"</strong> to express passive gerunds — turning passive actions into noun-like phrases. These are common after verbs like <em>like</em>, <em>hate</em>, and <em>enjoy</em>.
      </p>

      <div className="example-block">
        <h3>Present Passive Gerunds: <em>"being + past participle"</em></h3>
        <ul>
          <li><strong>Being ignored</strong> doesn’t feel good.<br /><i>(The fact that I am ignored doesn’t feel good.)</i></li>
          <li>No one likes <strong>being lied to</strong>.<br /><i>(The situation when people lie to them.)</i></li>
          <li>What the players love most is <strong>being given the freedom</strong> to practice how they want.<br /><i>(Turns the whole phrase into a noun.)</i></li>
          <li>I’m sick of <strong>being treated like a number</strong>.<br /><i>(The situation where people treat me like a number.)</i></li>
        </ul>
      </div>

      <div className="example-block">
        <h3>Past Passive Gerunds: <em>"having been + past participle"</em></h3>
        <p>
          Use <strong>"having been"</strong> to show that the passive action happened before another past event.
        </p>
        <ul>
          <li><strong>They didn’t like having been overlooked</strong> for the award.<br /><i>(The gerund is the object of the verb "like.")</i></li>
        </ul>
        <p>
          This structure is less common in everyday English. Most speakers prefer using the present passive form <strong>being</strong> when the timing is clear from context:
        </p>
        <ul>
          <li><strong>They didn’t like being overlooked</strong> for the award. ✅</li>
          <li><strong>They didn’t like having been overlooked</strong> for the award. ✅</li>
        </ul>
      </div>

      <div className="example-block">
        <h3>Introductory Clause with <em>"Having been"</em></h3>
        <p>
          We can also begin a sentence with <strong>having been</strong> to explain a reason or background event:
        </p>
        <ul>
          <li><em>Having been given the job, he decided to celebrate with his family.</em><br /><i>(After receiving the job, he celebrated.)</i></li>
        </ul>
      </div>

      <div className="grammar-explanation-text">
        <h3><FaLightbulb /> Tip</h3>
        <p>
          Use <strong>being + past participle</strong> for general passive ideas, especially after verbs and prepositions. Use <strong>having been</strong> when it's important to show that the action happened before another event in the past.
        </p>
      </div>
    </div>
  );
};

export default PassivebeingExplanation;
