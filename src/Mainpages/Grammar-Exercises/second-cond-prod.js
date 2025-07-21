<<<<<<< HEAD
import React, { useState } from 'react';
import Breadcrumbs from '../../Components/Breadcrumb.js';
import SEO from '../../Components/SEO.js';
import GrammarMenu from '../../Components/Menus/GrammarMenu.js';
import Sidebar from '../../Components/Sidebar.js';
import GrammarExercises from '../../Components/GrammarExerciseComps/secondcondprodexercisescomp.js';
import GrammarExplanation from '../../Components/GrammarExplanationComps/secondcondexplanation.js';
import exambooks from '../../Images/secondcondprod1.jpg';
import { FaAngleDown } from "react-icons/fa";

const SecondCondProd = () => {
  
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
        title="Grammar Exercises - Second Conditional (Prod)"
        description="A big list of English grammar exercises to practice for exams"
        name="English Exam Exercises"
        type="article"
      />
      <Breadcrumbs />
      <div className="grammar-container">
          
          <div>
          <div className="grammartitle">
              <span className="label label-b1">B1</span>
              <h3 className="mt-2">Second Conditional (Prod)</h3>
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

export default SecondCondProd;
=======
import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/secondcondexplanation';
import mainimage from '../../Images/secondcondprod1.jpg';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "second-cond-prod" },
];

const SecondCondProd = () => (
  <GrammarPageLayout
    level="B2"
    title="Second Cond Prod"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Second Cond Prod"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="B2"
  />
);

export default SecondCondProd;
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
