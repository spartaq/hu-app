import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';

const SenseverbsExplanation = () => {
  return (
    <div className="grammar-explanation">
      <h2><FaBookOpen /> Sense Verbs: Describing Appearance and Perception</h2>

      <p>
        Sense verbs like <strong>look</strong>, <strong>sound</strong>, <strong>feel</strong>, <strong>smell</strong>, <strong>taste</strong>, and <strong>seem</strong> describe how things appear or seem to our senses or feelings. They express impressions or states rather than actions.
      </p>

      <div className="example-block">
        <p><strong>Verb + adjective</strong> — describe a quality or state:</p>
        <ul>
          <li>You <strong>look</strong> tired.</li>
          <li>This soup <strong>tastes</strong> delicious.</li>
          <li>She <strong>seems</strong> happy.</li>
          <li>He <strong>felt</strong> cold after the swim.</li>
        </ul>
      </div>

      <div className="example-block">
        <p><strong>Verb + like + noun</strong> — compare something to another thing:</p>
        <ul>
          <li>You <strong>look like</strong> a teacher.</li>
          <li>This <strong>smells like</strong> garlic.</li>
          <li>He <strong>sounds like</strong> his dad.</li>
        </ul>
      </div>

      <div className="example-block">
        <p><strong>Verb + as if / as though + clause</strong> — describe what a situation seems like:</p>
        <ul>
          <li>She <strong>looks as if</strong> she’s going to cry.</li>
          <li>It <strong>sounds as though</strong> they’re arguing.</li>
          <li>He <strong>acted as if</strong> he didn’t know me.</li>
        </ul>
      </div>

      <div className="grammar-explanation-text">
        <h3><FaLightbulb /> Common Sense Verbs and Structures</h3>

        <div className="grammar-flex-table">
          {[
            ['Verb', 'Structure', 'Example'],
            ['look', 'look + adj', 'You look tired.'],
            ['feel', 'feel + adj', 'I feel sick.'],
            ['sound', 'sound + adj', 'That sounds interesting.'],
            ['taste', 'taste + adj', 'This tastes amazing.'],
            ['smell', 'smell + like + noun', 'It smells like perfume.'],
            ['seem', 'seem + adj', 'She seems worried.'],
          ].map(([verb, structure, example], index) => (
            <div key={index} className={`grammar-flex-row${index === 0 ? ' header' : ''}`}>
              <div className="grammar-cell">{verb}</div>
              <div className="grammar-cell">{structure}</div>
              <div className="grammar-cell">{example}</div>
            </div>
          ))}
        </div>

        <p>
          <em>Note: These verbs are often stative and usually not used in continuous forms. For example, say <strong>"It smells good"</strong>, not <del>"It is smelling good"</del>.</em>
        </p>
      </div>
    </div>
  );
};

export default SenseverbsExplanation;
