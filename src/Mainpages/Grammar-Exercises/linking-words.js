<<<<<<< HEAD
import React, { useState } from 'react';
import Breadcrumbs from '../../Components/Breadcrumb.js';
import SEO from '../../Components/SEO.js';
import VocabularyMenu from '../../Components/Menus/VocabularyMenu.js';
import Sidebar from '../../Components/Sidebar.js';
import VocabularyExercises from '../../Components/GrammarExerciseComps/linkingwordsexercisescomp.js';
import VocabularyExplanation from '../../Components/GrammarExplanationComps/linkingwordsexplanation.js';

const Linkingwords = () => {

  
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
        title="Vocabulary Exercises - Linking Words"
        description="A big list of English grammar exercises to practice for exams"
        name="English Exam Exercises"
        type="article"
      />
      <Breadcrumbs />

      <div className="grammar-container">
          
          <div>
          <div className="grammartitle">
              <span className="label label-b2">B2</span>
              <h3 className="mt-2">Linking Words</h3>
            </div>
          
          <div className="descriptionbox">      
  
            <div className="grammarctrl descriptionbox">
              <button type="button" className="grammarbtn" onClick={toggleGrammarVisibility}>
                {isGrammarVisible ? 'Hide Grammar' : 'Show Grammar'}
              </button>
            </div>
  
            {isGrammarVisible && (
              <div className="grammar-display-grid">
                <VocabularyExplanation />
              </div>
            )}
          </div>
  
  
                        <div>
                            <div className="agenda-display-grid">
                              <VocabularyExercises />
                            </div>
                        </div>
          </div>
        <div className="top-margin">
          <VocabularyMenu />
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Linkingwords;
=======
import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/linkingwordsexplanation';
import mainimage from '../../Images/linkingwords1.jpg';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "linking-words" },
];

const LinkingWords = () => (
  <GrammarPageLayout
    level="C1"
    title="Linking Words"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Linking Words"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="C1"
  />
);

export default LinkingWords;
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
