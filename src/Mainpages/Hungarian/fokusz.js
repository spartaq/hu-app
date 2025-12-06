import React from 'react';
import ModalPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/fokuszintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "grammarexplanation", subtype: "fokusz" },
  { label: "Dialogue", type: "dialogue", subtype: "fokusz" },
  { label: "Image Match", type: "imagematch", subtype: "fokusz" },
  { label: "Vocab", type: "vocabmatch", subtype: "fokusz" },  
  { label: "Audio Match", type: "audiowordmatch", subtype: "fokusz" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "fokusz" },  
{ label: "Exercises", type: "grammarquiz", subtype: "fokusz" },
  { label: "Word Order", type: "ordering", subtype: "fokusz" },
  { label: "Reading", type: "reading", subtype: "basicphrases" },
  { label: "Video", type: "video", subtype: "basicphrases" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "fokusz" },
];

const Fokusz = () => (
  <ModalPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Fokusz (Word Order)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Fokusz;
