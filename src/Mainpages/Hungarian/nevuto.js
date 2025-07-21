import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from './HungarianExplanations/nevutoexplanation';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Vocab", description: "Do this exercise to practice vocab.", type: "vocab", subtype: "verbs" },
  { label: "Exercises", description: "Do this exercise to practice your grammar.", type: "quiz", subtype: "nevuto" },
  { label: "Grammar", description: "Do this exercise to practice word order.", type: "grammar", subtype: "hasonlitas" },
  { label: "Gap Fill", description: "Do this exercise to practice word order.", type: "gapfill", subtype: "business" },
  { label: "Word Order", description: "Do this exercise to practice word order.", type: "ordering", subtype: "jelenidoindef" },
  { label: "Reading", description: "Do this exercise to practice reading and learn new vocabulary.", type: "reading", subtype: "readings" },
  { label: "Video", description: "Do this exercise to practice reading and learn new vocabulary.", type: "video", subtype: "videos" },
];

const Nevuto = () => (
  <GrammarPageLayout
    level="HU1"
    title="Névútó (Pronouns)"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Névútó (Pronouns)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
    relatedCategory="hungarian"
    relatedLevel="HU1"
  />
);

export default Nevuto;
