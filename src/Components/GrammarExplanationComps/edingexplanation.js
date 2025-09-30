import React from 'react';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';
import '../../CSS/grammarPage.css';

const EdingExplanation = () => {
  return (
    <div className="grammar-explanation">
      <h2><FaBookOpen style={{ marginRight: '8px' }} />Adjectives Ending in -ed and -ing</h2>

      <p>
        Adjectives ending in <strong>-ed</strong> and <strong>-ing</strong> describe feelings or qualities, but they are used differently:
      </p>

      <p><strong>-ed adjectives:</strong></p>
      <ul>
        <li>Describe how someone <strong>feels</strong>.</li>
        <li>Examples:</li>
        <ul>
          <li><strong>I am excited</strong> about the new project.</li>
          <li><strong>She felt bored</strong> during the lecture.</li>
        </ul>
      </ul>

      <p><strong>-ing adjectives:</strong></p>
      <ul>
        <li>Describe the <strong>cause</strong> of the feeling or the quality of something.</li>
        <li>Examples:</li>
        <ul>
          <li><strong>The movie was exciting</strong>. (The movie caused excitement)</li>
          <li><strong>The lecture was boring</strong>. (The lecture caused boredom)</li>
        </ul>
      </ul>

      <p><strong>Key Notes:</strong></p>
      <ul>
        <li>Use <strong>-ed</strong> adjectives for the person experiencing the feeling (e.g., "I’m <strong>interested</strong>").</li>
        <li>Use <strong>-ing</strong> adjectives for the source of the feeling (e.g., "The topic is <strong>interesting</strong>").</li>
      </ul>

      <h3>Common -ed / -ing Adjective Pairs</h3>

      <div className="grammar-flex-table">
        {[
          ['-ed Adjective', '-ing Adjective'],
          ['embarrassed', 'embarrassing'],
          ['interested', 'interesting'],
          ['excited', 'exciting'],
          ['bored', 'boring'],
          ['tired', 'tiring'],
          ['confused', 'confusing'],
          ['amused', 'amusing'],
          ['relaxed', 'relaxing'],
          ['frightened', 'frightening'],
        ].map(([edAdj, ingAdj], index) => (
          <div key={index} className={`grammar-flex-row${index === 0 ? ' header' : ''}`}>
            <div className="grammar-cell">{edAdj}</div>
            <div className="grammar-cell">{ingAdj}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EdingExplanation;
