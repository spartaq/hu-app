
import React, { useState } from 'react';
import Breadcrumbs from '../../Components/Breadcrumb';
import SEO from '../../Components/SEO';
import GrammarMenu from '../../Components/Menus/GrammarMenu.js';
import Sidebar from '../../Components/Sidebar';
import mainimage from '../../Images/wish1.jpg';
import { FaAngleDown } from "react-icons/fa";
import RelatedExercises from '../../Utils/relatedExercises.js';
import GrammarExercises from '../../Components/GrammarExerciseComps/wishexercisescomp.js';
import GrammarExplanation from '../../Components/GrammarExplanationComps/modalsobligationexplanation.js';
import GrammarPageLayout from '../../Components/GrammarPageLayout';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "wish" },
];

const Wish = () => (
  <GrammarPageLayout
    level="C1"
    title="Wish"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Wish"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="C1"
  />
);

export default Wish;

