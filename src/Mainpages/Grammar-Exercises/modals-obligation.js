

import mainimage from '../../Images/obligation1.jpg';
import GrammarExplanation from '../../Components/GrammarExplanationComps/modalsobligationexplanation.js';
import GrammarPageLayout from '../../Components/GrammarPageLayout';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "simple-past" },
  { label: "Exercises", description: "Do this exercise to practice grammar.", type: "quiz", subtype: "obligation" },
  { label: "Reading", description: "Do this exercise to practice reading and learn new vocabulary.", type: "reading", subtype: "simplepast" },
];

const ModalsObligation = () => (
  <GrammarPageLayout
    level="B2"
    title="Modals Obligation"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Modals Obligation"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="B2"
  />
);

export default ModalsObligation;

