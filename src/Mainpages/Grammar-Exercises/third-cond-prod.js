import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/thirdcondexplanation';
import mainimage from '../../Images/thirdcondprod1.jpg';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "third-cond-prod" },
];

const ThirdCondProd = () => (
  <GrammarPageLayout
    level="C1"
    title="Third Cond Prod"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Third Cond Prod"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="C1"
  />
);

export default ThirdCondProd;