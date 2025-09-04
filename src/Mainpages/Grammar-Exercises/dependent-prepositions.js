
import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/dependentprepositionsexplanation';
import mainimage from '../../Images/dependentpreps1.jpg';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "dependent-prepositions" },
];

const DependentPrepositions = () => (
  <GrammarPageLayout
    level="B2"
    title="Dependent Prepositions"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Dependent Prepositions"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="B2"
  />
);

export default DependentPrepositions;

