import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/third-cond-prodexplanation';
import mainimage from '../../Images/third-cond-prod.jpg';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "third-cond-prod" },
];

const ThirdCondProd = () => (
  <GrammarPageLayout
    level="A1"
    title="Third Cond Prod"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Third Cond Prod"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="A1"
  />
);

export default ThirdCondProd;