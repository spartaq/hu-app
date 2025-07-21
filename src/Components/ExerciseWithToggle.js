import React, { useRef } from 'react';
import ExerciseSection from '../Mainpages/Quizzes/exercisesection';
import ToggleSection from '../Utils/toggleSection';

const ExerciseWithToggle = ({ toggleData, exerciseData }) => {
const toggleSectionRef = useRef(null);  
const exerciseSectionRef = useRef(null); 

  return (
    <>
   <ToggleSection ref={toggleSectionRef} {...toggleData} />
    <ExerciseSection scrollTargetRef={exerciseSectionRef} data={exerciseData} />
    </>
  );
};
export default ExerciseWithToggle;
