import React from 'react';
import '../../../CSS/grammarPage.css';
import { FaBookOpen, } from 'react-icons/fa';

const FokuszIntro = () => {
  return (
    <div className="grammar-explanation">
      <div>

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Fokusz (Word Order)</h2>
        <p>
          Learn how to use <strong>word order</strong>.
        </p>

      </div>
    </div>
  );
};

export default FokuszIntro;
