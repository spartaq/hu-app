import React from 'react';
import '../../../CSS/grammarPage.css';
import { FaBookOpen } from 'react-icons/fa';

const irregularverbsIntro = () => {
  return (
    <div className="lesson-intro-style">
      <div>
        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Rendhagyó igék (Irregular Verbs)</h2>
        <p>
          Learn to use irregularverbs.
        </p>
      </div>
    </div>
  );
};

export default irregularverbsIntro;
