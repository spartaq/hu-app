
import React, { useState } from 'react';
import Breadcrumbs from '../../Components/Breadcrumb';
import SEO from '../../Components/SEO';
import GrammarMenu from '../../Components/Menus/GrammarMenu.js';
import Sidebar from '../../Components/Sidebar';
import mainimage from '../../Images/deduction1.jpg';
import { FaAngleDown } from "react-icons/fa";
import RelatedExercises from '../../Utils/relatedExercises.js';
import GrammarExercises from '../../Components/GrammarExerciseComps/modalsdeductionexercisescomp.js';
import GrammarExplanation from '../../Components/GrammarExplanationComps/modalsdeductionexplanation.js';
import GrammarPageLayout from '../../Components/GrammarPageLayout';

const sections = [
  { label: "Grammar", description: "Do this exercise to practice grammar.", type: "grammar", subtype: "simple-past" },
  { label: "Exercises", description: "Do this exercise to practice grammar.", type: "quiz", subtype: "simplepast" },
  { label: "Reading", description: "Do this exercise to practice reading and learn new vocabulary.", type: "reading", subtype: "simplepast" },
];

const ModalsDeduction = () => (
  <GrammarPageLayout
    level="B2"
    title="Modals Deduction"
    image={mainimage}
    ExplanationComponent={GrammarExplanation}
    sections={sections}
    seoTitle="English Exam Exercises - Modals Deduction"
    seoDescription="A big list of English exam exercises to practice"
    relatedCategory="grammar-exercises"
    relatedLevel="B2"
  />
);

export default ModalsDeduction;

