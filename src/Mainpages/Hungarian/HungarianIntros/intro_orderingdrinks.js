import React from 'react';
import '../../../CSS/grammarPage.css';
import { FaBookOpen, } from 'react-icons/fa';

const OrderingDrinksIntro = () => {
  return (
    <div className="grammar-explanation">
      <div>

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Rendelés (Ordering Food and Drinks)</h2>
        <p>
          Learn the language for ordering at restartuants and cafes.
        </p>

      </div>
    </div>
  );
};

export default OrderingDrinksIntro;
