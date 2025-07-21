<<<<<<< HEAD
import React, { useState } from 'react';
import Breadcrumbs from '../../Components/Breadcrumb.js';
import SEO from '../../Components/SEO.js';
import GrammarMenu from '../../Components/Menus/GrammarMenu.js';
import Sidebar from '../../Components/Sidebar.js';
import exambooks from '../../Images/adverbadjective1.jpg';
import { FaAngleDown } from "react-icons/fa";
import RelatedExercises from '../../Utils/relatedExercises.js';
import GrammarExercises from '../../Components/GrammarExerciseComps/adjadvexercisescomp.js';
import GrammarExplanation from '../../Components/GrammarExplanationComps/adjadvexplanation.js';

const AdjAdv = () => {
  
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
        title="Grammar Exercises - Adjectives and Adverbs"
        description="A big list of English grammar exercises to practice for exams"
        name="English Exam Exercises"
        type="article"
      />
      <Breadcrumbs />
      <div className="grammar-container">
          
          <div>
          <div className="grammartitle">
              <span className="label label-b2">B2</span>
              <h3 className="mt-2">Adjectives and Adverbs</h3>
            </div>
          
          <div className="grammarimage">
          <img src={exambooks} alt="English Exam Exercises" /></div>
            <div className="grammar-display-grid">
              <GrammarExplanation />
            </div>
         

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

export default AdjAdv;
=======
import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/adjadvexplanation';
import mainimage from '../../Images/adjadv.jpg';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "adjadv" },
];

const Adjadv = () => (
  <GrammarPageLayout
    level="B2"
    title="Adjadv"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Adjadv"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="B2"
  />
);

export default Adjadv;
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
