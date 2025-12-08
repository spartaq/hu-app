import React from 'react';
import ModalPageLayout from '../../Components/LessonModalLayout';
import GrammarExplanation from './HungarianIntros/intro_basicquestions';
import mainimage from '../../Images/apples.jpg';

const sections = [
  { label: "Explanation", type: "grammarexplanation", subtype: "basicquestions" },
  { label: "Dialogue", type: "dialogue", subtype: "basicquestions" },
  { label: "Vocab", type: "vocabmatch", subtype: "basicquestions" },
  { label: "Image Match", type: "imagematch", subtype: "basicquestions" },
  { label: "Audio Match", type: "audiowordmatch", subtype: "basicquestions" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "basicquestions" },
  { label: "Exercises", type: "grammarquiz", subtype: "basicquestions" },
  { label: "Word Order", type: "ordering", subtype: "basicquestions" },
  { label: "Reading", type: "reading", subtype: "basicphrases" },
  { label: "Video", type: "video", subtype: "basicphrases" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "basicquestions" },
];

const basicquestions = () => (
  <ModalPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - basicquestions"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default basicquestions;
