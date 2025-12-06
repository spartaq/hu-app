import React from 'react';
import ModalPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/intro_sounds';
import mainimage from '../../Images/neighbor2-sc.jpg';

const sections = [
  { label: "Grammar Explanation", type: "grammarexplanation", subtype: "sounds" },
  { label: "Dialogue", type: "dialogue", subtype: "soundsall" },
  { label: "Dialogue", type: "dialogue", subtype: "soundsvowels" },
  { label: "Vocab Match", type: "vocabmatch", subtype: "sounds" },
  { label: "Dialogue", type: "dialogue", subtype: "soundsconsonants" },
  { label: "Image Match", type: "imagematch", subtype: "sounds" },
  { label: "Audio Match", type: "audiowordmatch", subtype: "sounds" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "sounds" },
  { label: "Grammar Exercises", type: "grammarquiz", subtype: "sounds" },
  { label: "Word Order", type: "ordering", subtype: "sounds" },
  { label: "Reading", type: "reading", subtype: "basicphrases" },
  { label: "Video", type: "video", subtype: "basicphrases" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "sounds" },
];

const sounds = () => (
  <ModalPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - sounds"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default sounds;
