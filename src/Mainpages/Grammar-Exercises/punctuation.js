
import mainimage from '../../Images/enough1.jpg';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/punctuationexplanation.js';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "quiz", subtype: "punctuation" },
];

const Punctuation = () => (
  <GrammarPageLayout
    level="B2"
    title="Punctuation"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Punctuation"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="B2"
  />
);

export default Punctuation;

