
import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/firstcondexplanation';
import mainimage from '../../Images/firstcondprod1.jpg';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "first-cond-prod" },
];

const FirstCondProd = () => (
  <GrammarPageLayout
    level="B1"
    title="First Cond Prod"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - First Cond Prod"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="B1"
  />
);

export default FirstCondProd;

