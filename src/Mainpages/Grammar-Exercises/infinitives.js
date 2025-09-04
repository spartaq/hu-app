

import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/infinitiveexplanation';
import mainimage from '../../Images/infinitives1.webp';


const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "infinitives" },
];

const Infinitives = () => (
  <GrammarPageLayout
    level="B2"
    title="Infinitives"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Infinitives"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="B2"
  />
);



export default Infinitives;

