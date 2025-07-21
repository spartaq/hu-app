import React from 'react';
import { Link } from 'react-router-dom';
import '../../../CSS/grammarPage.css';
import { FaLightbulb, FaListUl, FaLanguage, FaBookOpen } from 'react-icons/fa';

const JelenIdoindefExplanation = () => {
  return (
    <div>
      <div className="grammar-explanation">

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Grammar Explanation</h2>
        <p>In Hungarian, the <strong>present tense (jelen idő)</strong> is used to talk about actions happening now, habits, and general facts. Verbs change their endings depending on the subject and whether the object is definite or indefinite.</p>
        <p><em>*The Hungarian present corresponds to the simple present, present continuous, present perfect and future tenses in English.</em></p>

        <h3><FaLightbulb style={{ marginRight: '0.5rem' }} /> Indefinite and Definite Conjugation</h3>
        <p>Hungarian has two types of conjugation:</p>
        <ul>
          <li><strong>Indefinite conjugation</strong> — when the object is general or not mentioned. (Example: "I read every day." / "Minden nap olvasok.")</li>
          <li><strong>Definite conjugation</strong> — when the object is specific and known. (Example: "I read the book." / "Olvasom a könyvet.")</li>
        </ul>
        <p>This page contains exercises for the <strong>definite</strong> form of the present tense. See the indefinite form here <Link to="/hungarian/jelenidodef">indefinite</Link>.</p>
        <p>See a more detailed exaplanation of the differences between the definite and the indefinite mode <Link to="/hungarian/defIndefExplanation">here</Link>.</p>
        <p>Use the <Link to="/hungarian/verbconjugationtable">verb conjugator</Link> to learn new conjugations.</p>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Affirmative | Indefinite (tanul = to study)</h3>
        <div className="grammar-flex-table">
          {[
            [
              'Person',
              'Conjugation',
              'English',
            ],
            ['(Én)', 'tanulok', 'I study'],
            ['(Te)', 'tanulsz', 'You study'],
            ['(Ő)', 'tanul', 'He/She studies'],
            ['(Mi)', 'tanulunk', 'We study'],
            ['(Ti)', 'tanultok', 'You all study'],
            ['(Ők)', 'tanulnak', 'They study'],
          ].map(([s, v, t], i) => (
            <div key={`present-aff-${i}`} className="grammar-flex-row">
              <div className="grammar-cell">{s}</div>
              <div className="grammar-cell">{v}</div>
              <div className="grammar-cell">{t}</div>
            </div>
          ))}
        </div>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Negative | Indefinite</h3>
        <div className="grammar-flex-table">
          {[
            [
              'Person',
              'Conjugation',
              'English',
            ],
            ['(Én)', 'nem tanulok', 'I do not study'],
            ['(Te)', 'nem tanulsz', 'You do not study'],
            ['(Ő)', 'nem tanul', 'He/She does not study'],
            ['(Mi)', 'nem tanulunk', 'We do not study'],
            ['(Ti)', 'nem tanultok', 'You all do not study'],
            ['(Ők)', 'nem tanulnak', 'They do not study'],
          ].map(([s, v, t], i) => (
            <div key={`present-neg-${i}`} className="grammar-flex-row">
              <div className="grammar-cell">{s}</div>
              <div className="grammar-cell">{v}</div>
              <div className="grammar-cell">{t}</div>
            </div>
          ))}
        </div>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Question | Indefinite</h3>
        <div className="grammar-flex-table">
          {[
            [
              'Person',
              'Conjugation',
              'English',
            ],
            ['(Én)', 'tanulok?', 'Do I study?'],
            ['(Te)', 'tanulsz?', 'Do you study?'],
            ['(Ő)', 'tanul?', 'Does he/she study?'],
            ['(Mi)', 'tanulunk?', 'Do we study?'],
            ['(Ti)', 'tanultok?', 'Do you all study?'],
            ['(Ők)', 'tanulnak?', 'Do they study?'],
          ].map(([s, v, t], i) => (
            <div key={`present-q-${i}`} className="grammar-flex-row">
              <div className="grammar-cell">{s}</div>
              <div className="grammar-cell">{v}</div>
              <div className="grammar-cell">{t}</div>
            </div>
          ))}
        </div>

        <h3><FaLanguage style={{ marginRight: '0.5rem' }} /> Examples</h3>
        <ul>
          <li>Én tanulok. - I study (general).</li>
          <li>Én tanulom a leckét. - I study the lesson (specific object).</li>
          <li>Mi tanulunk minden nap. - We study every day.</li>
          <li>Mi tanuljuk az új szavakat. - We study the new words.</li>
        </ul>

        <h3><FaLightbulb style={{ marginRight: '0.5rem' }} /> Important Points</h3>
        <ul>
          <li><strong>Indefinite:</strong> use when the object is not mentioned or is general.</li>
          <li><strong>Definite:</strong> use when the object is specific or definite (e.g., <em>a könyvet</em>, <em>az új leckét</em>).</li>
          <li>Negatives are made by adding <strong>nem</strong> before the verb.</li>
          <li>Questions are formed with intonation or a question mark — no auxiliary verb like "do/does" is needed.</li>
        </ul>

      </div>
    </div>
  );
};

export default JelenIdoindefExplanation;
