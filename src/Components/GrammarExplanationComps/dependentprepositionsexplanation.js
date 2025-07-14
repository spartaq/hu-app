import React from 'react';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';
import '../../CSS/grammarPage.css';

const DependentprepositionsExplanation = () => {
  return (
    <div className="grammar-explanation">
      <h2><FaBookOpen style={{ marginRight: '8px' }} />Dependent Prepositions</h2>

      <p>
        Dependent prepositions are prepositions that usually follow certain verbs, adjectives, or nouns, and are necessary to complete their meaning.
      </p>

      <h3><FaLightbulb style={{ marginRight: '8px' }} />Common Examples</h3>
      <ul>
        <li><strong>Angry about</strong> – She was angry about the delay.</li>
        <li><strong>Angry with</strong> – He’s angry with his friend.</li>
        <li><strong>Interested in</strong> – They are interested in learning more.</li>
        <li><strong>Good at</strong> – She is good at playing piano.</li>
        <li><strong>Depend on</strong> – You can depend on me.</li>
        <li><strong>Afraid of</strong> – He’s afraid of spiders.</li>
        <li><strong>Excited about</strong> – We are excited about the trip.</li>
      </ul>

      <p>
        For a more extensive list of dependent prepositions and their uses, check out {' '}
        <a
          href="https://www.ef.com/wwen/english-resources/english-grammar/dependent-prepositions/"
          target="_blank"
          rel="noopener noreferrer"
        >
          this resource
        </a>.
      </p>
    </div>
  );
};

export default DependentprepositionsExplanation;
