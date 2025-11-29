import React from 'react';
import GrammarPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/birtoklasintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "explanation", subtype: "birtoklas" },
  { label: "Dialogue", type: "dialogue", subtype: "birtoklas" },
  { label: "Vocab", type: "vocabmatch", subtype: "birtoklas" },
  { label: "Exercises", type: "quiz", subtype: "birtoklas" },
  { label: "Word Order", type: "ordering", subtype: "birtoklas" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
];

const Birtoklas = () => (
  <GrammarPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Birtoklás (Possessive)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Birtoklas;
