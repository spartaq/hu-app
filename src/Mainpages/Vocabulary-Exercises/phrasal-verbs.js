import React, { useState } from 'react';
import Breadcrumbs from '../../Components/Breadcrumb';
import SEO from '../../Components/SEO';
import VocabularyMenu from '../../Components/Menus/VocabularyMenu.js';
import Sidebar from '../../Components/Sidebar';
import VocabularyExercises from '../../Components/VocabularyExerciseComps/phrasalverbsexercisescomp.js';
import VocabularyExplanation from '../../Components/VocabularyListComps/phrasalverblist.js';

const PhrasalVerbs = () => {
  
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
        title="Vocabulary Exercises - Phrasal Verbs"
        description="A big list of English grammar exercises to practice for exams"
        name="English Exam Exercises"
        type="article"
      />

<Breadcrumbs />
      <div className="grammar-container">
          
          <div>
          <div className="grammartitle">
              <span className="label label-all">All levels</span>
              <h3 className="mt-2">Phrasal Verbs</h3>
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

export default PhrasalVerbs;
