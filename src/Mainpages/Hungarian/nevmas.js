import React from 'react';
import GrammarPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/nevmasintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "explanation", subtype: "nevmas" },
  { label: "Dialogue", type: "dialogue", subtype: "nevmas" },
  { label: "Vocab", type: "vocabmatch", subtype: "nevmas" },
  { label: "Exercises", type: "quiz", subtype: "nevmas" },
  { label: "Word Order", type: "ordering", subtype: "van" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "nevmas" },
];

const Nevmas = () => (
  <GrammarPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Névmás (Pronouns)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Nevmas;
