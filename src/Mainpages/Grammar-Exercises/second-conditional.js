<<<<<<< HEAD
import React, { useState } from 'react';
import Breadcrumbs from '../../Components/Breadcrumb';
import SEO from '../../Components/SEO';
import GrammarMenu from '../../Components/Menus/GrammarMenu.js';
import Sidebar from '../../Components/Sidebar';
import exambooks from '../../Images/secondcond1.webp';
import { FaAngleDown } from "react-icons/fa";
import RelatedExercises from '../../Utils/relatedExercises.js';
import GrammarExercises from '../../Components/GrammarExerciseComps/secondconditionalexercisescomp.js';
import GrammarExplanation from '../../Components/GrammarExplanationComps/secondcondexplanation.js';

const SecondConditional = () => {
  
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
        title="Grammar Exercises - Second Conditional"
        description="A big list of English grammar exercises to practice for exams"
        name="English Exam Exercises"
        type="article"
      />
      <Breadcrumbs />
      <div className="grammar-container">
       
          
      <div>
        <div className="grammartitle">
            <span className="label label-b1">B1</span>
            <h3 className="mt-2">Second Conditional</h3>
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

export default SecondConditional;
=======
import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/secondcondexplanation';
import mainimage from '../../Images/secondcond1.webp';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "second-conditional" },
];

const SecondConditional = () => (
  <GrammarPageLayout
    level="B2"
    title="Second Conditional"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Second Conditional"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="B2"
  />
);

export default SecondConditional;
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
