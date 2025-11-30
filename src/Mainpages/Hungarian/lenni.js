import React from 'react';
import ModalLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/lenniintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Grammar Explanation", type: "explanation", subtype: "lenni" },
  { label: "Dialogue", type: "dialogue", subtype: "lenni" },
  { label: "Image Match - vocabulary", type: "imagematch", subtype: "lenni" },
  { label: "Audio Match", type: "audiowordmatch", subtype: "lenni" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "lenni" },
  { label: "Vocabulary Match", type: "vocabmatch", subtype: "lenni" },
  
{ label: "Exercises", type: "grammarquiz", subtype: "lenni" },
  { label: "Word Order", type: "ordering", subtype: "lenni" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "spotify" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "lenni" },
];

const Lenni = () => (
  <ModalLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Lenni (To Be)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Lenni;
