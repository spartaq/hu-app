import React from 'react';
import ModalPageLayout from '../../Components/LessonModalLayout';
import GrammarExplanation from './HungarianIntros/jovointro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "grammarexplanation", subtype: "jovo" },
  { label: "Dialogue", type: "dialogue", subtype: "jovo" },
  { label: "Image Match", type: "imagematch", subtype: "jovo" },
  { label: "Vocab", type: "vocabmatch", subtype: "jovo" },  
  { label: "Audio Match", type: "audiowordmatch", subtype: "jovo" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "jovo" },
  
{ label: "Exercises", type: "grammarquiz", subtype: "jovo" },
  { label: "Word Order", type: "ordering", subtype: "jovo" },
  { label: "Reading", type: "reading", subtype: "basicphrases" },
  { label: "Video", type: "video", subtype: "basicphrases" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "jovo" },
];

const Jovoido = () => (
  <ModalPageLayout
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
