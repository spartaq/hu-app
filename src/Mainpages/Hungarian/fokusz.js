import React from 'react';
import GrammarPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/fokuszintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "grammarexplanation", subtype: "fokusz" },
  { label: "Dialogue", type: "dialogue", subtype: "fokusz" },
  { label: "Vocab", type: "vocabmatch", subtype: "fokusz" },
  
{ label: "Exercises", type: "grammarquiz", subtype: "fokusz" },
  { label: "Word Order", type: "ordering", subtype: "van" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "fokusz" },
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
