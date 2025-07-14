import React from 'react';

const FutureExplanation = () => {
  return (
    <div className="grammar-explanation">
      <h2>Future Simple</h2>

      <div className="grammar-flex-table">
        {[
          ['Affirmative', 'Negative', 'Question'],
          ['I will', "I will not (won't)", 'Will I?'],
          ['You will', "You will not (won't)", 'Will you?'],
          ['He will', "He will not (won't)", 'Will he?'],
          ['She will', "She will not (won't)", 'Will she?'],
          ['It will', "It will not (won't)", 'Will it?'],
          ['We will', "We will not (won't)", 'Will we?'],
          ['They will', "They will not (won't)", 'Will they?'],
        ].map(([affirmative, negative, question], index) => (
          <div key={index} className={`grammar-flex-row${index === 0 ? ' header' : ''}`}>
            <div className="grammar-cell">{affirmative}</div>
            <div className="grammar-cell">{negative}</div>
            <div className="grammar-cell">{question}</div>
          </div>
        ))}
      </div>

      <hr />

      <div className="future-explanation">
        <p>
          There are different ways to talk about the future in English besides using <strong>will</strong>. Here are some common expressions to describe plans, intentions, or things that are about to happen:
        </p>
        <ul className="future-list">
          <li><strong>going to do</strong> – used for plans and intentions (informal)</li>
          <li><strong>about to do</strong> – something will happen very soon (no time phrase needed)</li>
          <li><strong>thinking of doing</strong> – considering an action</li>
          <li><strong>plan to do</strong> – intention or arrangement</li>
          <li><strong>planning to do</strong> – similar to plan to do, but emphasizes the ongoing process</li>
          <li><strong>plan on doing</strong> – to expect or intend</li>
          <li><strong>planning on doing</strong> – similar to plan on doing, emphasizing intention</li>
        </ul>
      </div>
    </div>
  );
};

export default FutureExplanation;
