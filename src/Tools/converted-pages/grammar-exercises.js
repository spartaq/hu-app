import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/grammar-exercisesexplanation';
import mainimage from '../../Images/grammar-exercises.jpg';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "grammar-exercises" },
];

const GrammarExercises = () => (
  <GrammarPageLayout
    level="A1"
    title="Grammar Exercises"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Grammar Exercises"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="A1"
  />
);

export default GrammarExercises;