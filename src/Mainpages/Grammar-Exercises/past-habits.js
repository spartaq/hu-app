import React, { useState } from 'react';
import Breadcrumbs from '../../Components/Breadcrumb';
import SEO from '../../Components/SEO';
import GrammarMenu from '../../Components/Menus/GrammarMenu.js';
import Sidebar from '../../Components/Sidebar';
import GrammarExercises from '../../Components/GrammarExerciseComps/pasthabitsexercisecomp.js';
import GrammarExplanation from '../../Components/GrammarExplanationComps/pasthabitsexplanation.js';

const PastHabits = () => {
  
  const [isGridVisible, setIsGridVisible] = useState(true);

  const toggleGridVisibility = () => {
    setIsGridVisible((prev) => !prev);
  };
  return (
    <div>
      <SEO
        title="Grammar Exercises - Past Habits"
        description="A big list of English grammar exercises to practice for exams"
        name="English Exam Exercises"
        type="article"
      />
      <Breadcrumbs />
      <div className="grammar-container">
          
        <div>
        <div className="grammartitle">
            <span className="label label-b2">B2</span>
            <h3 className="mt-2">Past Habits</h3>
          </div>
        
        <div className="descriptionbox">      

          <div className="grammarctrl descriptionbox">
            <button type="button" className="grammarbtn" onClick={toggleGridVisibility}>
              {isGridVisible ? 'Hide Grammar' : 'Show Grammar'}
            </button>
          </div>

          {isGridVisible && (
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
          <GrammarMenu />
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default PastHabits;
