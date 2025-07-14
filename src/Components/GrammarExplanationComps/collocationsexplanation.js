import React from 'react';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';
import '../../CSS/grammarPage.css';

const CollocationsExplanation = () => {
  return (
    <div className="grammar-explanation">
      <h2><FaBookOpen style={{ marginRight: '8px' }} />Introduction to Collocations</h2>
      <p>
        This page explains what collocations are, why they are important, and provides common examples to help you sound more natural in English.
      </p>

      <p>
        <strong>Collocations</strong> are natural combinations of words that commonly go together in English. Native speakers use them without thinking, and learning them will help you sound more fluent and natural.
      </p>

      <p>
        For example, we say <strong>“make a decision”</strong> (not <em>“do a decision”</em>), and <strong>“heavy rain”</strong> (not <em>“strong rain”</em>).
      </p>

      <h3><FaLightbulb style={{ marginRight: '8px' }} />Common Collocations</h3>

      <ul>
        <li><strong>make a decision</strong> – I need to make a decision by tomorrow.</li>
        <li><strong>take a break</strong> – Let’s take a short break before we continue.</li>
        <li><strong>strong coffee</strong> – He drinks very strong coffee in the morning.</li>
        <li><strong>catch a cold</strong> – She caught a cold last week.</li>
        <li><strong>heavy rain</strong> – The match was cancelled due to heavy rain.</li>
        <li><strong>deeply troubled</strong> – The manager looked deeply troubled by the results.</li>
        <li><strong>fast learner</strong> – She’s a fast learner and picks things up quickly.</li>
        <li><strong>do homework</strong> – I have to do my homework before dinner.</li>
      </ul>

      <p>
        These word pairs just "sound right" to native speakers — even if similar alternatives exist, they may feel unnatural or wrong.
      </p>

      <p>
        <strong>Want more?</strong> Check out our full list of useful collocations here:{' '}
        <a href="/grammar-exercises/collocations-list">Full Collocations List</a>
      </p>
    </div>
  );
};

export default CollocationsExplanation;
