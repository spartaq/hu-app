

import mainimage from '../../Images/obligation1.jpg';
import GrammarExplanation from '../../Components/GrammarExplanationComps/someanyexplanation.js';
import GrammarPageLayout from '../../Components/GrammarPageLayout';

const sections = [
 
  { label: "Exercises", description: "Do this exercise to practice grammar.", type: "quiz", subtype: "someany" },
];

const Someany = () => (
  <GrammarPageLayout
    level="A1"
    title="Some, any"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Countable uncountable soem any"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="A1"
  />
);

export default Someany;

