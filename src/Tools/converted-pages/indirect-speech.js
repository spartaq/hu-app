import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/indirect-speechexplanation';
import mainimage from '../../Images/indirect-speech.jpg';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "indirect-speech" },
];

const IndirectSpeech = () => (
  <GrammarPageLayout
    level="A1"
    title="Indirect Speech"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Indirect Speech"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="A1"
  />
);

export default IndirectSpeech;