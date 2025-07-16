import React, { useState } from 'react';
import Breadcrumbs from '../../Components/Breadcrumb';
import SEO from '../../Components/SEO';
import GrammarMenu from '../../Components/Menus/GrammarMenu';
import Sidebar from '../../Components/Sidebar';
import GrammarExercises from '../../Components/GrammarExplanationComps/infinitiveexplanation';
import GrammarExplanation from '../../Components/GrammarExerciseComps/infinitiveexercisescomp';
import RelatedExercises from '../../Utils/relatedExercises.js';



const Infinitives = () => {
  
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
        title="Grammar Exercises - Infinitives"
        description="A big list of English grammar exercises to practice for exams"
        name="English Exam Exercises"
        type="article"
      />
      <Breadcrumbs />

      <div className="grammar-container">
          
          <div>
          <div className="grammartitle">
              <span className="label label-b2">B2</span>
              <h3 className="mt-2">Infinitives</h3>
            </div>
          
          <div className="descriptionbox">    
 
      
      <div className="grammarctrl descriptionbox">
            <button type="button" className="grammarbtn" onClick={toggleGrammarVisibility}>
              {isGrammarVisible ? 'Hide Grammar' : 'Show Grammar'}
            </button>
          </div>

          {isGrammarVisible && (
            <div className="grammar-display-grid">
              <GrammarExplanation />
            </div>
          )}
       </div>


<div>
    <div className="agenda-display-grid">
      <GrammarExercises />
    </div>
</div>
</div>
        
        
        <div className="top-margin">
          <RelatedExercises currentCategory="grammar-exercises" currentLevel="A1" />
        </div>

      </div>
    </div>
  );
};


export default Infinitives;

        