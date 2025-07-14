import React from 'react';

const PresentperfectExplanation = () => {
  return (
    <div>
      <div>
        <div className="agendagrammar">
          <div className="grammartext">
            <h2>Grammar explanation</h2>
            <p>
              We use the present perfect to talk about experiences, changes, or actions that have an effect on the present.
            </p>

            
            <div className="grammar-flex-table">
              {[
              
              ['Affirmative', 'Negative', 'Question'],
              ['I have worked', 'I have not worked', 'Have I worked?'],
              ['You have worked', 'You have not worked', 'Have you worked?'],
              ['We have worked', 'We have not worked', 'Have we worked?'],
              ['They have worked', 'They have not worked', 'Have they worked?'],
              ['He has worked', 'He has not worked', 'Has he worked?'],
              ['She has worked', 'She has not worked', 'Has she worked?'],
              ['It has worked', 'It has not worked', 'Has it worked?']



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

            <h3>Form</h3>
            <p>The present perfect is formed with <strong>have/has</strong> + the <strong>past participle</strong> of the verb.</p>
            <div className="grammar-flex-table">
              {[
                ['work → worked'],
                ['go → gone'],
                ['see → seen'],
                ['buy → bought'],
              ].map(([form], index) => (
                <div key={index} className="grammar-flex-row">
                  <div className="grammar-cell">{form}</div>
                </div>
              ))}
            </div>

            <h3>Contractions</h3>
            <p>We often use contractions when speaking or in informal writing.</p>
            <div className="grammar-flex-table">
              {[
                ['I have finished. = I\'ve finished.'],
                ['She has gone home. = She\'s gone home.'],
                ['We have seen that movie. = We\'ve seen that movie.'],
                ['They have eaten lunch. = They\'ve eaten lunch.'],
              ].map(([example], index) => (
                <div key={index} className="grammar-flex-row">
                  <div className="grammar-cell">{example}</div>
                </div>
              ))}
            </div>

            <h3>Negatives</h3>
            <p>Use <strong>have not</strong> (haven't) or <strong>has not</strong> (hasn't) + past participle for negatives.</p>
            <div className="grammar-flex-table">
              {[
                ["I haven't finished my homework yet."],
                ["He hasn't called me today."],
                ["We haven't visited Paris."],
              ].map(([neg], index) => (
                <div key={index} className="grammar-flex-row">
                  <div className="grammar-cell">{neg}</div>
                </div>
              ))}
            </div>

            <h3>Questions</h3>
            <p>Use <strong>Have</strong> or <strong>Has</strong> before the subject to form questions.</p>
            <div className="grammar-flex-table">
              {[
                ['Have you been to Japan?'],
                ['Has she finished the report?'],
                ['Have they left already?'],
              ].map(([question], index) => (
                <div key={index} className="grammar-flex-row">
                  <div className="grammar-cell">{question}</div>
                </div>
              ))}
            </div>

            <h3>Short answers</h3>
            <div className="grammar-flex-table">
              {[
                ['Yes, I have. / No, I haven\'t.'],
                ['Yes, you have. / No, you haven\'t.'],
                ['Yes, we have. / No, we haven\'t.'],
                ['Yes, they have. / No, they haven\'t.'],
                ['Yes, he has. / No, he hasn\'t.'],
                ['Yes, she has. / No, she hasn\'t.'],
                ['Yes, it has. / No, it hasn\'t.'],
              ].map(([answer], index) => (
                <div key={index} className="grammar-flex-row">
                  <div className="grammar-cell">{answer}</div>
                </div>
              ))}
            </div>
            <p><em>Note that we only use contractions with negative short answers.</em></p>

            <h3>Questions with question words</h3>
            <p>Use a question word before <strong>have</strong> or <strong>has</strong> to ask for more information.</p>
            <div className="grammar-flex-table">
              {[
                ['Where have you been?'],
                ['What has he done?'],
                ['How long have they lived here?'],
                ['Why has she left?'],
              ].map(([questionWord], index) => (
                <div key={index} className="grammar-flex-row">
                  <div className="grammar-cell">{questionWord}</div>
                </div>
              ))}
            </div>

            <h2>Present Perfect Tense</h2>
            <p>The present perfect is used to describe actions that have a connection to the present.</p>

            <h3>Structure:</h3>
            <p><strong>Subject + have/has + past participle</strong></p>

            <h3>Uses:</h3>
            <div className="grammar-flex-table">
              {[
                ['Experience: "I have visited Japan."'],
                ['Change over time: "She has become more confident."'],
                ['Unfinished actions (with "since" or "for"): "They have lived here for five years."'],
                ['Recent actions (with "just", "already", "yet"): "He has just finished his work."'],
              ].map(([use], index) => (
                <div key={index} className="grammar-flex-row">
                  <div className="grammar-cell">{use}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentperfectExplanation;
