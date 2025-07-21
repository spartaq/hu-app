import React from 'react';
import { Link } from 'react-router-dom';
import '../../../CSS/grammarPage.css';
import { FaLightbulb, FaListUl, FaLanguage, FaBookOpen } from 'react-icons/fa';

const JelenIdodefExplanation = () => {
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
        <p>This page contains exercises for the <strong>definite</strong> form of the present tense. See the indefinite form here <Link to="/hungarian/jelenidoindef">indefinite</Link>.</p>
        <p>See a more detailed exaplanation of the differences between the definite and the indefinite mode <Link to="/hungarian/defIndefExplanation">here</Link>.</p>
        <p>Use the <Link to="/hungarian/verbconjugationtable">verb conjugator</Link> to learn new conjugations.</p>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Affirmative | Definite (tanul = to study)</h3>
        <div className="grammar-flex-table">
          {[
            [
              'Person',
              'Conjugation',
              'English',
            ],
            ['(Én)', 'tanulom', 'I study it'],
            ['(Te)', 'tanulod', 'You study it'],
            ['(Ő)', 'tanulja', 'He/She studies it'],
            ['(Mi)', 'tanuljuk', 'We study it'],
            ['(Ti)', 'tanuljátok', 'You all study it'],
            ['(Ők)', 'tanulják', 'They study it'],
          ].map(([s, v, t], i) => (
            <div key={`present-aff-def-${i}`} className="grammar-flex-row">
              <div className="grammar-cell">{s}</div>
              <div className="grammar-cell">{v}</div>
              <div className="grammar-cell">{t}</div>
            </div>
          ))}
        </div>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Negative | Definite</h3>
        <div className="grammar-flex-table">
          {[
            [
              'Person',
              'Conjugation',
              'English',
            ],
            ['(Én)', 'nem tanulom', 'I do not study it'],
            ['(Te)', 'nem tanulod', 'You do not study it'],
            ['(Ő)', 'nem tanulja', 'He/She does not study it'],
            ['(Mi)', 'nem tanuljuk', 'We do not study it'],
            ['(Ti)', 'nem tanuljátok', 'You all do not study it'],
            ['(Ők)', 'nem tanulják', 'They do not study it'],
          ].map(([s, v, t], i) => (
            <div key={`present-neg-def-${i}`} className="grammar-flex-row">
              <div className="grammar-cell">{s}</div>
              <div className="grammar-cell">{v}</div>
              <div className="grammar-cell">{t}</div>
            </div>
          ))}
        </div>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Question | Definite</h3>
        <div className="grammar-flex-table">
          {[
            [
              'Person',
              'Conjugation',
              'English',
            ],
            ['(Én)', 'tanulom?', 'Do I study it?'],
            ['(Te)', 'tanulod?', 'Do you study it?'],
            ['(Ő)', 'tanulja?', 'Does he/she study it?'],
            ['(Mi)', 'tanuljuk?', 'Do we study it?'],
            ['(Ti)', 'tanuljátok?', 'Do you all study it?'],
            ['(Ők)', 'tanulják?', 'Do they study it?'],
          ].map(([s, v, t], i) => (
            <div key={`present-q-def-${i}`} className="grammar-flex-row">
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

export default JelenIdodefExplanation;
