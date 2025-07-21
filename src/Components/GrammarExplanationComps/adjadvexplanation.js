import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';

const AdjadvExplanation = () => {
  return (
    <div className="grammar-explanation">
      <h2><FaBookOpen /> Adverbs Modifying Adjectives</h2>

      <p>
        When an adverb modifies an adjective, it usually comes directly
        <strong> before</strong> the adjective. This close position emphasizes the
        connection between the adverb and the adjective it modifies.
      </p>

      <div className="example-block">
        <p><strong>Examples:</strong></p>
        <ul>
          <li>The project is <strong>extremely important</strong>.</li>
          <li>She is <strong>quite talented</strong>.</li>
          <li>They were <strong>perfectly satisfied</strong> with the results.</li>
        </ul>
      </div>

      <div className="grammar-explanation-text">

        <h3><FaLightbulb /> A lot – very</h3>
        <ul>
          <li>
            <strong>extremely, incredibly, highly, remarkably</strong> (always positive)
          </li>
          <li>
            <strong>completely, absolutely, utterly</strong> (tends to be negative)
          </li>
          <li>
            <strong>vehemently</strong> (always negative, almost violent)
          </li>
        </ul>

        <h3><FaLightbulb /> Medium amount – kind of</h3>
        <ul>
          <li>
            <strong>quite, pretty, fairly, rather, kind of, moderately, almost</strong>
          </li>
        </ul>

        <h3><FaLightbulb /> A little</h3>
        <ul>
          <li>
            <strong>somewhat, slightly, a bit</strong>
          </li>
        </ul>

        <h3><FaLightbulb /> Special Cases</h3>
        <ul>
          <li>
            Some adverbs like <strong>absolutely</strong> and <strong>completely</strong> are often used with
            <em> non-gradable adjectives</em> (adjectives that already express an extreme or
            absolute quality, such as <em>perfect</em>, <em>unique</em>, or <em>horrible</em>).
          </li>
          <li>
            Adverbs like <strong>fairly</strong> or <strong>rather</strong> can sometimes convey subtle
            opinions, such as approval, disapproval, or reservation.
          </li>
        </ul>

      </div>
    </div>
  );
};

export default AdjadvExplanation;
