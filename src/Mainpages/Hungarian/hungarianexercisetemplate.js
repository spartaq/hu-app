import React from 'react';
import ExerciseRouter from '../../Components/ModalRouter';

const HungarianTemplate = () => {
    return (
      <div>
        <div>
          <h1>Hungarian Lesson: Present Tense exercise</h1>
          <ExerciseRouter type="quiz" />
        </div>
  
        <div>
          <h1>Hungarian Lesson: Present Tense word order</h1>
          <ExerciseRouter type="ordering" />
        </div>

        <div>
          <h1>Hungarian Lesson: Present Tense vocab</h1>
          <ExerciseRouter type="vocab" />
        </div>

      </div>
    );
  };

export default HungarianTemplate;
