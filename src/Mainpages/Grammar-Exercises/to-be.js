import React, { useState } from 'react';
import Breadcrumbs from '../../Components/Breadcrumb';
import SEO from '../../Components/SEO';
import Sidebar from '../../Components/Sidebar';
import GrammarExercises from '../../Components/GrammarExerciseComps/tobepresentexercisescomp.js';
import GrammarExplanation from '../../Components/GrammarExplanationComps/tobepresentexplanation.js';
import exambooks from '../../Images/argue1.jpg';
import { FaAngleDown } from "react-icons/fa";
import ActivityFilter from '../../Utils/activityFilter.js';

const ToBe = () => {


  const [isGridVisible, setIsGridVisible] = useState(true);

  const toggleGridVisibility = () => {
    setIsGridVisible((prev) => !prev);
  };  
  
  return (
    <div>
      <SEO
        title="Grammar Exercises - To Be"
        description="A big list of English grammar exercises to practice for exams"
        name="English Exam Exercises"
        type="article"
      />
      <Breadcrumbs />
      <div className="grammar-container">
        
          
      <div>
        <div className="grammartitle">
            <span className="label label-a1">A1</span>
            <h3 className="mt-2">To Be - Present</h3>
          </div>
          <div className="grammarimage">
          <img src={exambooks} alt="English Exam Exercises" /></div>
        <div className="showagendagrammarbox"  onClick={toggleGridVisibility}>

        {isGridVisible ? 'Hide Grammar' : 'Show Grammar'}<FaAngleDown /></div>
          

          {isGridVisible && (
            <div className="grammar-display-grid">
              <GrammarExplanation />
            </div>
          )}
        


                      <div>
                          <div className="agenda-display-grid">
                            <GrammarExercises />
                          </div>
                      </div>
        </div>
        <div className="top-margin">
          <ActivityFilter />
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default ToBe;
