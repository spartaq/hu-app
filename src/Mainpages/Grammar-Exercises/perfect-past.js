import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/perfectpastexplanation';
import mainimage from '../../Images/pastperf1.jpg';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "perfect-past" },
];

const PerfectPast = () => (
  <GrammarPageLayout
    level="B1"
    title="Perfect Past"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Present Perfect or Simple Past"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="B1"
  />
);

export default PerfectPast;