
import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/secondcondexplanation';
import mainimage from '../../Images/secondcondprod1.jpg';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "second-cond-prod" },
];

const SecondCondProd = () => (
  <GrammarPageLayout
    level="B2"
    title="Second Cond Prod"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Second Cond Prod"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="B2"
  />
);

export default SecondCondProd;

