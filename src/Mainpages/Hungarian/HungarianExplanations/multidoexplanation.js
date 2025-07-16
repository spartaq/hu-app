import React from 'react';

const MultIdoExplanation = () => {
  return (
    <div>
      <div className="grammar-display-grid">
        <div className="agendagrammar">
          <div className="grammartext">
            <h2>Grammar explanation</h2>
            <p>In Hungarian, the <strong>past tense (múlt idő)</strong> is used to describe actions that happened in the past. Verbs get special endings to show past time and who did the action.</p>

            <h3>Affirmative | Negative | Question</h3>
            <p>Hungarian verbs in the past tense change based on the subject (I, you, he/she, etc.). Here's an example with the verb <strong>tanul</strong> (to study):</p>

            <table className="grammartable" border="1" cellpadding="5">
              <tr><th>Affirmative</th><th>Negative</th><th>Question</th></tr>
              <tr>
                <td>
                  <ul>
                    <li>Én tanultam. (I studied.)</li>
                    <li>Te tanultál. (You studied.)</li>
                    <li>Ő tanult. (He/She studied.)</li>
                    <li>Mi tanultunk. (We studied.)</li>
                    <li>Ti tanultatok. (You all studied.)</li>
                    <li>Ők tanultak. (They studied.)</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Én nem tanultam. (I did not study.)</li>
                    <li>Te nem tanultál. (You did not study.)</li>
                    <li>Ő nem tanult. (He/She did not study.)</li>
                    <li>Mi nem tanultunk. (We did not study.)</li>
                    <li>Ti nem tanultatok. (You all did not study.)</li>
                    <li>Ők nem tanultak. (They did not study.)</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Tanultam? (Did I study?)</li>
                    <li>Tanultál? (Did you study?)</li>
                    <li>Tanult? (Did he/she study?)</li>
                    <li>Tanultunk? (Did we study?)</li>
                    <li>Tanultatok? (Did you all study?)</li>
                    <li>Tanultak? (Did they study?)</li>
                  </ul>
                </td>
              </tr>
            </table>

            <h3>Important points</h3>
            <ul>
              <li>Hungarian usually does not need the pronoun (én, te, ő...) because the verb ending shows who did the action.</li>
              <li>Negatives are made by adding <strong>nem</strong> before the verb.</li>
              <li>Questions are made by changing the intonation or adding a question mark — no helping word like "did" is needed.</li>
            </ul>

            <h3>Examples</h3>
            <ul>
              <li>Én reggel kávét ittam. (I drank coffee in the morning.)</li>
              <li>Te magyarul tanultál. (You studied Hungarian.)</li>
              <li>Ő Budapesten élt. (He/She lived in Budapest.)</li>
              <li>Mi minden nap sportoltunk. (We exercised every day.)</li>
              <li>Ők a parkban sétáltak. (They walked in the park.)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultIdoExplanation;
