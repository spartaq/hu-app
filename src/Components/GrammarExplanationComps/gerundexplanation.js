import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';

const GerundExplanation = () => {
  return (
    <div className="grammar-explanation">
      <h2><FaBookOpen /> Verbs Followed by Gerunds</h2>

      <p>
        Certain verbs like <strong>like, love, hate, avoid</strong> are followed by a noun or a gerund
        (<em>verb + -ing</em>). Here is a list of common verbs that take a gerund after them.
      </p>

      <hr />

      <div className="grammar-flex-table">
        {[
          ['Verb 1', 'Verb 2'],
          ['avoid', 'be used to'],
          ["can't help", "can't stand"],
          ['consider', 'discuss'],
          ['don’t like', 'end up'],
          ['enjoy', 'feel like'],
          ['finish', 'get used to'],
          ['give up', 'go on'],
          ['have difficulty', 'have problems'],
          ['have trouble', 'imagine'],
          ["it's no use", "it's worthwhile"],
          ['keep', 'look forward to'],
          ['mention', 'mind'],
          ['miss', 'recommend'],
          ['quit', 'spend time'],
          ['stop', 'suggest'],
          ['waste time', '']
        ].map(([verb1, verb2], index) => (
          <div key={index} className={`grammar-flex-row${index === 0 ? ' header' : ''}`}>
            <div className="grammar-cell">{verb1}</div>
            <div className="grammar-cell">{verb2}</div>
          </div>
        ))}
      </div>

      <div className="grammar-explanation-text" style={{ marginTop: '1rem' }}>
        <h3><FaLightbulb /> Note</h3>
        <p>
          These verbs are always followed by a gerund and never by an infinitive. For example,
          <em>"I enjoy swimming."</em> (correct) but <em>"I enjoy to swim."</em> (incorrect).
        </p>
      </div>
    </div>
  );
};

export default GerundExplanation;
