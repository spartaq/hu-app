import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';

const IndirectSpeechExplanation = () => {
  return (
    <div className="grammar-explanation">
      <h2><FaBookOpen /> Indirect Questions</h2>

      <p>
        Indirect questions are more polite or formal versions of direct questions. They usually start with phrases like
        <strong> Do you know...</strong>, <strong>Could you tell me...</strong>, or <strong>I was wondering...</strong>
        and are followed by a subject + verb structure instead of the usual inverted question form.
      </p>

<<<<<<< HEAD
<div className="grammar-display-grid">
                            <div className="">
                            <br></br><br></br>
                            <strong>QW + do you think + subj + verb form</strong><br></br><br></br>
                            <strong>Do you think + subj + verb form</strong><br></br><br></br>
=======
      <div className="example-block">
        <p><strong>Examples:</strong></p>
        <ul>
          <li>Direct: <em>Where is John?</em></li>
          <li>Indirect: <em>Do you know where John is?</em></li>
          <li>Direct: <em>Is the meeting at 2pm?</em></li>
          <li>Indirect: <em>Do you happen to know if the meeting is at 2pm?</em></li>
        </ul>
      </div>
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c

      <div className="grammar-explanation-text">
        <h3><FaLightbulb /> Common Structures</h3>
        <ul>
          <li><strong>QW (question word) + do you think + subject + verb</strong></li>
          <li><strong>Do you think + subject + verb</strong></li>
          <li><strong>Do you know + if + subject + verb</strong></li>
          <li><strong>Do you know + QW + subject + verb</strong></li>
        </ul>

<<<<<<< HEAD
                                <strong>Do you know + if + subj + verb form</strong><br></br><br></br>
                                <strong>Do you know + QW + subj + verb form</strong><br></br><br></br>
=======
        <h3><FaLightbulb /> Polite Introductory Phrases</h3>
        <ul>
          <li>Do you know...</li>
          <li>Could you tell me...</li>
          <li>I was wondering...</li>
          <li>Would you mind telling me...</li>
          <li>I’d like to know...</li>
          <li>Do you happen to know...</li>
          <li>Do you remember...</li>
          <li>Would you happen to know...</li>
          <li>Do you have any idea...</li>
        </ul>
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c

        <h3><FaLightbulb /> Important Notes</h3>
        <ul>
          <li>In indirect questions, <strong>do/does/did</strong> are not used.</li>
          <li>The word order becomes a regular sentence (subject + verb), not question order.</li>
          <li>We don’t use a question mark unless the overall sentence is a question.</li>
        </ul>
      </div>
    </div>
  );
};

export default IndirectSpeechExplanation;
