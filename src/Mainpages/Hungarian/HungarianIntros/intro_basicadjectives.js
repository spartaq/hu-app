import React from 'react';
import '../../../CSS/grammarPage.css';
import { FaBookOpen } from 'react-icons/fa';

const BasicAdjectivesIntro = () => {
  return (
    <div className="grammar-explanation">
      <div>
        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Basic Adjectives</h2>
        <p>
          Learn to use basic adjectives.
        </p>
      </div>
    </div>
  );
};

export default BasicAdjectivesIntro;
