<<<<<<< HEAD
import React, { useState } from 'react';
import Breadcrumbs from '../../Components/Breadcrumb';
import SEO from '../../Components/SEO';
import GrammarMenu from '../../Components/Menus/GrammarMenu.js';
import Sidebar from '../../Components/Sidebar';
import exambooks from '../../Images/simplepast1.jpg';
import { FaAngleDown } from "react-icons/fa";
import RelatedExercises from '../../Utils/relatedExercises.js';
import GrammarExercises from '../../Components/GrammarExerciseComps/simplepastexercisescomp.js';
=======
import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
import GrammarExplanation from '../../Components/GrammarExplanationComps/simplepastexplanation';
import mainimage from '../../Images/simplepast1.jpg';

<<<<<<< HEAD
const SimplePast = () => {
  
const [isGrammarVisible, setIsGrammarVisible] = useState(true);

  const toggleGrammarVisibility = () => {
    setIsGrammarVisible((prev) => !prev);
  };
  
  const [isExercisesVisible, setIsExercisesVisible] = useState(false);

  const toggleExercisesVisibility = () => {
    setIsExercisesVisible((prev) => !prev);
  }; 

  return (
    <div>
      <SEO
        title="Grammar Exercises - To Be"
        description="A big list of English grammar exercises to practice for exams"
        name="English Exam Exercises"
        type="article"
      />
      <Breadcrumbs />
      <div className="grammar-container">
       
          
      <div>
        <div className="grammartitle">
            <span className="label label-a2">A2</span>
            <h3 className="mt-2">Simple Past</h3>
          </div>
        
           <div className="grammarimage">
          <img src={exambooks} alt="English Exam Exercises" /></div>

                  <div className="grammar-display-grid">
              <GrammarExplanation />
            </div>
          <div className="grammardoexercise">
            <p>Do this exercise to practice your grammar.</p></div>

        <div className="showagendagrammarbox"  onClick={toggleExercisesVisibility}>
        {isExercisesVisible ? 'Exercises' : 'Exercises'}<FaAngleDown /></div>

          {isExercisesVisible && (
            <div className="agenda-display-grid">
              <GrammarExercises />
            </div>
          )} 
        </div>
        <div className="top-margin">
          <RelatedExercises currentCategory="grammar-exercises" currentLevel="A1" />
        </div>
      </div>
    </div>
  );
};

export default SimplePast;
=======
const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "simple-past" },
  { label: "Exercises", description: "Do this exercise to practice grammar.", type: "quiz", subtype: "simplepast" },
  { label: "Reading", description: "Do this exercise to practice reading and learn new vocabulary.", type: "reading", subtype: "simplepast" },
];

const SimplePast = () => (
  <GrammarPageLayout
    level="A2"
    title="Simple Past"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Simple Past"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="A2"
  />
);

export default SimplePast;
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
