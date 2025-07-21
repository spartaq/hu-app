import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaLightbulb, FaListUl } from 'react-icons/fa';

const SuggestExplanation = () => {
  return (
    <div className="grammar-explanation">

      <h2><FaBookOpen /> Suggest, Recommend, Offer, Promise</h2>

      <p>
        These verbs are often used to give advice, make offers, or commit to actions. 
        They are followed by different structures depending on their meaning.
      </p>

      <hr />

      <h3><FaLightbulb /> Suggest</h3>
      <p><strong>Suggest</strong> is usually followed by:</p>
      <ul>
        <li><em>Suggest + doing something</em>: <strong>I suggest taking a break.</strong></li>
        <li><em>Suggest + someone + base verb (subjunctive)</em>: <strong>I suggest you talk to her.</strong></li>
        <li><em>Suggest + a noun or idea</em>: <strong>I suggest a different approach.</strong></li>
      </ul>
      <p><em>Note:</em> The subjunctive after 'suggest' uses the base form of the verb (without 'to').</p>

      <hr />

      <h3><FaLightbulb /> Recommend</h3>
      <p><strong>Recommend</strong> is used similarly to 'suggest', with:</p>
      <ul>
        <li><em>Recommend + doing something</em>: <strong>I recommend reading this book.</strong></li>
        <li><em>Recommend + someone + base verb (subjunctive)</em>: <strong>I recommend she apply for the job.</strong></li>
        <li><em>Recommend + noun</em>: <strong>I recommend this restaurant.</strong></li>
      </ul>

      <hr />

      <h3><FaLightbulb /> Offer</h3>
      <p><strong>Offer</strong> shows willingness to do something or give something:</p>
      <ul>
        <li><em>Offer + to do something</em>: <strong>He offered to help me.</strong></li>
        <li><em>Offer + someone + something</em>: <strong>She offered me a cup of tea.</strong></li>
        <li><em>Offer + something</em>: <strong>They offered a discount.</strong></li>
      </ul>

      <hr />

      <h3><FaLightbulb /> Promise</h3>
      <p><strong>Promise</strong> expresses commitment or assurance:</p>
      <ul>
        <li><em>Promise + to do something</em>: <strong>I promise to call you tomorrow.</strong></li>
        <li><em>Promise + someone + something</em>: <strong>She promised him a raise.</strong></li>
        <li><em>Promise + (that) + clause</em>: <strong>He promised that he would arrive early.</strong></li>
      </ul>

      <hr />

      <h3><FaListUl /> Summary of Usage</h3>
      <ul>
        <li><strong>Suggest / Recommend</strong> + <em>doing something</em> or + <em>someone + base verb</em> (subjunctive)</li>
        <li><strong>Offer</strong> + <em>to do something</em> or + <em>someone + something</em></li>
        <li><strong>Promise</strong> + <em>to do something</em>, + <em>someone + something</em>, or + <em>that + clause</em></li>
      </ul>

      <p><em>Note:</em> The subjunctive mood is common after suggest and recommend in formal contexts, especially in American English.</p>

    </div>
  );
};

export default SuggestExplanation;
