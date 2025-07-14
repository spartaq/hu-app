import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/thirdcondexplanation';
import mainimage from '../../Images/thirdcond1.jpg';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "third-conditional" },
];

const ThirdConditional = () => (
  <GrammarPageLayout
    level="C1"
    title="Third Conditional"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Third Conditional"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="C1"
  />
);

export default ThirdConditional;