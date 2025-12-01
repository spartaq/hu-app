import React from 'react';
import '../../../CSS/grammarPage.css';
import { FaBookOpen } from 'react-icons/fa';

const basicquestionsIntro = () => {
  return (
    <div className="grammar-explanation">
      <div>
        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Basic Questions</h2>
        <p>
          Learn to use basicquestions.
        </p>
      </div>
    </div>
  );
};

export default basicquestionsIntro;
