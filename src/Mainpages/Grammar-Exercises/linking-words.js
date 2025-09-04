
import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/linkingwordsexplanation';
import mainimage from '../../Images/linkingwords1.jpg';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "linking-words" },
];

const LinkingWords = () => (
  <GrammarPageLayout
    level="C1"
    title="Linking Words"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Linking Words"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="C1"
  />
);

export default LinkingWords;

