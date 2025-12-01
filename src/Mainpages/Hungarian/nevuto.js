import React from 'react';
import GrammarPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/nevutointro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "grammarexplanation", subtype: "nevuto" },
  { label: "Dialogue", type: "dialogue", subtype: "nevuto" },
  { label: "Vocab", type: "vocabmatch", subtype: "nevuto" },
  
{ label: "Exercises", type: "grammarquiz", subtype: "nevuto" },
  { label: "Word Order", type: "ordering", subtype: "van" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "nevuto" },
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
