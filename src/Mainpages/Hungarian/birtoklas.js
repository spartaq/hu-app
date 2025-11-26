import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from './HungarianIntros/birtoklasintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "explanation", subtype: "birtoklas" },
  { label: "Dialogue", type: "dialogue", subtype: "birtoklas" },
  { label: "Vocab", type: "vocab", subtype: "birtoklas" },
  { label: "Exercises", type: "quiz", subtype: "birtoklas" },
  { label: "Grammar", type: "grammar", subtype: "jelenidoindef" },
  { label: "Word Order", type: "ordering", subtype: "van" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
];

const Birtoklas = () => (
  <GrammarPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Birtoklás (Possessive)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Birtoklas;
