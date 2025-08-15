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

<<<<<<< HEAD
<div className="grammar-display-grid">
                            <div className="agendagrammar">
                            <div className="grammartext">
  <h2>Grammar explanation</h2>
  <p>We use sense verbs like <strong>look</strong>, <strong>sound</strong>, <strong>feel</strong>, <strong>smell</strong>, <strong>taste</strong>, and <strong>seem</strong> to describe how something appears, feels, or seems to us.</p>

  <h3>Verb + adjective</h3>
  <p>Use <strong>verb + adjective</strong> to describe a person or thing.</p>
  <ul>
    <li><em>You <strong>look</strong> tired.</em></li>
    <li><em>This soup <strong>tastes</strong> delicious.</em></li>
    <li><em>She <strong>seems</strong> happy.</em></li>
    <li><em>He <strong>felt</strong> cold after the swim.</em></li>
  </ul>

  <h3>Verb + like + noun</h3>
  <p>Use <strong>verb + like + noun</strong> to compare something to something else.</p>
  <ul>
    <li><em>You <strong>look like</strong> a teacher.</em></li>
    <li><em>This <strong>smells like</strong> garlic.</em></li>
    <li><em>He <strong>sounds like</strong> his dad.</em></li>
  </ul>

  <h3>Verb + as if / as though + clause</h3>
  <p>Use <strong>verb + as if / as though + clause</strong> to describe what a situation seems to be like.</p>
  <ul>
    <li><em>She <strong>looks as if</strong> she’s going to cry.</em></li>
    <li><em>It <strong>sounds as though</strong> they’re arguing.</em></li>
    <li><em>He <strong>acted as if</strong> he didn’t know me.</em></li>
  </ul>

  <h3>Common sense verbs</h3>
  <table className="grammartable" border="1" cellpadding="5">
    <tr><th>Verb</th><th>Structure</th><th>Example</th></tr>
    <tr><td>look</td><td><strong>look + adj</strong></td><td><em>You look tired.</em></td></tr>
    <tr><td>feel</td><td><strong>feel + adj</strong></td><td><em>I feel sick.</em></td></tr>
    <tr><td>sound</td><td><strong>sound + adj</strong></td><td><em>That sounds interesting.</em></td></tr>
    <tr><td>taste</td><td><strong>taste + adj</strong></td><td><em>This tastes amazing.</em></td></tr>
    <tr><td>smell</td><td><strong>smell + like + noun</strong></td><td><em>It smells like perfume.</em></td></tr>
    <tr><td>seem</td><td><strong>seem + adj</strong></td><td><em>She seems worried.</em></td></tr>
  </table>

  <p><em>Note: These verbs are often stative, so we usually do not use them in continuous forms (e.g., <strong>It smells good</strong>, not <del>It is smelling good</del>).</em></p>
</div>

=======
      <div className="example-block">
        <p><strong>Verb + adjective</strong> — describe a quality or state:</p>
        <ul>
          <li>You <strong>look</strong> tired.</li>
          <li>This soup <strong>tastes</strong> delicious.</li>
          <li>She <strong>seems</strong> happy.</li>
          <li>He <strong>felt</strong> cold after the swim.</li>
        </ul>
      </div>
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c

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
