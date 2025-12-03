
import React from 'react';
import ModalPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/multintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "grammarexplanation", subtype: "mult" },
  { label: "Dialogue", type: "dialogue", subtype: "mult" },
  { label: "Image Match", type: "imagematch", subtype: "mult" },
  { label: "Vocab", type: "vocabmatch", subtype: "mult" },  
  { label: "Audio Match", type: "audiowordmatch", subtype: "mult" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "birtmultoklas" },
  
{ label: "Exercises", type: "grammarquiz", subtype: "mult" },
  { label: "Word Order", type: "ordering", subtype: "mult" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "mult" },
];

const Multido = () => (
  <ModalPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Multidő (Past Tense)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Multido;

