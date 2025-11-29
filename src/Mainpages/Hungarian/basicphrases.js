import React from 'react';
import GrammarPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/intro_basicphrases';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "explanation", subtype: "basicphrases" },
  { label: "Dialogue", type: "dialogue", subtype: "basicphrases" },
  { label: "Vocab", type: "vocabmatch", subtype: "basicphrases" },
  { label: "Audio Match", type: "audiowordmatch", subtype: "basicphrases" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "lenni" },
  { label: "Exercises", type: "quiz", subtype: "birtoklas" },
  { label: "Word Order", type: "ordering", subtype: "basicphrases" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
];

const BasicPhrases = () => (
  <GrammarPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Basic Phrases"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default BasicPhrases;
