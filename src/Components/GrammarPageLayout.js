import React, { useState } from 'react';
import Modal from '../Components/modal';
import ExerciseCard from '../Components/exerciseCard';
import ToggleSection from '../Utils/toggleSection';
import Breadcrumbs from '../Components/Breadcrumb';
import SEO from '../Components/SEO';
import RelatedExercises from '../Utils/relatedExercises';
import "../CSS/grammarPage.css";

const GrammarPageLayout = ({
  level,
  title,
  image,
  ExplanationComponent,
  sections,
  seoTitle,
  seoDescription,
  relatedCategory,
  relatedLevel
}) => {

  const [open, setOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleOpen = (section) => {
    setSelectedSection(section);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedSection(null);
  };

  return (
    <div>
      <SEO title={seoTitle} description={seoDescription} />
      <Breadcrumbs />

      <div className="grammar-container">
        <div className="grammar-exercise-wrapper">

          <div className="grammartitle">
            <span className={`label label-${level.toLowerCase()}`}>{level}</span>
            <h3 className="mt-2">{title}</h3>
          </div>

          <div className="grammarimage">
            <img src={image} alt={title} />
          </div>

        <div className="content-grid">
          <div className="grammar-explanation-grid">
            <ExplanationComponent />
          </div>

          {/* Exercise Cards */}
          <div className="exercise-card-grid">
            {sections.map((section, i) => {
                let bgColor;
                switch(section.type) {
                  case 'dialogue': bgColor = '#d691e4'; break;
                  case 'vocab': bgColor = '#FFF4C2'; break;
                  case 'quiz': bgColor = '#A7D271'; break;
                  case 'grammar': bgColor = '#D7BDE2'; break;
                  default: bgColor = '#eee';
                }

                return (
                  <ExerciseCard
                    key={i}
                    title={section.label}
                    onClick={() => handleOpen(section)}
                    bgColor={bgColor}    // pass as prop
                  />
                );
              })}
          </div>
        </div>
          <div className="top-margin">
            <RelatedExercises
              currentCategory={relatedCategory}
              currentLevel={relatedLevel}
              currentTitle={title}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal open={open} onClose={handleClose} title={selectedSection?.title}>
        {selectedSection && <ToggleSection {...selectedSection} />}
      </Modal>
    </div>
  );
};

export default GrammarPageLayout;
