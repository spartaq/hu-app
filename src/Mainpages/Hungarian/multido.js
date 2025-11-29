
import React from 'react';
import GrammarPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/multintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "explanation", subtype: "mult" },
  { label: "Dialogue", type: "dialogue", subtype: "mult" },
  { label: "Vocab", type: "vocab", subtype: "mult" },
  { label: "Exercises", type: "quiz", subtype: "mult" },
  { label: "Grammar", type: "grammar", subtype: "jelenidoindef" },
  { label: "Word Order", type: "ordering", subtype: "van" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
];

const Multido = () => (
  <GrammarPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Multidő (Past Tense)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Multido;

