import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaLightbulb, FaListUl } from 'react-icons/fa';

const ThirdcondExplanation = () => {
  return (
    <div className="grammar-explanation grammar-display-grid">
      <h2><FaBookOpen /> Third Conditional</h2>
      <p>We use the third conditional to talk about unreal situations in the past — things that did not happen, and their imagined results.</p>

      <h3><FaLightbulb /> Structure</h3>
      <p><strong>If + past perfect, would have + past participle</strong></p>
      <p>We use the past perfect after <strong>if</strong>, and <strong>would have</strong> + past participle in the main clause.</p>

<<<<<<< HEAD
<div className="grammar-display-grid">
                            <div className="agendagrammar">
                            <div className="grammartext">
  <h2>Grammar explanation</h2>
  <p>We use the third conditional to talk about unreal situations in the past — things that did not happen, and their imagined results.</p>

  <h3>Structure</h3>
  <p><strong>If + past perfect, would have + past participle</strong></p>
  <p>We use the past perfect after <strong>if</strong>, and <strong>would have</strong> + past participle in the main clause.</p>

  <p><strong>Example structure:</strong></p>
  <ul>
    <li>If + past perfect, would have + past participle</li>
    <li>If I had studied harder, I would have passed the exam.</li>
    <li>If she had left earlier, she would have caught the train.</li>
    <li>If we had known, we would have helped.</li>
  </ul>

  <h3>Examples</h3>
  <ul>
    <li>If it had rained, the ground would have been wet.</li>
    <li>If they had invited us, we would have gone to the party.</li>
    <li>If you had told me, I would have helped you.</li>
    <li>If he had worked faster, he would have finished on time.</li>
  </ul>

  <h3>Notes</h3>
  <ul>
    <li>The <strong>if-clause</strong> can come first or second in the sentence.</li>
    <li>If the <strong>if-clause</strong> comes first, use a comma.</li>
    <li>If the <strong>if-clause</strong> comes second, no comma is needed.</li>
    <li>We can use <strong>could have</strong> or <strong>might have</strong> instead of <strong>would have</strong> to express possibility or permission.</li>
  </ul>
  <p><strong>Examples:</strong></p>
  <ul>
    <li>If I had seen her, I <strong>could have</strong> said hello.</li>
    <li>If they had worked harder, they <strong>might have</strong> succeeded.</li>
  </ul>
</div>

=======
      <h4>Example structure:</h4>
      <div className="grammar-flex-table">
        {[
          ['If-clause (past perfect)', 'Main clause (would have + past participle)'],
          ['If I had studied harder', 'I would have passed the exam'],
          ['If she had left earlier', 'she would have caught the train'],
          ['If we had known', 'we would have helped'],
        ].map(([ifClause, mainClause], index) => (
          <div key={index} className={`grammar-flex-row${index === 0 ? ' header' : ''}`}>
            <div className="grammar-cell">{ifClause}</div>
            <div className="grammar-cell">{mainClause}</div>
          </div>
        ))}
      </div>
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c

      <h3><FaBookOpen /> Examples</h3>
      <ul>
        <li>If it had rained, the ground would have been wet.</li>
        <li>If they had invited us, we would have gone to the party.</li>
        <li>If you had told me, I would have helped you.</li>
        <li>If he had worked faster, he would have finished on time.</li>
      </ul>

      <h3><FaListUl /> Notes</h3>
      <ul>
        <li>The <strong>if-clause</strong> can come first or second in the sentence.</li>
        <li>If the <strong>if-clause</strong> comes first, use a comma.</li>
        <li>If the <strong>if-clause</strong> comes second, no comma is needed.</li>
        <li>We can use <strong>could have</strong> or <strong>might have</strong> instead of <strong>would have</strong> to express possibility or permission.</li>
      </ul>

      <h4>Examples:</h4>
      <ul>
        <li>If I had seen her, I <strong>could have</strong> said hello.</li>
        <li>If they had worked harder, they <strong>might have</strong> succeeded.</li>
      </ul>
    </div>
  );
};

export default ThirdcondExplanation;
