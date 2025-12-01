import React from 'react';
import GrammarPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/nekivanintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "grammarexplanation", subtype: "nekivan" },
  { label: "Dialogue", type: "dialogue", subtype: "nekivan" },
  { label: "Image Match - vocabulary", type: "imagematch", subtype: "nekivan" },
  { label: "Audio Match", type: "audiowordmatch", subtype: "nekivan" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "nekivan" },
  { label: "Vocab", type: "vocabmatch", subtype: "nekivan" },
  
{ label: "Exercises", type: "grammarquiz", subtype: "nekivan" },
  { label: "Word Order", type: "ordering", subtype: "nekivan" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "nekivan" },
];

const Nekivan = () => (
  <GrammarPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Neki Van (Have)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Nekivan;
