import React from 'react';
import { Link } from 'react-router-dom';
import '../../../CSS/grammarPage.css';
import { FaLightbulb, FaListUl, FaLanguage, FaBookOpen } from 'react-icons/fa';

const JovoExplanation = () => {
  return (
    <div>
      <div className="grammar-explanation">

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Grammar Explanation</h2>
        <p>In Hungarian, there are two main ways to talk about the <strong>future tense</strong>:</p>
        <ul>
          <li>Using the verb <strong>fog</strong> + the infinitive of the verb.</li>
          <li>Using the <strong>present tense</strong> when the time of the action is obvious (e.g., “tomorrow”).</li>
        </ul>

        <h3><FaLightbulb style={{ marginRight: '0.5rem' }} /> Future Tense with <em>fog + infinitive</em></h3>
        <p>This is the most common and clearest way to express the future in Hungarian.</p>

        <div className="grammar-flex-table">
          {[
            [
              'Person',
              'Conjugation',
              'English',
            ],
            ['(Én)', 'fogok tanulni', 'I will study'],
            ['(Te)', 'fogsz enni', 'You will eat'],
            ['(Ő)', 'fog aludni', 'He/She will sleep'],
            ['(Mi)', 'fogunk utazni', 'We will travel'],
            ['(Ti)', 'fogtok dolgozni', 'You all will work'],
            ['(Ők)', 'fognak írni', 'They will write'],
          ].map(([s, v, t], i) => (
            <div key={`future-${i}`} className="grammar-flex-row">
              <div className="grammar-cell">{s}</div>
              <div className="grammar-cell">{v}</div>
              <div className="grammar-cell">{t}</div>
            </div>
          ))}
        </div>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Using Present for Future</h3>
        <p>You can also use the present tense if the sentence clearly refers to the future:</p>
        <ul>
          <li><strong>Holnap utazom</strong> Pestre. - I'm traveling to Budapest tomorrow.</li>
          <li><strong>Este találkozunk</strong>. - We'll meet in the evening.</li>
        </ul>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Negatives and Questions</h3>
        <ul>
          <li><strong>Negatives:</strong> Add <strong>nem</strong> before <strong>fog</strong>. (e.g. Én <strong>nem fogok enni</strong>. - I will not eat.)</li>
          <li><strong>Questions:</strong> Use a question mark or rising intonation. (e.g. <strong>Fogsz jönni?</strong> - Will you come?)</li>
        </ul>

        <h3><FaLightbulb style={{ marginRight: '0.5rem' }} /> Quick Tips</h3>
        <ul>
          <li><strong>Fog + infinitive</strong> = will do something</li>
          <li><strong>Nem fog</strong> = won’t</li>
          <li>You can often omit the subject (Én, Te…) if it's obvious from the verb ending.</li>
        </ul>

        <h3><FaLanguage style={{ marginRight: '0.5rem' }} /> More Examples</h3>
        <ul>
          <li>Holnap <strong>fogok futni</strong>. - I will run tomorrow.</li>
          <li>Mi <strong>nem fogunk beszélni</strong>. - We won’t speak.</li>
          <li><strong>Fogtok tanulni?</strong> - Will you study?</li>
          <li><strong>Ők fognak segíteni</strong>. - They will help.</li>
        </ul>

        <p>Use the <Link to="/hungarian/verbconjugationtable">verb conjugator</Link> to learn more.</p>

      </div>
    </div>
  );
};

export default JovoExplanation;
