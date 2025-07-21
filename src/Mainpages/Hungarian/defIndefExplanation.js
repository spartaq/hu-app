import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaListUl, FaLightbulb, FaLanguage } from 'react-icons/fa';

const DefiniteIndefiniteExplanation = () => {
   return (
    <div>
      <div className="grammar-explanation">

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> What Is Definite And What Is Indefinite</h2>
        <p>
          In Hungarian, verbs have two forms in the present tense: <strong>definite</strong> and <strong>indefinite</strong>.
          The choice depends on the <strong>object</strong> of the sentence — specifically, whether it's definite or indefinite.
        </p>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> What is an indefinite object?</h3>
        <p>
          An object is <strong>indefinite</strong> when it is not specific or not known to the speaker/listener. Use the
          <strong>indefinite conjugation</strong> in these cases:
        </p>
        <ul>
          <li><strong>With "egy"</strong> (a/an): <em>Olvasok egy könyvet.</em> – I am reading <strong>a book</strong>.</li>
          <li><strong>Without any object</strong>: <em>Eszem.</em> – I am eating. (no object mentioned)</li>
          <li><strong>With plural objects without "the"</strong>: <em>Veszek almákat.</em> – I’m buying <strong>apples</strong>.</li>
          <li><strong>When the object is unknown or general</strong>: <em>Látok valakit.</em> – I see <strong>someone</strong>.</li>
          <li><strong>With "valaki", "valami", "semmi", "senki"</strong> etc.: These are treated as indefinite.</li>
        </ul>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> What is a definite object?</h3>
        <p>
          An object is <strong>definite</strong> when it is clear, specific, or already known. Use the
          <strong>definite conjugation</strong> when:
        </p>
        <ul>
          <li><strong>With "a" or "az"</strong> (the): <em>Olvasom a könyvet.</em> – I’m reading <strong>the book</strong>.</li>
          <li><strong>With proper nouns</strong>: <em>Hívom Pétert.</em> – I’m calling <strong>Péter</strong>.</li>
          <li><strong>With demonstratives</strong>: <em>Látom azt a fiút.</em> – I see <strong>that boy</strong>.</li>
          <li><strong>With personal pronouns as object</strong>: <em>Látom őt.</em> – I see <strong>him/her</strong>.</li>
          <li><strong>With possessive structures</strong>: <em>Eszem az én almámat.</em> – I’m eating <strong>my apple</strong>.</li>
        </ul>

        <h3><FaLightbulb style={{ marginRight: '0.5rem' }} /> Quick test: definite or indefinite?</h3>
        <ul>
          <li>**egy házat** – indefinite (a house)</li>
          <li>**a házat** – definite (the house)</li>
          <li>**valakit** – indefinite (someone)</li>
          <li>**őt** – definite (him/her)</li>
          <li>**Pétert** – definite (proper name)</li>
          <li>**autót** – indefinite (a car, no article)</li>
        </ul>

        <h3><FaLanguage style={{ marginRight: '0.5rem' }} /> Examples with verbs</h3>
        <ul>
          <li>Írok <strong>levelet</strong>. – I’m writing <strong>a letter</strong>. ✅ <em>indefinite</em></li>
          <li>Írom <strong>a levelet</strong>. – I’m writing <strong>the letter</strong>. ✅ <em>definite</em></li>
          <li>Hívok <strong>valakit</strong>. – I’m calling <strong>someone</strong>. ✅ <em>indefinite</em></li>
          <li>Hívom <strong>őt</strong>. – I’m calling <strong>him/her</strong>. ✅ <em>definite</em></li>
        </ul>

      </div>
    </div>
  );
};

export default DefiniteIndefiniteExplanation;
