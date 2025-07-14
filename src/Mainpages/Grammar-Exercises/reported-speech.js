import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/reportedspeechexplanation';
import mainimage from '../../Images/reportedspeech1.png';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "reported-speech" },
];

const ReportedSpeech = () => (
  <GrammarPageLayout
    level="B2"
    title="Reported Speech"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Reported Speech"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="B2"
  />
);

export default ReportedSpeech;