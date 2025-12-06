import React from 'react';
import ModalPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/birtoklasintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "grammarexplanation", subtype: "birtoklas" },
  { label: "Dialogue", type: "dialogue", subtype: "birtoklas" },
  { label: "Image Match", type: "imagematch", subtype: "birtoklas" },
  { label: "Vocab", type: "vocabmatch", subtype: "birtoklas" },  
  { label: "Audio Match", type: "audiowordmatch", subtype: "birtoklas" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "birtoklas" },
  { label: "Exercises", type: "grammarquiz", subtype: "birtoklas" },
  { label: "Word Order", type: "ordering", subtype: "birtoklas" },
  { label: "Reading", type: "reading", subtype: "basicphrases" },
  { label: "Video", type: "video", subtype: "basicphrases" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "birtoklas" },
];

const Birtoklas = () => (
  <ModalPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Birtoklás (Possessive)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Birtoklas;
