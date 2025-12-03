import React from 'react';
import '../../../CSS/lessonIntro.css';
import { FaBookOpen, } from 'react-icons/fa';

const FokuszIntro = () => {
  return (
    <div className="lesson-intro-style">
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
