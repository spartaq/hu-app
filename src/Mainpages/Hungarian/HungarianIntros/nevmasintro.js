import React from 'react';
import '../../../CSS/lessonIntro.css';
import { FaBookOpen, } from 'react-icons/fa';

const NevmasIntro = () => {
  return (
    <div className="lesson-intro-style">
      <div>

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Nevmas (Pronouns)</h2>
        <p>
          Learn how to use <strong>pronouns</strong>.
        </p>

      </div>
    </div>
  );
};

export default NevmasIntro;
