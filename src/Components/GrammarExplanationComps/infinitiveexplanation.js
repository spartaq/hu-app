import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';

const InfinitiveExplanation = () => {
  return (
    <div className="grammar-explanation">
      <h2><FaBookOpen /> Verb + to do</h2>

      <p>
        Many verbs in English are followed by the infinitive form of another verb (to + base verb).
        These are often used to express desires, intentions, decisions, and offers.
      </p>

      <div className="example-block">
        <p><strong>Examples:</strong></p>
        <ul>
          <li>She <strong>wants to travel</strong> around the world.</li>
          <li>We <strong>hope to see</strong> you soon.</li>
          <li>They <strong>promised to help</strong> with the move.</li>
        </ul>
      </div>

      <div className="grammar-explanation-text">
        <h3><FaLightbulb /> Common Verbs Followed by an Infinitive</h3>

        <div className="grammar-flex-table">
          {[
            ['agree', 'decide'],
            ['choose', 'expect'],
            ['hope', 'intend'],
            ['manage', 'offer'],
            ['fail', 'help'],
            ['plan', 'promise'],
            ['refuse', 'seem'],
            ['threaten', 'arrange'],
            ['attempt', 'learn'],
            ['like', 'love'],
            ['hate', 'prefer'],
            ['forget', 'remember'],
            ['want', 'would like/love'],
            ['mean', 'tend'],
            ['try', ''],
          ].map((row, index) => (
            <div key={index} className="grammar-flex-row">
              {row.map((item, idx) => (
                <div key={idx} className="grammar-cell">{item}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfinitiveExplanation;
