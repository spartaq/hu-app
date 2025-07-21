import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/second-cond-prodexplanation';
import mainimage from '../../Images/second-cond-prod.jpg';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "second-cond-prod" },
];

const SecondCondProd = () => (
  <GrammarPageLayout
    level="A1"
    title="Second Cond Prod"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Second Cond Prod"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="A1"
  />
);

export default SecondCondProd;