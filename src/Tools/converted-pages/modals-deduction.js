import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/modals-deductionexplanation';
import mainimage from '../../Images/modals-deduction.jpg';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "modals-deduction" },
];

const ModalsDeduction = () => (
  <GrammarPageLayout
    level="A1"
    title="Modals Deduction"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Modals Deduction"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="A1"
  />
);

export default ModalsDeduction;