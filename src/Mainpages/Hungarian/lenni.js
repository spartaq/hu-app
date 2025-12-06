import React from 'react';
import ModalPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/lenniintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Grammar Explanation", type: "grammarexplanation", subtype: "lenni" },
  { label: "Dialogue", type: "dialogue", subtype: "lenni" },
  { label: "Image Match", type: "imagematch", subtype: "lenni" },
  { label: "Audio Match", type: "audiowordmatch", subtype: "lenni" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "lenni" },
  { label: "Vocabulary Match", type: "vocabmatch", subtype: "lenni" },  
  { label: "Exercises", type: "grammarquiz", subtype: "lenni" },
  { label: "Word Order", type: "ordering", subtype: "lenni" },
  { label: "Reading", type: "reading", subtype: "basicphrases" },
  { label: "Video", type: "video", subtype: "basicphrases" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "lenni" },
];

const Lenni = () => (
  <ModalPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Lenni (To Be)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Lenni;
