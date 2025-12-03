import React from 'react';
import '../../../CSS/lessonIntro.css';
import { FaBookOpen, } from 'react-icons/fa';

const BasicPhrasesIntro = () => {
  return (
    <div className="lesson-intro-style">
      <div>

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} />Alapvető Kifejezések (Basic Phrases)</h2>
        <p>
          Learn some basic phrases.
        </p>

      </div>
    </div>
  );
};

export default BasicPhrasesIntro;
