import React from 'react';
import '../../CSS/grammarPage.css';
import { FaLightbulb, FaListUl, FaLanguage, FaBookOpen } from 'react-icons/fa';

const TobepastExplanation = () => {
  return (
    <div className="grammar-explanation">

      <h2><FaBookOpen /> Grammar Explanation</h2>
      <p>We can use the past simple of the verb <strong>to be</strong> to talk about situations and states in the past.</p>

<<<<<<< HEAD
<div>
                            <div className="agendagrammar">
                            
                            <div className="grammartext">
  <h2>Grammar explanation</h2>
  <p>We can use the past simple of the verb <strong>to be</strong> to talk about situations and states in the past.</p>

  <h3>Affirmative | Negative | Question</h3>
  <table className="grammartable" border="1" cellpadding="5">
    <tr><th>Affirmative</th><th>Negative</th><th>Question</th></tr>
    <tr>
      <td>
        <ul> 
          <li>I was</li>
          <li>You were</li>
          <li>He was</li>
          <li>She was</li>
          <li>It was</li>
          <li>We were</li>
          <li>They were</li>
        </ul>
      </td>
      <td>
        <ul> 
          <li>I was not (wasn't)</li>
          <li>You were not (weren't)</li>
          <li>He was not (wasn't)</li>
          <li>She was not (wasn't)</li>
          <li>It was not (wasn't)</li>
          <li>We were not (weren't)</li>
          <li>They were not (weren't)</li>
        </ul>
      </td>
      <td>
        <ul> 
          <li>Was I?</li>
          <li>Were you?</li>
          <li>Was he?</li>
          <li>Was she?</li>
          <li>Was it?</li>
          <li>Were we?</li>
          <li>Were they?</li>
        </ul>
      </td>
    </tr>
  </table>

  <h3>Contractions</h3>
  <p>We often contract the verb, especially when we're speaking.</p>
  <ul>
    <li>I was at home. = <strong>I was</strong> (no special contraction for positive "was")</li>
    <li>You were tired. = <strong>You were</strong> (no special contraction for positive "were")</li>
  </ul>
  <p><em>Note: In affirmative sentences, "was" and "were" are usually not contracted separately. Contractions happen more often in negatives.</em></p>

  <h3>Negatives</h3>
  <p>For negatives, add <strong>not</strong> after <strong>was</strong> or <strong>were</strong>. We can use contractions.</p>
  <ul>
    <li>I was not at home. = <strong>I wasn't</strong> at home.</li>
    <li>She was not ready. = <strong>She wasn't</strong> ready.</li>
    <li>It was not easy. = <strong>It wasn't</strong> easy.</li>
    <li>We were not late. = <strong>We weren't</strong> late.</li>
    <li>They were not happy. = <strong>They weren't</strong> happy.</li>
  </ul>

  <h3>Questions</h3>
  <p>For questions, change the order of <strong>was</strong> or <strong>were</strong> and the person.</p>
  <ul>
    <li>Were you tired?</li>
    <li>Was she at school?</li>
    <li>Was it cold yesterday?</li>
    <li>Were we on time?</li>
    <li>Were they at the party?</li>
  </ul>

  <h3>Short answers</h3>
  <ul>
    <li>Yes, I was. / No, I wasn't.</li>
    <li>Yes, you were. / No, you weren't.</li>
    <li>Yes, we were. / No, we weren't.</li>
    <li>Yes, they were. / No, they weren't.</li>
    <li>Yes, he was. / No, he wasn't.</li>
    <li>Yes, she was. / No, she wasn't.</li>
    <li>Yes, it was. / No, it wasn't.</li>
  </ul>

  <p><em>Note that with short answers, contractions are only used in negative replies.</em></p>

  <h3>Questions with question words</h3>
  <p>We can also make questions by using a question word like <strong>where</strong>, <strong>when</strong>, <strong>who</strong> or <strong>what</strong>. We put the question word at the beginning.</p>
  <ul>
    <li><strong>Where</strong> were you yesterday? – I was at home.</li>
    <li><strong>When</strong> was the party? – It was last night.</li>
    <li><strong>Who</strong> was at the meeting? – John and Sarah were there.</li>
    <li><strong>What time</strong> was it? – It was five o'clock.</li>
  </ul>
</div>

=======
      <div className="grammar-flex-table">
  {[
    ['Affirmative', 'Negative', 'Question'],
    ['I was', "I was not (wasn't)", 'Was I?'],
    ['You were', "You were not (weren't)", 'Were you?'],
    ['He was', "He was not (wasn't)", 'Was he?'],
    ['She was', "She was not (wasn't)", 'Was she?'],
    ['It was', "It was not (wasn't)", 'Was it?'],
    ['We were', "We were not (weren't)", 'Were we?'],
    ['They were', "They were not (weren't)", 'Were they?'],
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
      <p>We often contract the verb, especially when we're speaking.</p>
      <ul>
        <li>I was at home. = <strong>I was</strong> (no special contraction for positive "was")</li>
        <li>You were tired. = <strong>You were</strong> (no special contraction for positive "were")</li>
      </ul>
      <p><em>Note: In affirmative sentences, "was" and "were" are usually not contracted separately. Contractions happen more often in negatives.</em></p>

      <h3><FaLightbulb /> Negatives</h3>
      <p>For negatives, add <strong>not</strong> after <strong>was</strong> or <strong>were</strong>. We can use contractions.</p>
      <ul>
        <li>I was not at home. = <strong>I wasn't</strong> at home.</li>
        <li>She was not ready. = <strong>She wasn't</strong> ready.</li>
        <li>It was not easy. = <strong>It wasn't</strong> easy.</li>
        <li>We were not late. = <strong>We weren't</strong> late.</li>
        <li>They were not happy. = <strong>They weren't</strong> happy.</li>
      </ul>

      <h3><FaListUl /> Questions</h3>
      <p>For questions, change the order of <strong>was</strong> or <strong>were</strong> and the person.</p>
      <ul>
        <li>Were you tired?</li>
        <li>Was she at school?</li>
        <li>Was it cold yesterday?</li>
        <li>Were we on time?</li>
        <li>Were they at the party?</li>
      </ul>
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c

      <h3><FaLanguage /> Short Answers</h3>
      <ul>
        <li>Yes, I was. / No, I wasn't.</li>
        <li>Yes, you were. / No, you weren't.</li>
        <li>Yes, we were. / No, we weren't.</li>
        <li>Yes, they were. / No, they weren't.</li>
        <li>Yes, he was. / No, he wasn't.</li>
        <li>Yes, she was. / No, she wasn't.</li>
        <li>Yes, it was. / No, it wasn't.</li>
      </ul>
      <p><em>Note that with short answers, contractions are only used in negative replies.</em></p>

      <h3><FaLanguage /> Questions with Question Words</h3>
      <p>We can also make questions by using a question word like <strong>where</strong>, <strong>when</strong>, <strong>who</strong> or <strong>what</strong>. We put the question word at the beginning.</p>
      <ul>
        <li><strong>Where</strong> were you yesterday? – I was at home.</li>
        <li><strong>When</strong> was the party? – It was last night.</li>
        <li><strong>Who</strong> was at the meeting? – John and Sarah were there.</li>
        <li><strong>What time</strong> was it? – It was five o'clock.</li>
      </ul>
      </div>
    
    </div>
  );
};

export default TobepastExplanation;
