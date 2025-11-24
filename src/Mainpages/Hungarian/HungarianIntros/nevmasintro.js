import React from 'react';
import '../../../CSS/grammarPage.css';
import { FaBookOpen, } from 'react-icons/fa';

const NevmasIntro = () => {
  return (
    <div className="grammar-explanation">
      <div>

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Nevmas - pronouns</h2>
        <p>
          Learn how to use <strong>pronouns</strong>.
        </p>

      </div>
    </div>
  );
};

export default NevmasIntro;
