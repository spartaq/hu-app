import React from 'react';
import ModalPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/intro_numbers';
import mainimage from '../../Images/500-forints.jpg';

const sections = [
  { label: "Explanation", type: "grammarexplanation", subtype: "numbers" },
  { label: "Dialogue", type: "dialogue", subtype: "numbers" },
  { label: "Vocab", type: "vocabmatch", subtype: "numbers" },
  { label: "Image Match", type: "imagematch", subtype: "numbers" },
  { label: "Audio Match", type: "audiowordmatch", subtype: "numbers" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "numbers" },
  { label: "Exercises", type: "grammarquiz", subtype: "numbers" },
  { label: "Word Order", type: "ordering", subtype: "numbers" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "numbers" },
];

const Numbers = () => (
  <ModalPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Numbers"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Numbers;
