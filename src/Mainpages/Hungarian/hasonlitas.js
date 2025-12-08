import React from 'react';
import ModalPageLayout from '../../Components/LessonModalLayout';
import GrammarExplanation from './HungarianIntros/hasonlitasintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "grammarexplanation", subtype: "hasonlitas" },
  { label: "Dialogue", type: "dialogue", subtype: "hasonlitas" },
  { label: "Image Match", type: "imagematch", subtype: "hasonlitas" },
  { label: "Vocab", type: "vocabmatch", subtype: "hasonlitas" },  
  { label: "Audio Match", type: "audiowordmatch", subtype: "hasonlitas" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "hasonlitas" },
  
{ label: "Exercises", type: "grammarquiz", subtype: "hasonlitas" },
  { label: "Word Order", type: "ordering", subtype: "hasonlitas" },
  { label: "Reading", type: "reading", subtype: "basicphrases" },
  { label: "Video", type: "video", subtype: "basicphrases" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "hasonlitas" },
];

const Hasonlitas = () => (
  <ModalPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Összehasonlítás (Comparison)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Hasonlitas;
