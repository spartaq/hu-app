import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';

const ModalsdeductionExplanation = () => {
  return (
    <div className="grammar-explanation">
      <h2><FaBookOpen /> Modals of Deduction</h2>

      <p>
        Modals of deduction are used to express how certain we are about something in the present or past. These modals include <strong>must</strong>, <strong>can't</strong>, <strong>might</strong>, <strong>may</strong>, and <strong>could</strong>.
      </p>

      <div className="example-block">
        <h3>Present Deduction</h3>
        <p>We use modal verbs + base verb to talk about what we think is true now.</p>
        <ul>
          <li><strong>Must</strong> – We are sure something is true. <br />Example: He <strong>must</strong> be at work. His car is in the parking lot.</li>
          <li><strong>Can't / Cannot</strong> – We are sure something is not true. <br />Example: She <strong>can’t</strong> be the manager. She’s too young.</li>
          <li><strong>Might / May / Could</strong> – We think something is possible. <br />Example: They <strong>might</strong> be on holiday, but I’m not sure.</li>
        </ul>
      </div>

      <div className="example-block">
        <h3>Past Deduction</h3>
        <p>For the past, use modal verbs + <strong>have</strong> + past participle.</p>
        <ul>
          <li><strong>Must have</strong> – We are sure something happened. <br />Example: He <strong>must have</strong> forgotten about the meeting.</li>
          <li><strong>Can't have / Couldn't have</strong> – We are sure something didn’t happen. <br />Example: She <strong>can’t have</strong> finished the report already.</li>
          <li><strong>Might have / May have / Could have</strong> – We think something was possible. <br />Example: They <strong>might have</strong> missed the train.</li>
        </ul>
      </div>

      <div className="grammar-explanation-text">
        <h3><FaLightbulb /> Tip</h3>
        <p>These structures help you sound more natural when making guesses or deductions based on evidence. Use the present form for now, and the "have + past participle" form for the past.</p>
      </div>
    </div>
  );
};

export default ModalsdeductionExplanation;
