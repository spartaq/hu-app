import React from 'react';
import '../../../CSS/grammarPage.css';
import { FaBookOpen } from 'react-icons/fa';

const irregularverbsIntro = () => {
  return (
    <div className="grammar-explanation">
      <div>
        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Irregular Verbs</h2>
        <p>
          Learn to use irregularverbs.
        </p>
      </div>
    </div>
  );
};

export default irregularverbsIntro;
