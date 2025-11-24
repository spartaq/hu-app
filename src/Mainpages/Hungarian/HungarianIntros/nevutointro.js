import React from 'react';
import '../../../CSS/grammarPage.css';
import { FaBookOpen, } from 'react-icons/fa';

const NevutoIntro = () => {
  return (
    <div className="grammar-explanation">
      <div>

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Nevuto</h2>
        <p>
          Learn how to use <strong>Nevuto</strong>.
        </p>

      </div>
    </div>
  );
};

export default NevutoIntro;
