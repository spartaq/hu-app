import React from 'react';
import '../../../CSS/grammarPage.css';
import { FaBookOpen, } from 'react-icons/fa';

const JelendefIntro = () => {
  return (
    <div className="grammar-explanation">
      <div>

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Present Def</h2>
        <p>
          Learn how to use <strong>present def</strong>.
        </p>

      </div>
    </div>
  );
};

export default JelendefIntro;
