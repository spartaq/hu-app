import React from 'react';
import ModalPageLayout from '../../Components/LessonModalLayout';
import GrammarExplanation from './HungarianIntros/nevutointro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "grammarexplanation", subtype: "nevuto" },
  { label: "Dialogue", type: "dialogue", subtype: "nevuto" },
  { label: "Image Match", type: "imagematch", subtype: "nevuto" },
  { label: "Vocab", type: "vocabmatch", subtype: "nevuto" },  
  { label: "Audio Match", type: "audiowordmatch", subtype: "nevuto" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "nevuto" },
  
{ label: "Exercises", type: "grammarquiz", subtype: "nevuto" },
  { label: "Word Order", type: "ordering", subtype: "nevuto" },
  { label: "Reading", type: "reading", subtype: "basicphrases" },
  { label: "Video", type: "video", subtype: "basicphrases" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "nevuto" },
];

const Nevuto = () => (
  <ModalPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Névútó (Postpositions)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Nevuto;
