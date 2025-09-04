import React from 'react';
import '../../CSS/grammarPage.css';
import { FaLightbulb, FaListUl, FaLanguage, FaBookOpen } from 'react-icons/fa';

const SimplePresentExplanation = () => {
  return (
    <div className="grammar-explanation">

      <h2><FaBookOpen /> Grammar Explanation</h2>
      <p>We use the present simple to talk about routines, facts, habits, and general truths.</p>



      <div className="grammar-flex-table">
        {[
          ['Affirmative', 'Negative', 'Question'],
          ['I work', "I do not (don't) work", 'Do I work?'],
          ['You work', "You do not (don't) work", 'Do you work?'],
          ['He works', "He does not (doesn't) work", 'Does he work?'],
          ['She works', "She does not (doesn't) work", 'Does she work?'],
          ['It works', "It does not (doesn't) work", 'Does it work?'],
          ['We work', "We do not (don't) work", 'Do we work?'],
          ['They work', "They do not (don't) work", 'Do they work?'],
        ].map(([affirmative, negative, question], index) => (
          <div
            key={index}
            className={`grammar-flex-row${index === 0 ? ' header' : ''}`}
          >
            <div className="grammar-cell">{affirmative}</div>
            <div className="grammar-cell">{negative}</div>
            <div className="grammar-cell">{question}</div>
          </div>
        ))}
      </div>


      <div className='grammar-explanation-text'>

        <h3><FaLightbulb /> Contractions</h3>
        <p>We often use contractions when speaking or in informal writing.</p>
        <ul>
          <li>I do not like coffee. = <strong>I don't</strong> like coffee.</li>
          <li>He does not play football. = <strong>He doesn't</strong> play football.</li>
          <li>We do not live in London. = <strong>We don't</strong> live in London.</li>
        </ul>

        <h3><FaLightbulb /> Negatives</h3>
        <p>Use <strong>do not</strong> (don't) or <strong>does not</strong> (doesn't) to make negatives in the present simple.</p>
        <ul>
          <li>I don't like tea.</li>
          <li>She doesn't study French.</li>
          <li>They don't go to school on Saturdays.</li>
        </ul>

        <h3><FaListUl /> Questions</h3>
        <p>Use <strong>do</strong> or <strong>does</strong> before the subject to make questions.</p>
        <ul>
          <li>Do you speak English?</li>
          <li>Does he work here?</li>
          <li>Do they have a car?</li>
        </ul>

        <h3><FaLanguage /> Short Answers</h3>
        <ul>
          <li>Yes, I do. / No, I don't.</li>
          <li>Yes, you do. / No, you don't.</li>
          <li>Yes, we do. / No, we don't.</li>
          <li>Yes, they do. / No, they don't.</li>
          <li>Yes, he does. / No, he doesn't.</li>
          <li>Yes, she does. / No, she doesn't.</li>
          <li>Yes, it does. / No, it doesn't.</li>
        </ul>
        <p><em>Note that in short answers, we only use contractions with negative responses.</em></p>

        <h3><FaLanguage /> Questions with Question Words</h3>
        <p>When asking for more information, put the question word before <strong>do</strong> or <strong>does</strong>.</p>
        <ul>
          <li><strong>Where</strong> do you live? – I live in Paris.</li>
          <li><strong>What</strong> does she do? – She's a teacher.</li>
          <li><strong>When</strong> do they arrive? – They arrive at 5 p.m.</li>
          <li><strong>Why</strong> does he study Spanish? – Because he loves it.</li>
        </ul>

      </div>
    </div>
  );
};

export default SimplePresentExplanation;
