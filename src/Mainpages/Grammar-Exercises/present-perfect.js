import React, { useState } from 'react';
import Breadcrumbs from '../../Components/Breadcrumb';
import SEO from '../../Components/SEO';
import GrammarMenu from '../../Components/Menus/GrammarMenu.js';
import Sidebar from '../../Components/Sidebar';
import GrammarExercises from '../../Components/GrammarExerciseComps/presentperfectexercisescomp.js';
import GrammarExplanation from '../../Components/GrammarExplanationComps/presentperfectexplanation.js';

const PresentPerfect = () => {
  
  const [isGridVisible, setIsGridVisible] = useState(true);

  const toggleGridVisibility = () => {
    setIsGridVisible((prev) => !prev);
  };

  return (
    <div>
      <SEO
        title="Grammar Exercises - Present Perfect"
        description="A big list of English grammar exercises to practice for exams"
        name="English Exam Exercises"
        type="article"
      />
      <Breadcrumbs />
      <div className="grammar-container">
          
          <div>
          <div className="grammartitle">
              <span className="label label-b1">B1</span>
              <h3 className="mt-2">Present Perfect</h3>
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

export default PresentPerfect;
