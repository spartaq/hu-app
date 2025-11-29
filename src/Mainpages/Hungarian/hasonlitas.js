import React from 'react';
import GrammarPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/hasonlitasintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "explanation", subtype: "hasonlitas" },
  { label: "Dialogue", type: "dialogue", subtype: "hasonlitas" },
  { label: "Vocab", type: "vocab", subtype: "hasonlitas" },
  { label: "Exercises", type: "quiz", subtype: "hasonlitas" },
  { label: "Grammar", type: "grammar", subtype: "jelenidoindef" },
  { label: "Word Order", type: "ordering", subtype: "van" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
];

const Hasonlitas = () => (
  <GrammarPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Összehasonlítás (Comparison)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Hasonlitas;
