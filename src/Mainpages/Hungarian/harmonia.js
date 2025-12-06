import React from 'react';
import ModalPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/harmoniaintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "grammarexplanation", subtype: "harmonia" },
  { label: "Dialogue", type: "dialogue", subtype: "harmonia" },
  { label: "Image Match", type: "imagematch", subtype: "harmonia" },
  { label: "Vocab", type: "vocabmatch", subtype: "harmonia" },  
  { label: "Audio Match", type: "audiowordmatch", subtype: "harmonia" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "harmonia" },
  
{ label: "Exercises", type: "grammarquiz", subtype: "harmonia" },
  { label: "Word Order", type: "ordering", subtype: "harmonia" },
  { label: "Reading", type: "reading", subtype: "basicphrases" },
  { label: "Video", type: "video", subtype: "basicphrases" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "harmonia" },
];

const Harmonia = () => (
  <ModalPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Harmonia (Vowel Agreement)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Harmonia;
