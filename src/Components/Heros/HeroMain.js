import React from 'react';
import herotest2 from '../Images/herotest2.png'

const HeroMain = () => {
  return (
    <div className="heromain">
      <div className="textpics">
        <div className="heromaintext">
          <h1><strong>ENGLISH EXAM EXERCISES</strong></h1>
          <h2>A collection of language practice exercises for General English as well as for TOEFL, EuroExam, Cambridge, Oxford, High School Finals, and more!</h2>
        </div>
        <div className="heromainpic">
        <img src={herotest2} alt="" />
        </div>
    </div>
  </div>
  );
};

export default HeroMain;