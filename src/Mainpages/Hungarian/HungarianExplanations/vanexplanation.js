import React from 'react';
import '../../../CSS/grammarPage.css';
import { FaBookOpen, FaListUl, FaLightbulb } from 'react-icons/fa';

const VanExplanation = () => {
  return (
    <div>
      <div className="grammar-explanation">

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Grammar explanation</h2>
        <p>
          In Hungarian, the concept of <strong>“to be”</strong> is expressed using a special verb: <strong>van</strong>. This does not follow regular verb patterns and must be learned on its own.
        </p>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Van = to be (existence, identity, location)</h3>
        <p>
          The verb <strong>van</strong> is used to say where someone or something is, or to describe someone's identity or state. It changes form depending on the subject.
        </p>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Verb "to be" (lenni) — Affirmative, Negative, Question</h3>
        <div className="grammar-flex-table">
          {[
            [
              'Affirmative',
              'Negative',
              'Question',
            ],
            [
              '(Én) vagyok tanár. (I am a teacher.)',
              '(Én) nem vagyok fáradt. (I am not tired.)',
              'Vagyok tanár? (Am I a teacher?)',
            ],
            [
              '(Te) vagy otthon. (You are at home.)',
              '(Te) nem vagy itt. (You are not here.)',
              'Vagy otthon? (Are you at home?)',
            ],
            [
              '(Ő) van a boltban. (He/She is in the shop.)',
              '(Ő) nincs otthon. (He/She is not at home.)',
              'Van a boltban? (Is he/she in the shop?)',
            ],
            [
              '(Mi) vagyunk itt. (We are here.)',
              '(Mi) nem vagyunk ott. (We are not there.)',
              '', // No question form provided
            ],
            [
              '(Ti) vagytok diákok. (You all are students.)',
              '(Ti) nem vagytok tanárok. (You all are not teachers.)',
              'Vagytok itt? (Are you all here?)',
            ],
            [
              '(Ők) vannak az iskolában. (They are at school.)',
              '(Ők) nincsenek a házban. (They are not in the house.)',
              'Vannak az iskolában? (Are they in the school?)',
            ],
          ].map(([affirmative, negative, question], index) => (
            <div key={`van-${index}`} className="grammar-flex-row">
              <div className="grammar-cell">{affirmative}</div>
              <div className="grammar-cell">{negative}</div>
              <div className="grammar-cell">{question}</div>
            </div>
          ))}
        </div>

        <h3><FaLightbulb style={{ marginRight: '0.5rem' }} /> Important points</h3>
        <ul>
          <li><strong>Van</strong> is irregular and essential for basic communication.</li>
          <li>The word <strong>nincs</strong> means “there is not” and replaces both <strong>van</strong> and <strong>nem</strong>.</li>
          <li>
            In the third person, both singular and plural, <strong>van</strong> and <strong>vannak</strong> disappear in simple descriptive sentences:
            <ul>
              <li>Ő tanár. (He/She is a teacher.) — no <strong>van</strong></li>
              <li>Ők diákok. (They are students.) — no <strong>vannak</strong></li>
            </ul>
          </li>
        </ul>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Examples</h3>
        <ul>
          <li>Ő Budapesten <strong>van</strong>. (He/She is in Budapest.)</li>
          <li>Mi <strong>nem vagyunk</strong> fáradtak. (We are not tired.)</li>
          <li>Ti <strong>vagytok</strong> az új diákok? (Are you the new students?)</li>
        </ul>

      </div>
    </div>
  );
};

export default VanExplanation;
