
import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/wordformsexplanation';
import mainimage from '../../Images/wordforms1.png';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "word-forms" },
];

const WordForms = () => (
  <GrammarPageLayout
    level="B2"
    title="Word Forms"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Word Forms"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="B2"
  />
);

export default WordForms;

