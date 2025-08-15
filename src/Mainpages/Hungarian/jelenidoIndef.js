<<<<<<< HEAD
import React, { useState } from 'react';
import Breadcrumbs from '../../Components/Breadcrumb.js';
import SEO from '../../Components/SEO.js';
import GrammarExercises from '../Hungarian/HungarianExerciseComps/jelenidoexercisescomp.js';
import GrammarExplanation from '../Hungarian/HungarianExplanations/jelenidoexplanation.js';
import mainimage from '../../Images/jelenido1.jpg';
import { FaAngleDown } from "react-icons/fa";
import RelatedExercises from '../../Utils/relatedExercises.js';

const JelenIdoIndef = () => {


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

export default JelenIdoIndef;
=======
import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from './HungarianExplanations/jelenidoindefexplanation';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Vocab", description: "Do this exercise to practice vocab.", type: "vocab", subtype: "verbs" },
  { label: "Exercises", description: "Do this exercise to practice your grammar.", type: "quiz", subtype: "jelenidoindef" },
  { label: "Grammar", description: "Do this exercise to practice word order.", type: "grammar", subtype: "jelenidoindef" },
  { label: "Gap Fill", description: "Do this exercise to practice word order.", type: "gapfill", subtype: "jelenidoindef" },
  { label: "Word Order", description: "Do this exercise to practice word order.", type: "ordering", subtype: "jelenidoindef" },
  { label: "Reading", description: "Do this exercise to practice reading and learn new vocabulary.", type: "reading", subtype: "nevem-bob" },
  { label: "Video", description: "Do this exercise to practice reading and learn new vocabulary.", type: "video", subtype: "spotify" },
];

const Jelenidoindef = () => (
  <GrammarPageLayout
    level="HU1"
    title="Jelenidő Alanyi (Indefinite Present Tense)"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Jelenidő Alanyi (Indefinite Present Tense)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
    relatedCategory="hungarian"
    relatedLevel="HU1"
  />
);

export default Jelenidoindef;
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
