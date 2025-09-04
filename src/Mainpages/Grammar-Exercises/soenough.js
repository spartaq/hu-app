
import React, { useState } from 'react';
import Breadcrumbs from '../../Components/Breadcrumb';
import SEO from '../../Components/SEO';
import GrammarMenu from '../../Components/Menus/GrammarMenu.js';
import Sidebar from '../../Components/Sidebar';
import mainimage from '../../Images/enough1.jpg';
import { FaAngleDown } from "react-icons/fa";
import RelatedExercises from '../../Utils/relatedExercises.js';
import GrammarExercises from '../../Components/GrammarExerciseComps/soenoughexercisescomp.js';
import GrammarPageLayout from '../../Components/GrammarPageLayout';
import GrammarExplanation from '../../Components/GrammarExplanationComps/modalsobligationexplanation.js';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "soenough" },
];

const Soenough = () => (
  <GrammarPageLayout
    level="B2"
    title="Soenough"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Soenough"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="B2"
  />
);

export default Soenough;

