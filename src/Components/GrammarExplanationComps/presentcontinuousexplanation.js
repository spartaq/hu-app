import React from 'react';

const PresentcontinuousExplanation = () => {
  return (
    <div>
      <div>
        <div className="agendagrammar">
          <div className="grammartext">
            <h2>Grammar explanation</h2>
            <p>
              We use the present continuous (am/is/are + verb + -ing) to talk about
              actions happening now or around now, and for future plans.
            </p>

            <h3>Affirmative | Negative | Question</h3>
            <div className="grammar-flex-table">
              {[
                ['Affirmative', 'Negative', 'Question'],
                ['I am working', "I am not working", 'Am I working?'],
                ['You are working', "You are not working", 'Are you working?'],
                ['He is working', "He is not working", 'Is he working?'],
                ['She is working', "She is not working", 'Is she working?'],
                ['It is working', "It is not working", 'Is it working?'],
                ['We are working', "We are not working", 'Are we working?'],
                ['They are working', "They are not working", 'Are they working?'],
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

<<<<<<< HEAD
<div>
                            <div className="agendagrammar">
                            
                            <div className="grammartext">
  <h2>Grammar explanation</h2>
  <p>We use the present continuous (am/is/are + verb + -ing) to talk about actions happening now or around now, and for future plans.</p>

  <h3>Affirmative | Negative | Question</h3>
  <table className="grammartable" border="1" cellpadding="5">
    <tr><th>Affirmative</th><th>Negative</th><th>Question</th></tr>
    <tr>
      <td>
        <ul> 
          <li>I am working</li>
          <li>You are working</li>
          <li>He is working</li>
          <li>She is working</li>
          <li>It is working</li>
          <li>We are working</li>
          <li>They are working</li>
        </ul>
      </td>
      <td>
        <ul> 
          <li>I am not working</li>
          <li>You are not working</li>
          <li>He is not working</li>
          <li>She is not working</li>
          <li>It is not working</li>
          <li>We are not working</li>
          <li>They are not working</li>
        </ul>
      </td>
      <td>
        <ul> 
          <li>Am I working?</li>
          <li>Are you working?</li>
          <li>Is he working?</li>
          <li>Is she working?</li>
          <li>Is it working?</li>
          <li>Are we working?</li>
          <li>Are they working?</li>
        </ul>
      </td>
    </tr>
  </table>

  <h3>Contractions</h3>
  <p>We can contract the subject and verb, especially when speaking.</p>
  <ul>
    <li>I am studying. = <strong>I'm studying.</strong></li>
    <li>You are cooking. = <strong>You're cooking.</strong></li>
    <li>He is playing football. = <strong>He's playing football.</strong></li>
    <li>We are waiting. = <strong>We're waiting.</strong></li>
    <li>They are watching TV. = <strong>They're watching TV.</strong></li>
  </ul>

  <h3>Negatives</h3>
  <p>For negatives, use <strong>not</strong> after am, is, or are. We can contract the verb or not.</p>
  <ul>
    <li>I am not working. = <strong>I'm not working.</strong></li>
    <li>She is not coming. = <strong>She's not coming.</strong> = <strong>She isn't coming.</strong></li>
    <li>It is not raining. = <strong>It's not raining.</strong> = <strong>It isn't raining.</strong></li>
    <li>We are not leaving yet. = <strong>We're not leaving yet.</strong> = <strong>We aren't leaving yet.</strong></li>
    <li>They are not listening. = <strong>They're not listening.</strong> = <strong>They aren't listening.</strong></li>
  </ul>

  <h3>Questions</h3>
  <p>For questions, change the order of am, is, or are and the person.</p>
  <ul>
    <li>Are you coming?</li>
    <li>Is she sleeping?</li>
    <li>Is it working?</li>
    <li>Are we meeting now?</li>
    <li>Are they studying English?</li>
  </ul>

  <h3>Short answers</h3>
  <ul>
    <li>Yes, I am. / No, I'm not.</li>
    <li>Yes, you are. / No, you're not.</li>
    <li>Yes, we are. / No, we're not.</li>
    <li>Yes, they are. / No, they're not.</li>
    <li>Yes, he is. / No, he's not.</li>
    <li>Yes, she is. / No, she's not.</li>
    <li>Yes, it is. / No, it's not.</li>
  </ul>

  <p><em>Note that with short answers, contractions are only used with negative replies.</em></p>

  <h3>Questions with question words</h3>
  <p>We can also make questions by using a question word like <strong>where</strong>, <strong>what</strong>, <strong>who</strong>, or <strong>why</strong>. We put the question word at the beginning.</p>
  <ul>
    <li><strong>What</strong> are you doing? – I'm studying.</li>
    <li><strong>Where</strong> is she going? – She's going to the shops.</li>
    <li><strong>Who</strong> are they talking to? – They're talking to the manager.</li>
    <li><strong>Why</strong> are we waiting? – Because the bus is late.</li>
  </ul>
</div>

=======
            <h3>Contractions</h3>
            <p>We can contract the subject and verb, especially when speaking.</p>
            <div className="grammar-flex-table">
              {[
                ["I am studying.", "I'm studying."],
                ["You are cooking.", "You're cooking."],
                ["He is playing football.", "He's playing football."],
                ["We are waiting.", "We're waiting."],
                ["They are watching TV.", "They're watching TV."],
              ].map(([full, contraction], index) => (
                <div key={index} className="grammar-flex-row">
                  <div className="grammar-cell">{full}</div>
                  <div className="grammar-cell">{contraction}</div>
                </div>
              ))}
            </div>
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c

            <h3>Negatives</h3>
            <p>For negatives, use <strong>not</strong> after am, is, or are. We can contract the verb or not.</p>
            <div className="grammar-flex-table">
              {[
                ["I am not working.", "I'm not working."],
                ["She is not coming.", "She's not coming. / She isn't coming."],
                ["It is not raining.", "It's not raining. / It isn't raining."],
                ["We are not leaving yet.", "We're not leaving yet. / We aren't leaving yet."],
                ["They are not listening.", "They're not listening. / They aren't listening."],
              ].map(([fullNeg, contractions], index) => (
                <div key={index} className="grammar-flex-row">
                  <div className="grammar-cell">{fullNeg}</div>
                  <div className="grammar-cell">{contractions}</div>
                </div>
              ))}
            </div>

            <h3>Questions</h3>
            <div className="grammar-flex-table">
              {[
                ['Are you coming?'],
                ['Is she sleeping?'],
                ['Is it working?'],
                ['Are we meeting now?'],
                ['Are they studying English?'],
              ].map(([question], index) => (
                <div key={index} className="grammar-flex-row">
                  <div className="grammar-cell">{question}</div>
                </div>
              ))}
            </div>

            <h3>Short answers</h3>
            <div className="grammar-flex-table">
              {[
                ['Yes, I am.', "No, I'm not."],
                ['Yes, you are.', "No, you're not."],
                ['Yes, we are.', "No, we're not."],
                ['Yes, they are.', "No, they're not."],
                ['Yes, he is.', "No, he's not."],
                ['Yes, she is.', "No, she's not."],
                ['Yes, it is.', "No, it's not."],
              ].map(([yes, no], index) => (
                <div key={index} className="grammar-flex-row">
                  <div className="grammar-cell">{yes}</div>
                  <div className="grammar-cell">{no}</div>
                </div>
              ))}
            </div>

            <p><em>Note that with short answers, contractions are only used with negative replies.</em></p>

            <h3>Questions with question words</h3>
            <div className="grammar-flex-table">
              {[
                ['What are you doing? – I\'m studying.'],
                ['Where is she going? – She\'s going to the shops.'],
                ['Who are they talking to? – They\'re talking to the manager.'],
                ['Why are we waiting? – Because the bus is late.'],
              ].map(([sentence], index) => (
                <div key={index} className="grammar-flex-row">
                  <div className="grammar-cell">{sentence}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentcontinuousExplanation;
