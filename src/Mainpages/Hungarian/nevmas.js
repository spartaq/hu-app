import React from 'react';
import ModalPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/nevmasintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "grammarexplanation", subtype: "nevmas" },
  { label: "Dialogue", type: "dialogue", subtype: "nevmas" },
  { label: "Vocab", type: "vocabmatch", subtype: "nevmas" }, 
  { label: "Image Match", type: "imagematch", subtype: "nevmas" }, 
  { label: "Audio Match", type: "audiowordmatch", subtype: "nevmas" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "nevmas" },
{ label: "Exercises", type: "grammarquiz", subtype: "nevmas" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "nevmas" },
];

const Nevmas = () => (
  <ModalPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Névmás (Pronouns)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Nevmas;
