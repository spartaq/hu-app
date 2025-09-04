import React from 'react';


import '../../../CSS/grammarPage.css';
import { FaLightbulb, FaListUl, FaLanguage, FaBookOpen } from 'react-icons/fa';


const MultIdoExplanation = () => {
  return (
  
      <div className="grammar-explanation">

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Grammar explanation</h2>
        <p>
          In Hungarian, the <strong>past tense (múlt idő)</strong> is used to describe actions that happened in the past.
          Verbs get special endings to show past time and who did the action.
        </p>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Affirmative | Past (tanul = to study)</h3>
        <div className="grammar-flex-table">
          {[
            [
              'Person',
              'Conjugation',
              'English',
            ],
            ['(Én)', 'tanultam', 'I studied'],
            ['(Te)', 'tanultál', 'You studied'],
            ['(Ő)', 'tanult', 'He/She studied'],
            ['(Mi)', 'tanultunk', 'We studied'],
            ['(Ti)', 'tanultatok', 'You all studied'],
            ['(Ők)', 'tanultak', 'They studied'],
          ].map(([s, v, t], i) => (
            <div key={`past-aff-${i}`} className="grammar-flex-row">
              <div className="grammar-cell subject">{s}</div>
              <div className="grammar-cell verb">{v}</div>
              <div className="grammar-cell translation">{t}</div>
            </div>
          ))}
        </div>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Negative | Past (tanul = to study)</h3>
        <div className="grammar-flex-table">
          {[
            [
              'Person',
              'Conjugation',
              'English',
            ],
            ['(Én)', 'nem tanultam', 'I did not study'],
            ['(Te)', 'nem tanultál', 'You did not study'],
            ['(Ő)', 'nem tanult', 'He/She did not study'],
            ['(Mi)', 'nem tanultunk', 'We did not study'],
            ['(Ti)', 'nem tanultatok', 'You all did not study'],
            ['(Ők)', 'nem tanultak', 'They did not study'],
          ].map(([s, v, t], i) => (
            <div key={`past-neg-${i}`} className="grammar-flex-row">
              <div className="grammar-cell subject">{s}</div>
              <div className="grammar-cell verb">{v}</div>
              <div className="grammar-cell translation">{t}</div>
            </div>
          ))}
        </div>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Question | Past (tanul = to study)</h3>
        <div className="grammar-flex-table">
          {[
            [
              'Person',
              'Conjugation',
              'English',
            ],
            ['(Én)', 'tanultam?', 'Did I study?'],
            ['(Te)', 'tanultál?', 'Did you study?'],
            ['(Ő)', 'tanult?', 'Did he/she study?'],
            ['(Mi)', 'tanultunk?', 'Did we study?'],
            ['(Ti)', 'tanultatok?', 'Did you all study?'],
            ['(Ők)', 'tanultak?', 'Did they study?'],
          ].map(([s, v, t], i) => (
            <div key={`past-q-${i}`} className="grammar-flex-row">
              <div className="grammar-cell subject">{s}</div>
              <div className="grammar-cell verb">{v}</div>
              <div className="grammar-cell translation">{t}</div>
            </div>
          ))}
        </div>

        <h3><FaLightbulb style={{ marginRight: '0.5rem' }} /> Important points</h3>
        <ul>
          <li>Hungarian usually does not need the pronoun (én, te, ő...) because the verb ending shows who did the action.</li>
          <li>Negatives are made by adding <strong>nem</strong> before the verb.</li>
          <li>Questions are made by changing the intonation or adding a question mark — no helping word like "did" is needed.</li>
        </ul>

        <h3><FaLanguage style={{ marginRight: '0.5rem' }} /> Examples</h3>
        <ul>
          <li>Én reggel kávét ittam. (I drank coffee in the morning.)</li>
          <li>Te magyarul tanultál. (You studied Hungarian.)</li>
          <li>Ő Budapesten élt. (He/She lived in Budapest.)</li>
          <li>Mi minden nap sportoltunk. (We exercised every day.)</li>
          <li>Ők a parkban sétáltak. (They walked in the park.)</li>
        </ul>


      </div>
    
  );
};

export default MultIdoExplanation;
