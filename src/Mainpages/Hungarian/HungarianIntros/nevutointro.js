import React from 'react';
import '../../../CSS/lessonIntro.css';
import { FaBookOpen, } from 'react-icons/fa';

const NevutoIntro = () => {
  return (
    <div className="lesson-intro-style">
      <div>

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Nevutó (Postpositions)</h2>
        <p>
          Learn how to use <strong>Nevuto</strong>.
        </p>

      </div>
    </div>
  );
};

export default NevutoIntro;
