<<<<<<< HEAD
import React, { useState } from 'react';
import Breadcrumbs from '../../Components/Breadcrumb';
import SEO from '../../Components/SEO';
import GrammarMenu from '../../Components/Menus/GrammarMenu.js';
import Sidebar from '../../Components/Sidebar';
import exambooks from '../../Images/simppastcont1.jpg';
import { FaAngleDown } from "react-icons/fa";
import RelatedExercises from '../../Utils/relatedExercises.js';
import GrammarExercises from '../../Components/GrammarExerciseComps/simpcontexercisescomp.js';
import GrammarExplanation from '../../Components/GrammarExplanationComps/simpcontexplanation.js';

const Simpcont = () => {
  
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
        title="Grammar Exercises - Simple Present vs. Present Continuous"
        description="A big list of English grammar exercises to practice for exams"
        name="English Exam Exercises"
        type="article"
      />
      <Breadcrumbs />
      <div className="grammar-container">
        
          
      <div>
        <div className="grammartitle">
            <span className="label label-a2">A2</span>
            <h3 className="mt-2">Simple Present vs Present Continuous</h3>
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

export default Simpcont;
=======
import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/simpcontexplanation';
import mainimage from '../../Images/quiz1.jpg';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "simpcont" },
];

const Simpcont = () => (
  <GrammarPageLayout
    level="A2"
    title="Simpcont"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Simpcont"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="A2"
  />
);

export default Simpcont;
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
