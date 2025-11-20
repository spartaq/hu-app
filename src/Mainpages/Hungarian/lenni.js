import React from 'react';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from './HungarianExplanations/lenniexplanation';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Dialogue", description: "Do this exercise to practice listening.", type: "dialogue", subtype: "testDialogue" },
  { label: "Vocab", description: "Do this exercise to practice vocab.", type: "vocab", subtype: "verbs" },
  { label: "Exercises", description: "Do this exercise to practice your grammar.", type: "quiz", subtype: "van" },
  { label: "Grammar", description: "Do this exercise to practice word order.", type: "grammar", subtype: "hasonlitas" },
  { label: "Word Order", description: "Do this exercise to practice word order.", type: "ordering", subtype: "van" },
  { label: "Reading", description: "Do this exercise to practice reading and learn new vocabulary.", type: "reading", subtype: "nevem-bob" },
  { label: "Video", description: "Do this exercise to practice reading and learn new vocabulary.", type: "video", subtype: "videos" },
];

const Lenni = () => (
  <GrammarPageLayout
    level="HU1"
    title="Lenni (To Be)"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Lenni (To Be)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
    relatedCategory="hungarian"
    relatedLevel="HU1"
  />
);

export default Lenni;
