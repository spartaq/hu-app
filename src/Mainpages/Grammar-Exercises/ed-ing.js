
import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/edingexplanation';
import mainimage from '../../Images/eding1.jpg';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "ed-ing" },
];


const EdIng = () => (
  <GrammarPageLayout
    level="B2"
    title="Ed Ing"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Ed Ing"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="B2"
  />
);

export default EdIng;