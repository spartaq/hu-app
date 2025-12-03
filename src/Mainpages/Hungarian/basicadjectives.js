import React from 'react';
import ModalPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/intro_basicadjectives';
import mainimage from '../../Images/villamos.jpg';

const sections = [
  { label: "Explanation", type: "grammarexplanation", subtype: "basicadjectives" },
  { label: "Dialogue", type: "dialogue", subtype: "basicadjectives" },
  { label: "Image Match", type: "imagematch", subtype: "basicadjectives" },
  { label: "Vocab", type: "vocabmatch", subtype: "basicadjectives" },
  { label: "Audio Match", type: "audiowordmatch", subtype: "basicadjectives" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "basicadjectives" },
  { label: "Exercises", type: "grammarquiz", subtype: "basicadjectives" },
  { label: "Word Order", type: "ordering", subtype: "basicadjectives" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "basicadjectives" },
];

const basicadjectives = () => (
  <ModalPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - basicadjectives"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default basicadjectives;
