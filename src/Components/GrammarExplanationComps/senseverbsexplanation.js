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
    ['look', 'look + like + noun', 'You look like a teacher.'],
    ['look', 'look + as if + clause', 'She looks as if she’s going to cry.'],
    ['feel', 'feel + adj', 'I feel sick.'],
    ['feel', 'feel + like + noun', 'I feel like a zombie.'],
    ['feel', 'feel + as if + clause', 'I feel as if I haven’t slept in days.'],
    ['sound', 'sound + adj', 'That sounds interesting.'],
    ['sound', 'sound + like + noun', 'He sounds like his dad.'],
    ['sound', 'sound + as if + clause', 'It sounds as if they are arguing.'],
    ['taste', 'taste + adj', 'This tastes amazing.'],
    ['taste', 'taste + like + noun', 'It tastes like chocolate.'],
    ['taste', 'taste + as if + clause', 'It tastes as if it was made yesterday.'],
    ['smell', 'smell + adj', 'It smells strange.'],
    ['smell', 'smell + like + noun', 'It smells like garlic.'],
    ['smell', 'smell + as if + clause', 'It smells as if something is burning.'],
    ['seem', 'seem + adj', 'She seems worried.'],
    ['seem', 'seem + like + noun', 'He seems like a good person.'],
    ['seem', 'seem + as if + clause', 'They seem as if they have lost interest.'],
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
