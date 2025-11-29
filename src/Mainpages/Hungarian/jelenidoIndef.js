
import React from 'react';
import GrammarPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/jelenidoindefintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "explanation", subtype: "jelenindef" },
  { label: "Dialogue", type: "dialogue", subtype: "jelenindef" },
  { label: "Vocab", type: "vocabmatch", subtype: "jelenindef" },
  { label: "Exercises", type: "quiz", subtype: "jelenindef" },
  { label: "Word Order", type: "ordering", subtype: "van" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
];

const Jelenidoindef = () => (
  <GrammarPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Jelenidő Alanyi (Indefinite Present Tense)"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default Jelenidoindef;

