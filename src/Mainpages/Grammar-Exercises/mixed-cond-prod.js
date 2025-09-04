
import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/mixedconditionalsexplanation';
import mainimage from '../../Images/mixedcond1.jpg';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "mixed-cond-prod" },
];

const MixedCondProd = () => (
  <GrammarPageLayout
    level="B2"
    title="Mixed Cond Prod"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Mixed Cond Prod"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="B2"
  />
);

export default MixedCondProd;

