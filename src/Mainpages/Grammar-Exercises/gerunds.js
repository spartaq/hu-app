import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/gerundexplanation';
<<<<<<< HEAD
import RelatedExercises from '../../Utils/relatedExercises.js';
=======
import mainimage from '../../Images/gerunds1.jpg';
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "gerunds" },
];

const Gerunds = () => (
  <GrammarPageLayout
    level="B2"
    title="Gerunds"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Gerunds"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="B2"
  />
);

<<<<<<< HEAD
const Gerunds = () => {
  
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
        title="Grammar Exercises - Gerunds"
        description="A big list of English grammar exercises to practice for exams"
        name="English Exam Exercises"
        type="article"
      />
      <Breadcrumbs />

      <div className="grammar-container">
 
      <div>
        <div className="grammartitle">
            <span className="label label-b2">B2</span>
            <h3 className="mt-2">Gerunds</h3>
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


export default Gerunds;

		
=======
export default Gerunds;
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
