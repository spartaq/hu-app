import React from 'react';
import '../../CSS/grammarPage.css';
import { FaLightbulb, FaListUl, FaLanguage, FaBookOpen } from 'react-icons/fa';

const TobepresExplanation = () => {
  return (
    <div className="grammar-explanation">

      <h2><FaBookOpen /> Grammar Explanation</h2>
      <p>
        We can use the present simple of the verb <strong>to be</strong> to talk about situations and states in the present.
      </p>

      <div className="grammar-flex-table">
        {[
          ['Affirmative', 'Negative', 'Question'],
          ['I am', 'I am not', 'Am I?'],
          ['You are', 'You are not', 'Are you?'],
          ['He is', 'He is not', 'Is he?'],
          ['She is', 'She is not', 'Is she?'],
          ['It is', 'It is not', 'Is it?'],
          ['We are', 'We are not', 'Are we?'],
          ['They are', 'They are not', 'Are they?'],
        ].map(([affirmative, negative, question], index) => (
          <div key={index} className={`grammar-flex-row${index === 0 ? ' header' : ''}`}>
            <div className="grammar-cell">{affirmative}</div>
            <div className="grammar-cell">{negative}</div>
            <div className="grammar-cell">{question}</div>
          </div>
        ))}
      </div>

      <div className="grammar-explanation-text">
        <h3><FaLightbulb /> Contractions</h3>
        <p>We can contract the verb, especially when we're speaking.</p>
        <ul>
          <li>I am a shop assistant. = <strong>I'm</strong> a shop assistant.</li>
          <li>You are a good friend! = <strong>You're</strong> a good friend!</li>
          <li>He is my wife's brother. = <strong>He's</strong> my wife's brother.</li>
          <li>We are very busy at the moment. = <strong>We're</strong> very busy at the moment.</li>
          <li>They are on holiday in Italy. = <strong>They're</strong> on holiday in Italy.</li>
        </ul>

        <h3><FaLightbulb /> Negatives</h3>
        <p>For negatives, use <strong>not</strong> after the verb. We can contract the verb or not.</p>
        <ul>
          <li>I am not at work. = <strong>I'm not</strong> at work. <em>Note: "I amn't" is not possible.</em></li>
          <li>She is not a student. = <strong>She's not</strong> a student. = <strong>She isn't</strong> a student.</li>
          <li>Money is not important. = <strong>Money's not</strong> important. = <strong>Money isn't</strong> important.</li>
          <li>We are not hungry. = <strong>We're not</strong> hungry. = <strong>We aren't</strong> hungry.</li>
          <li>They are not at home. = <strong>They're not</strong> at home. = <strong>They aren't</strong> at home.</li>
        </ul>

        <h3><FaListUl /> Questions</h3>
        <p>For questions, change the order of <strong>am</strong>, <strong>is</strong> or <strong>are</strong> and the person.</p>
        <ul>
          <li>Are you tired?</li>
          <li>Is she Mexican?</li>
          <li>Is this your phone?</li>
          <li>Are we late?</li>
          <li>Are they your children?</li>
        </ul>

        <h3><FaLanguage /> Short Answers</h3>
        <ul>
          <li>Yes, I am. / No, I'm not.</li>
          <li>Yes, you are. / No, you're not.</li>
          <li>Yes, we are. / No, we're not.</li>
          <li>Yes, they are. / No, they're not.</li>
          <li>Yes, he is. / No, he's not.</li>
          <li>Yes, she is. / No, she's not.</li>
          <li>Yes, it is. / No, it's not.</li>
        </ul>
        <p><em>Note that with short answers, contractions are only used in negative replies.</em></p>

        <h3><FaLanguage /> Questions with Question Words</h3>
        <p>
          We can also make questions by using a question word like <strong>where</strong>, <strong>when</strong>, <strong>who</strong> or <strong>what</strong>. We put the question word at the beginning.
        </p>
        <ul>
          <li><strong>Where</strong> are you from? – I'm from Brazil.</li>
          <li><strong>When</strong> is the meeting? – It's next Tuesday.</li>
          <li><strong>Who's</strong> she? – She's my sister.</li>
          <li><strong>What time</strong> is it? – It's six o'clock.</li>
        </ul>
      </div>
    </div>
  );
};

export default TobepresExplanation;
