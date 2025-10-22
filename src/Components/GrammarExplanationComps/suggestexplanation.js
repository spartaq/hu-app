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
      <p><strong>Suggest</strong> is used to give advice to someone about what they should do:</p>
      <ul>
        <li><em>Suggest + (that) someone + base verb</em>: <strong>I suggest you talk to her.</strong></li>
      </ul>

      <hr />

      <h3><FaLightbulb /> Recommend</h3>
      <p><strong>Recommend</strong> is used tell someone about a good place or thing, such as a hotel or restaurant:</p>
      <ul>
        <li><em>Recommend + noun</em>: <strong>I recommend this restaurant.</strong></li>
      </ul>

      <hr />

      <h3><FaLightbulb /> Offer</h3>
      <p><strong>Offer</strong> shows willingness to do something or give something:</p>
      <ul>
        <li><em>Offer + to do something</em>: <strong>He offered to help me.</strong></li>
        <li><em>Offer + someone + something</em>: <strong>She offered me a cup of tea.</strong></li>
      </ul>

      <hr />

      <h3><FaLightbulb /> Promise</h3>
      <p><strong>Promise</strong> expresses commitment or assurance:</p>
      <ul>
        <li><em>Promise + someone + (that) + sentence</em>: <strong>He promised that he would arrive early.</strong></li>
      </ul>

      </div>
  );
};

export default SuggestExplanation;
