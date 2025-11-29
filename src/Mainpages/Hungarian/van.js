import React from 'react';
import GrammarPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/vanintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "explanation", subtype: "van" },
  { label: "Dialogue", type: "dialogue", subtype: "van" },
  { label: "Vocab", type: "vocab", subtype: "van" },
  { label: "Exercises", type: "quiz", subtype: "van" },
  { label: "Grammar", type: "grammar", subtype: "jelenidoindef" },
  { label: "Word Order", type: "ordering", subtype: "van" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
];

const Van = () => (
  <GrammarPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Van (There is/are)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Van;
