import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from './HungarianExplanations/jelenidoindefexplanation';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Vocab", description: "Do this exercise to practice vocab.", type: "vocab", subtype: "verbs" },
  { label: "Exercises", description: "Do this exercise to practice your grammar.", type: "quiz", subtype: "jelenidoindef" },
  { label: "Grammar", description: "Do this exercise to practice word order.", type: "grammar", subtype: "jelenidoindef" },
  { label: "Gap Fill", description: "Do this exercise to practice word order.", type: "gapfill", subtype: "jelenidoindef" },
  { label: "Word Order", description: "Do this exercise to practice word order.", type: "ordering", subtype: "jelenidoindef" },
  { label: "Reading", description: "Do this exercise to practice reading and learn new vocabulary.", type: "reading", subtype: "nevem-bob" },
  { label: "Video", description: "Do this exercise to practice reading and learn new vocabulary.", type: "video", subtype: "spotify" },
];

const Jelenidoindef = () => (
  <GrammarPageLayout
    level="HU1"
    title="Jelenidő Alanyi (Indefinite Present Tense)"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Jelenidő Alanyi (Indefinite Present Tense)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
    relatedCategory="hungarian"
    relatedLevel="HU1"
  />
);

export default Jelenidoindef;
