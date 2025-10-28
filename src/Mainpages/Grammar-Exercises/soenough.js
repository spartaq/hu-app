
import mainimage from '../../Images/enough1.jpg';
import { FaAngleDown } from "react-icons/fa";
import RelatedExercises from '../../Utils/relatedExercises.js';
import GrammarExercises from '../../Components/GrammarExerciseComps/soenoughexercisescomp.js';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/soenoughexplanation.js';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "quiz", subtype: "soenough" },
];

const Soenough = () => (
  <GrammarPageLayout
    level="B2"
    title="Soenough"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Soenough"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="B2"
  />
);

export default Soenough;

