import React from 'react';
import ModalPageLayout from '../../Components/LessonModalLayout';
import GrammarExplanation from './HungarianIntros/intro_sounds';
import mainimage from '../../Images/neighbor2-sc.jpg';

const sections = [
  { label: "Grammar Explanation", type: "grammarexplanation", subtype: "sounds" },
  { label: "Alphabet", type: "sounds", subtype: "alphabet" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "soundsVowels" },
  { label: "Audio Match", type: "audiowordmatch", subtype: "sounds" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "soundsConsonants" },
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
