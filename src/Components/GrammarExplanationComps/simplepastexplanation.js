import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaQuestionCircle, FaLightbulb } from 'react-icons/fa';

const SimplepastExplanation = () => {
  return (
    <div className="grammar-explanation">
      <h2><FaBookOpen /> Past Simple Grammar Explanation</h2>

      <p>We use the past simple to talk about completed actions, events, and situations in the past.</p>

<div>
         <div className="agendagrammar">
      <div className="example-block">
        <h3>Affirmative | Negative | Question</h3>

<div className="grammar-flex-table">
  {[
    ['Affirmative', 'Negative', 'Question'],
    ['I worked', "I did not (didn't) work", 'Did I work?'],
    [
      'You worked',
      "You did not (didn't) work",
      'Did you work?',
    ],
    [
      'He worked',
      "He did not (didn't) work",
      'Did he work?',
    ],
    [
      'She worked',
      "She did not (didn't) work",
      'Did she work?',
    ],
    [
      'It worked',
      "It did not (didn't) work",
      'Did it work?',
    ],
    [
      'We worked',
      "We did not (didn't) work",
      'Did we work?',
    ],
    [
      'They worked',
      "They did not (didn't) work",
      'Did they work?',
    ],
  ].map((row, index) => (
    <div key={index} className={`grammar-flex-row${index === 0 ? ' header' : ''}`}>
      {row.map((cell, i) => (
        <div key={i} className="grammar-cell" dangerouslySetInnerHTML={{ __html: cell }} />
      ))}
    </div>
  ))}
</div>
      </div>

      <div className="example-block">
        <h3>Regular and irregular verbs</h3>
        <p>Most verbs are regular: add <strong>-ed</strong> to the base form.</p>
        <ul>
          <li>work → worked</li>
          <li>play → played</li>
          <li>live → lived</li>
        </ul>
        <p>Some verbs are irregular: the past form is different and must be memorized.</p>
        <ul>
          <li>go → went</li>
          <li>have → had</li>
          <li>see → saw</li>
          <li>buy → bought</li>
        </ul>
      </div>

      <div className="example-block">
        <h3>Contractions</h3>
        <p>We usually contract <strong>did not</strong> to <strong>didn't</strong> when speaking or in informal writing.</p>
        <ul>
          <li>I did not see him. = <strong>I didn't</strong> see him.</li>
          <li>She did not like the movie. = <strong>She didn't</strong> like the movie.</li>
          <li>They did not come yesterday. = <strong>They didn't</strong> come yesterday.</li>
        </ul>
      </div>

      <div className="example-block">
        <h3>Negatives</h3>
        <p>Use <strong>did not</strong> (didn't) + base form of the verb for negatives.</p>
        <ul>
          <li>He didn't finish his homework.</li>
          <li>We didn't go to the party.</li>
          <li>I didn't understand the question.</li>
        </ul>
      </div>

      <div className="example-block">
        <h3>Questions</h3>
        <p>Use <strong>Did</strong> + subject + base form of the verb to make questions.</p>
        <ul>
          <li>Did you watch the game?</li>
          <li>Did she call you?</li>
          <li>Did they arrive on time?</li>
        </ul>
      </div>

      <div className="example-block">
        <h3>Short answers</h3>
        <ul>
          <li>Yes, I did. / No, I didn't.</li>
          <li>Yes, you did. / No, you didn't.</li>
          <li>Yes, we did. / No, we didn't.</li>
          <li>Yes, they did. / No, they didn't.</li>
          <li>Yes, he did. / No, he didn't.</li>
          <li>Yes, she did. / No, she didn't.</li>
          <li>Yes, it did. / No, it didn't.</li>
        </ul>
        <p><em>Note that we only use contractions with negative short answers.</em></p>
      </div>

      <div className="example-block">
        <h3><FaQuestionCircle /> Questions with question words</h3>
        <p>Use a question word before <strong>did</strong> to ask for more information.</p>
        <ul>
          <li><strong>Where</strong> did you go? – I went to the mall.</li>
          <li><strong>When</strong> did they arrive? – They arrived yesterday.</li>
          <li><strong>Why</strong> did she leave early? – Because she was tired.</li>
          <li><strong>What</strong> did he say? – He said hello.</li>
        </ul>
      </div>
    </div></div></div>
  );
};

export default SimplepastExplanation;
