import React from 'react';
import '../../../CSS/lessonIntro.css';
import { FaBookOpen, } from 'react-icons/fa';

const VanIntro = () => {
  return (
    <div className="lesson-intro-style">
      <div>

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Van (There Is)</h2>
        <p>
          Learn how to use <strong>van - there is”</strong>.
        </p>

      </div>
    </div>
  );
};

export default VanIntro;
