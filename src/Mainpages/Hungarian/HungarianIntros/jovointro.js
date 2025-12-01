import React from 'react';
import '../../../CSS/grammarPage.css';
import { FaBookOpen, } from 'react-icons/fa';

const JovoIntro = () => {
  return (
    <div className="grammar-explanation">
      <div>

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Jővő (Future)</h2>
        <p>
          Learn how to use <strong>future</strong>.
        </p>

      </div>
    </div>
  );
};

export default JovoIntro;
