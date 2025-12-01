import React from 'react';
import GrammarPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/intro_irregularverbs';
import mainimage from '../../Images/bed.jpg';

const sections = [
  { label: "Explanation", type: "grammarexplanation", subtype: "irregularverbs" },
  { label: "Dialogue", type: "dialogue", subtype: "irregularverbs" },
  { label: "Vocab", type: "vocabmatch", subtype: "irregularverbs" },
  { label: "Audio Match", type: "audiowordmatch", subtype: "irregularverbs" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "irregularverbs" },
  { label: "Exercises", type: "grammarquiz", subtype: "irregularverbs" },
  { label: "Word Order", type: "ordering", subtype: "irregularverbs" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "irregularverbs" },
];

const irregularverbs = () => (
  <GrammarPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - irregularverbs"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default irregularverbs;
