import React from 'react';
import '../../../CSS/grammarPage.css';
import { FaBookOpen, } from 'react-icons/fa';

const HarmoniaIntro = () => {
  return (
    <div className="grammar-explanation">
      <div>

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Vowel harmony</h2>
        <p>
          Learn how to use <strong>vowel harmony</strong>.
        </p>

      </div>
    </div>
  );
};

export default HarmoniaIntro;
