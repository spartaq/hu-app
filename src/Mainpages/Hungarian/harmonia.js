import React from 'react';
import GrammarPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/harmoniaintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "explanation", subtype: "harmonia" },
  { label: "Dialogue", type: "dialogue", subtype: "harmonia" },
  { label: "Vocab", type: "vocab", subtype: "harmonia" },
  { label: "Exercises", type: "quiz", subtype: "harmonia" },
  { label: "Grammar", type: "grammar", subtype: "jelenidoindef" },
  { label: "Word Order", type: "ordering", subtype: "van" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
];

const Harmonia = () => (
  <GrammarPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Harmonia (Vowel Agreement)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Harmonia;
