import React from 'react';
import '../../../CSS/lessonIntro.css';
import { FaBookOpen, } from 'react-icons/fa';

const HarmoniaIntro = () => {
  return (
    <div className="lesson-intro-style">
      <div>

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Harmonia (Vowel harmony)</h2>
        <p>
          Learn how to use <strong>vowel harmony</strong>.
        </p>

      </div>
    </div>
  );
};

export default HarmoniaIntro;
