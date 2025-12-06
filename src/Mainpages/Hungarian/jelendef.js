
import React from 'react';
import ModalPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/jelendefintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "grammarexplanation", subtype: "jelendef" },
  { label: "Dialogue", type: "dialogue", subtype: "jelendef" },
  { label: "Vocab", type: "vocabmatch", subtype: "jelendef" },
  { label: "Image Match", type: "imagematch", subtype: "jelendef" },
  { label: "Audio Match", type: "audiowordmatch", subtype: "jelendef" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "jelendef" },  
  { label: "Exercises", type: "grammarquiz", subtype: "jelendef" },
  { label: "Word Order", type: "ordering", subtype: "jelendef" },
  { label: "Reading", type: "reading", subtype: "basicphrases" },
  { label: "Video", type: "video", subtype: "basicphrases" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "jelendef" },
];

const Jelenidodef = () => (
  <ModalPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Jelenidő Targyas (Definite Present Tense)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Jelenidodef;

