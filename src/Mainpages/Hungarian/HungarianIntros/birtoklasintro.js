import React from 'react';
import '../../../CSS/lessonIntro.css';
import { FaBookOpen, } from 'react-icons/fa';

const BirtoklasIntro = () => {
  return (
    <div className="lessonIntro-explanation">
      <div>

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Birtoklas (Possessive)</h2>
        <p>
          Learn how to use <strong>“mine, yours”</strong>.
        </p>

      </div>
    </div>
  );
};

export default BirtoklasIntro;
