import React from 'react';
import '../../../CSS/grammarPage.css';
import { FaBookOpen, FaListUl, FaLightbulb, FaLanguage } from 'react-icons/fa';

const NevmasExplanation = () => {
  return (
    <div>
      <div className="grammar-explanation">

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Grammar explanation</h2>
        <p>
          In Hungarian, subject pronouns (I, you, he/she, etc.) are used like in English, but they are often left out —
          because the verb ending already shows who the subject is.
        </p>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Hungarian Subject Pronouns</h3>

        <h3><FaLanguage style={{ marginRight: '0.5rem' }} /> English - Hungarian Pronouns with Examples</h3>
        <div className="grammar-flex-table">
          {[
            [
              'Person',
              'Conjugation',
              'English',
            ],
            ['I', '(Én)', 'tanulok. - I study.'],
            ['You (singular)', '(Te)', 'eszel. - You eat.'],
            ['He / She / It', '(Ő)', 'alszik. - He/She sleeps.'],
            ['We', '(Mi)', 'futunk. - We run.'],
            ['You (plural)', '(Ti)', 'írtok. - You all write.'],
            ['They', '(Ők)', 'olvasnak. - They read.'],
          ].map(([english, hungarian, example], index) => (
            <div key={`pronoun-${index}`} className="grammar-flex-row">
              <div className="grammar-cell subject">{english}</div>
              <div className="grammar-cell">{hungarian}</div>
              <div className="grammar-cell">{example}</div>
            </div>
          ))}
        </div>

        <h3><FaLightbulb style={{ marginRight: '0.5rem' }} /> Important notes</h3>
        <ul>
          <li>Hungarian is a <strong>“pro-drop”</strong> language — you can drop (leave out) the subject pronoun.</li>
          <li>The verb ending tells you who the subject is, so <strong>tanulok</strong> already means “I study.”</li>
          <li>Pronouns are usually only used for emphasis or clarity.</li>
        </ul>

        <h3><FaLanguage style={{ marginRight: '0.5rem' }} /> Examples</h3>
        <ul>
          <li><strong>Én</strong> főzök. - I am the one who is cooking (emphasized).</li>
          <li><strong>Ők</strong> mennek moziba. - They are going to the cinema.</li>
          <li>Beszélsz magyarul? - Do you speak Hungarian?</li>
          <li>Tanulunk minden nap. - We study every day.</li>
        </ul>

      </div>
    </div>
  );
};

export default NevmasExplanation;
