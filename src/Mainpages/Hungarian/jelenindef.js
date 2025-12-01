
import React from 'react';
import GrammarPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/jelenindefintro';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "grammarexplanation", subtype: "jelenindef" },
  { label: "Dialogue", type: "dialogue", subtype: "jelenindef" },
  { label: "Vocab", type: "vocabmatch", subtype: "jelenindef" },
  { label: "Audio Match", type: "audiowordmatch", subtype: "jelenindef" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "jelenindef" },  
  { label: "Exercises", type: "grammarquiz", subtype: "jelenindef" },
  { label: "Word Order", type: "ordering", subtype: "jelenindef" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "jelenindef" },
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

