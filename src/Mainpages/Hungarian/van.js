import React from 'react';
import ModalPageLayout from '../../Components/LessonModalLayout';
import GrammarExplanation from './HungarianIntros/vanintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "grammarexplanation", subtype: "van" },
  { label: "Dialogue", type: "dialogue", subtype: "van" },
  { label: "Image Match", type: "imagematch", subtype: "van" },
  { label: "Audio Match", type: "audiowordmatch", subtype: "van" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "van" },
  { label: "Vocabulary Match", type: "vocabmatch", subtype: "van" },
  
{ label: "Exercises", type: "grammarquiz", subtype: "van" },
  { label: "Word Order", type: "ordering", subtype: "van" },
  { label: "Reading", type: "reading", subtype: "basicphrases" },
  { label: "Video", type: "video", subtype: "basicphrases" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "van" },
];

const Van = () => (
  <ModalPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Van (There is/are)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Van;
