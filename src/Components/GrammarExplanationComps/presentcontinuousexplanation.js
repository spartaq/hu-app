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
