import React from 'react';
import GrammarPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/jovointro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "explanation", subtype: "jovo" },
  { label: "Dialogue", type: "dialogue", subtype: "jovo" },
  { label: "Vocab", type: "vocabmatch", subtype: "jovo" },
  { label: "Exercises", type: "quiz", subtype: "jovo" },
  { label: "Grammar", type: "grammar", subtype: "jovo" },
  { label: "Word Order", type: "ordering", subtype: "jovo" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "jovo" },
];

const Jovoido = () => (
  <GrammarPageLayout
    level="HU1"
    title="Jövőidő (Future Tense)"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Jövőidő (Future Tense)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
    relatedCategory="hungarian"
    relatedLevel="HU1"
  />
);

export default Jovoido;
