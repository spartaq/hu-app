
import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/simplepresentexplanation';
import mainimage from '../../Images/simppres1.jpg';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "simple-present" },
  { label: "Exercises", description: "Do this exercise to practice grammar.", type: "quiz", subtype: "simplepresent" },
  { label: "Reading", description: "Do this exercise to practice reading and learn new vocabulary.", type: "reading", subtype: "simplepresent" },
];

const SimplePresent = () => (
  <GrammarPageLayout
    level="A1"
    title="Simple Present"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Simple Present"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="A1"
  />
);

export default SimplePresent;

