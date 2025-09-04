
import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/secondcondexplanation';
import mainimage from '../../Images/secondcond1.webp';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "second-conditional" },
  { label: "Exercises", description: "Do this exercise to practice grammar.", type: "quiz", subtype: "secondcond" },
];

const SecondConditional = () => (
  <GrammarPageLayout
    level="B2"
    title="Second Conditional"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Second Conditional"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="B2"
  />
);

export default SecondConditional;

