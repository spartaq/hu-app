import React from 'react';
import ModalPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/intro_basicphrases';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "grammarexplanation", subtype: "basicphrases" },
  { label: "Dialogue", type: "dialogue", subtype: "basicphrases" },
  { label: "Image Match", type: "imagematch", subtype: "basicphrases" },
  { label: "Vocab", type: "vocabmatch", subtype: "basicphrases" },
  { label: "Audio Match", type: "audiowordmatch", subtype: "basicphrases" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "basicphrases" },
  { label: "Exercises", type: "grammarquiz", subtype: "basicphrases" },
  { label: "Word Order", type: "ordering", subtype: "basicphrases" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "basicphrases" },
];

const BasicPhrases = () => (
  <ModalPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Basic Phrases"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default BasicPhrases;
