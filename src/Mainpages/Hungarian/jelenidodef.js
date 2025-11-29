
import React from 'react';
import GrammarPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/jelendefintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "explanation", subtype: "jelendef" },
  { label: "Dialogue", type: "dialogue", subtype: "jelendef" },
  { label: "Vocab", type: "vocabmatch", subtype: "jelendef" },
  { label: "Exercises", type: "quiz", subtype: "jelendef" },
  { label: "Grammar", type: "grammar", subtype: "jelenidodef" },
  { label: "Word Order", type: "ordering", subtype: "van" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
];

const Jelenidodef = () => (
  <GrammarPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Jelenidő Targyas (Definite Present Tense)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Jelenidodef;

