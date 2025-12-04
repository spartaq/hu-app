import React from 'react';
import '../../../CSS/lessonIntro.css';
import { FaBookOpen } from 'react-icons/fa';

const soundsIntro = () => {
  return (
    <div className="lesson-intro-style">
      <div>
        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Sounds</h2>
        <p>
          Learn to use sounds.
        </p>
      </div>
    </div>
  );
};

export default soundsIntro;
