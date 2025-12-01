import React from 'react';
import GrammarPageLayout from '../../Components/ModalLayout';
import GrammarExplanation from './HungarianIntros/intro_orderingdrinks';
import mainimage from '../../Images/jelenido1.jpg';

const sections = [
  { label: "Explanation", type: "grammarexplanation", subtype: "orderingdrinks" },
  { label: "Dialogue", type: "dialogue", subtype: "orderingdrinks" },
  { label: "Vocab", type: "vocabmatch", subtype: "orderingdrinks" },
  { label: "Audio Match", type: "audiowordmatch", subtype: "orderingdrinks" },
  { label: "Tap What You Hear", type: "tapaudio", subtype: "orderingdrinks" },
  { label: "Exercises", type: "grammarquiz", subtype: "orderingdrinks" },
  { label: "Word Order", type: "ordering", subtype: "orderingdrinks" },
  { label: "Reading", type: "reading", subtype: "nevem-bob" },
  { label: "Video", type: "video", subtype: "videos" },
  { label: "Lesson Complete", type: "lessoncomplete", subtype: "orderingdrinks" },
];

const OrderingDrinks = () => (
  <GrammarPageLayout
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="Hungarian Grammar Exercises - Ordering Drinks and Food"
    seoDescription="A big list of Hungarian grammar exercises to practice"
  />
);

export default OrderingDrinks;
