import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/presentperfectexplanation';
import mainimage from '../../Images/presperf.png';

const sections = [
  { label: "Exercises", description: "Do this exercise to practice your grammar.", type: "quiz", subtype: "presentperfect" },
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "present-perfect" },
  { label: "Reading", description: "Do this exercise to practice reading and learn new vocabulary.", type: "reading", subtype: "essityaccount" },
];

const PresentPerfect = () => (
  <GrammarPageLayout
    level="B1"
    title="Present Perfect"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Present Perfect"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="B1"
  />
);

export default PresentPerfect;