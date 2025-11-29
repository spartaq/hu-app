import React from 'react';
import GrammarPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/nekivanintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "explanation", subtype: "nekivan" },
  { label: "Dialogue", type: "dialogue", subtype: "nekivan" },
  { label: "Vocab", type: "vocab", subtype: "nekivan" },
  { label: "Exercises", type: "quiz", subtype: "nekivan" },
  { label: "Grammar", type: "grammar", subtype: "jelenidoindef" },
  { label: "Word Order", type: "ordering", subtype: "van" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
];

const Nekivan = () => (
  <GrammarPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Neki Van (Have)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Nekivan;
