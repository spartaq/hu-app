import React from 'react';
import '../../../CSS/grammarPage.css';
import { FaBookOpen, } from 'react-icons/fa';

const NumbersIntro = () => {
  return (
    <div className="grammar-explanation">
      <div>

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Számok (Numbers)</h2>
        <p>
          Learn some Numbers.
        </p>

      </div>
    </div>
  );
};

export default NumbersIntro;
