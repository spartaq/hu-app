import React, { useState } from 'react';
import Modal from '../Components/modal';
import ExerciseCard from '../Components/exerciseCard';
import ToggleSection from '../Utils/toggleSection';
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
const [selectedIndex, setSelectedIndex] = useState(null);
const [currentIndex, setCurrentIndex] = useState(null);

 const handleOpen = (section, index) => {
  setCurrentIndex(index);
  setSelectedSection(section);
  setSelectedIndex(index);
  setOpen(true);
};

const handleContinue = () => {
  const nextIndex = currentIndex + 1;

  if (nextIndex < sections.length) {
    setCurrentIndex(nextIndex);
    setSelectedSection(sections[nextIndex]);
  } else {
    setOpen(false); // end of lesson
  }
};

  const handleClose = () => {
  setOpen(false);
  setSelectedSection(null);
  setSelectedIndex(null);
};

const openNextSection = () => {
  if (selectedIndex === null) return;

  const nextIndex = selectedIndex + 1;

  if (nextIndex < sections.length) {
    // open next exercise
    handleOpen(sections[nextIndex], nextIndex);
  } else {
    // optional: show completion screen
    setSelectedSection({ type: "completed" });
  }
};

  return (
    <div>
      <SEO title={seoTitle} description={seoDescription} />

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

          <button
            className="start-lesson-btn"
            onClick={() => handleOpen(sections[0], 0)}
          >
            Continue
          </button>

          {/* Exercise Cards */}
          <div className="exercise-card-grid">
            {sections.map((section, i) => {
                let bgColor;
                switch(section.type) {
                  case 'dialogue': bgColor = '#d691e4'; break;
                  case 'vocab': bgColor = '#FFF4C2'; break;
                  case 'quiz': bgColor = '#A7D271'; break;
                  case 'grammar': bgColor = '#D7BDE2'; break;
                  case 'ordering': bgColor = '#D7BDE2'; break;
                  case 'reading': bgColor = '#FFF4C2'; break;
                  case 'video': bgColor = '#A7D271'; break;
                  default: bgColor = '#eee';
                }

                return (
                  <ExerciseCard
                    key={i}
                    title={section.label}
                    onClick={() => handleOpen(section, i)}
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
      <Modal
        open={open}
        onClose={handleClose}
        title={selectedSection?.label}
        footer={
          <button onClick={handleContinue}>
            Continue
          </button>
        }
      >
        {selectedSection && (
          <ToggleSection {...selectedSection} />
        )}
      </Modal>
    </div>
  );
};

export default GrammarPageLayout;

