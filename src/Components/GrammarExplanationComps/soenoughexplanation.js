import React from 'react';
import '../../CSS/grammarPage.css';
import { FaLightbulb, FaBookOpen } from 'react-icons/fa';

const SoenoughExplanation = () => {
  return (
    <div className="grammar-explanation">

      <h2><FaBookOpen /> Grammar Explanation</h2>

      <p><strong>So, such, too, enough</strong> are intensifiers. They add emphasis to adjectives, adverbs, and nouns, showing the strength or degree of something.</p>
      <hr />

      <h3><FaLightbulb /> So + adjective/adverb</h3>
      <p>We use <strong>so</strong> before adjectives or adverbs to emphasize them.</p>
      <ul>
        <li>She is <strong>so</strong> tired.</li>
        <li>He runs <strong>so</strong> fast.</li>
      </ul>

      <h3><FaLightbulb /> Such + (a) + adjective + noun</h3>
      <p><strong>Such</strong> is used before a noun or noun phrase with an adjective to show emphasis.</p>
      <ul>
        <li>It was <strong>such a</strong> beautiful day.</li>
        <li>They are <strong>such</strong> good friends.</li>
      </ul>

      <h3><FaLightbulb /> Too + adjective/adverb</h3>
      <p><strong>Too</strong> means 'more than necessary' or 'excessively'. It often has a negative meaning.</p>
      <ul>
        <li>The coffee is <strong>too</strong> hot to drink.</li>
        <li>She talks <strong>too</strong> quickly.</li>
      </ul>

      <h3><FaLightbulb /> Enough + adjective/adverb/noun</h3>
      <p><strong>Enough</strong> means 'sufficient' or 'adequate'. It can come after adjectives, adverbs, or before nouns.</p>
      <ul>
        <li>He is old <strong>enough</strong> to vote.</li>
        <li>We don’t have <strong>enough</strong> time.</li>
        <li>She speaks English <strong>well enough</strong>.</li>
      </ul>

      <h3>Notes</h3>
      <ul>
        <li>We say <strong>so + adjective/adverb</strong> but <strong>such + noun phrase</strong>.</li>
        <li>Use <strong>too</strong> when something is excessive or unwanted.</li>
        <li><strong>Enough</strong> can be used with adjectives or adverbs after them, but with nouns before them.</li>
      </ul>

    </div>
  );
};

export default SoenoughExplanation;
