import React from 'react';
import GrammarPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/harmoniaintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "explanation", subtype: "harmonia" },
  { label: "Dialogue", type: "dialogue", subtype: "harmonia" },
  { label: "Vocab", type: "vocabmatch", subtype: "harmonia" },
  
{ label: "Exercises", type: "grammarquiz", subtype: "harmonia" },
  { label: "Word Order", type: "ordering", subtype: "van" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "harmonia" },
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
