import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from './HungarianIntros/fokuszintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "explanation", subtype: "fokusz" },
  { label: "Dialogue", type: "dialogue", subtype: "birtoklas" },
  { label: "Vocab", type: "vocab", subtype: "mult" },
  { label: "Exercises", type: "quiz", subtype: "birtoklas" },
  { label: "Grammar", type: "grammar", subtype: "jelenidoindef" },
  { label: "Word Order", type: "ordering", subtype: "van" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
];

const Fokusz = () => (
  <GrammarPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Fokusz (Word Order)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Fokusz;
