import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from './HungarianIntros/lenniintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "explanation", subtype: "lenni" },
  { label: "Dialogue", type: "dialogue", subtype: "lenni" },
  { label: "Vocab", type: "vocab", subtype: "mult" },
  { label: "Exercises", type: "quiz", subtype: "lenni" },
  { label: "Grammar", type: "grammar", subtype: "jelenidoindef" },
  { label: "Word Order", type: "ordering", subtype: "lenni" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
];

const Lenni = () => (
  <GrammarPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Lenni (To Be)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Lenni;
