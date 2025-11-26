import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from './HungarianIntros/nevutointro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "explanation", subtype: "nevuto" },
  { label: "Dialogue", type: "dialogue", subtype: "nevuto" },
  { label: "Vocab", type: "vocab", subtype: "nevuto" },
  { label: "Exercises", type: "quiz", subtype: "nevuto" },
  { label: "Grammar", type: "grammar", subtype: "jelenidoindef" },
  { label: "Word Order", type: "ordering", subtype: "van" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
];

const Nevuto = () => (
  <GrammarPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Névútó (Pronouns)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Nevuto;
