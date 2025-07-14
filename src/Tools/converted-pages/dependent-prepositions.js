import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/dependent-prepositionsexplanation';
import mainimage from '../../Images/dependent-prepositions.jpg';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "dependent-prepositions" },
];

const DependentPrepositions = () => (
  <GrammarPageLayout
    level="A1"
    title="Dependent Prepositions"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Dependent Prepositions"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="A1"
  />
);

export default DependentPrepositions;