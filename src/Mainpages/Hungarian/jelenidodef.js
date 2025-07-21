<<<<<<< HEAD
import React, { useState } from 'react';
import Breadcrumbs from '../../Components/Breadcrumb.js';
import SEO from '../../Components/SEO.js';
import mainimage from '../../Images/jelenido1.jpg';
import { FaAngleDown } from "react-icons/fa";
import RelatedExercises from '../../Utils/relatedExercises.js';
import GrammarExercises from '../Hungarian/HungarianExerciseComps/jelenidoexercisescomp.js';
import GrammarExplanation from '../Hungarian/HungarianExplanations/jelenidoexplanation.js';
import ExerciseRouter from '../../Components/ExerciseRouter';


const JelenIdoDef = () => { 
  
  const [isVocabVisible, setIsVocabVisible] = useState(false);

  const toggleVocabVisibility = () => {
    setIsVocabVisible((prev) => !prev);
  };
  
  const [isExercisesVisible, setIsExercisesVisible] = useState(false);

  const toggleExercisesVisibility = () => {
    setIsExercisesVisible((prev) => !prev);
  }; 

  const [isWordorderVisible, setIsWordorderVisible] = useState(false);

  const toggleWordorderVisibility = () => {
    setIsWordorderVisible((prev) => !prev);
  };
  
  return (
    <div>
      <SEO
        title="Hungarian Grammar Exercises - Jelen Idő"
        description="A big list of Hungarian grammar exercises to practice"
        name="Hungarian Exercises"
        type="article"
      />
      <Breadcrumbs />
      <div className="grammar-container">
        
          
      <div>
        <div className="grammartitle">
            <span className="label label-a1">A1</span>
            <h3 className="mt-2">Jelen Idő (Simple Present)</h3>
          </div>
          <div className="grammarimage">
          <img src={mainimage} alt="English Exam Exercises" /></div>

          
          <div className="grammar-display-grid">
              <GrammarExplanation />
            </div> 
        
        <div className="grammardoexercise">
            <p>Do this exercise to practice vocab.</p></div>
            
        <div className="showagendagrammarbox"  onClick={toggleVocabVisibility}>
        {isVocabVisible ? 'Vocab' : 'Vocab'}<FaAngleDown /></div>

          {isVocabVisible && (
            <div>
             <ExerciseRouter type="vocab" />
            </div>
          )} 
          
          
          <div className="grammardoexercise">
            <p>Do this exercise to practice your grammar.</p></div>
            
        <div className="showagendagrammarbox"  onClick={toggleExercisesVisibility}>
        {isExercisesVisible ? 'Exercises' : 'Exercises'}<FaAngleDown /></div>

          {isExercisesVisible && (
            <div>
             <ExerciseRouter type="quiz" subtype="present" />
            </div>
          )} 
        
        <div className="grammardoexercise">
            <p>Do this exercise to practice word order.</p></div>
            
        <div className="showagendagrammarbox"  onClick={toggleWordorderVisibility}>
        {isWordorderVisible ? 'Word Order' : 'Word Order'}<FaAngleDown /></div>

          {isWordorderVisible && (
            <div className="sentence-ordering-container">
             <ExerciseRouter type="ordering" />
            </div>
          )} 


       
        </div>



        <div className="top-margin">
          <RelatedExercises currentCategory="hungarian" currentLevel="HU" />
        </div>
      </div>
    </div>
  );
};

export default JelenIdoDef;
=======
import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from './HungarianExplanations/jelenidodefexplanation';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Vocab", description: "Do this exercise to practice vocab.", type: "vocab", subtype: "verbs" },
  { label: "Exercises", description: "Do this exercise to practice your grammar.", type: "quiz", subtype: "jelenidodef" },
  { label: "Grammar", description: "Do this exercise to practice word order.", type: "grammar", subtype: "jelenidodef" },
  { label: "Gap Fill", description: "Do this exercise to practice word order.", type: "gapfill", subtype: "business" },
  { label: "Word Order", description: "Do this exercise to practice word order.", type: "ordering", subtype: "jelenidodef" },
  { label: "Reading", description: "Do this exercise to practice reading and learn new vocabulary.", type: "reading", subtype: "readings" },
  { label: "Video", description: "Do this exercise to practice reading and learn new vocabulary.", type: "video", subtype: "videos" },
];

const Jelenidodef = () => (
  <GrammarPageLayout
    level="HU1"
    title="Jelenidő Targyas (Definite Present Tense)"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Jelenidő Targyas (Definite Present Tense)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
    relatedCategory="hungarian"
    relatedLevel="HU1"
  />
);

export default Jelenidodef;
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
