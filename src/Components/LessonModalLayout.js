import React, { useState } from 'react';
import Modal from './LessonModalFrame';
import ModalRouter from './LessonModalRouter';
import SEO from './SEO';
import "../CSS/LessonModalLayout.css";

const ModalLayout = ({
  title,
  image,
  ExplanationComponent,
  sections,
  seoTitle,
  seoDescription
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

  const handlePrevious = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
      setSelectedSection(sections[prevIndex]);
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
      handleOpen(sections[nextIndex], nextIndex);
    } else {
      setSelectedSection({ type: "completed" });
    }
  };

  return (
    <div>
      <SEO title={seoTitle} description={seoDescription} />

      
        <div className="lesson-modal-wrapper">

          <div className="lesson-modal-image">
            <img src={image} alt={title} />
          </div>

          <div className="lesson-modal-grid">
            <div className="lesson-modal-intro-grid">
              <ExplanationComponent />
            </div>

            <button
              className="start-lesson-btn"
              onClick={() => handleOpen(sections[0], 0)}
            >
              Start
            </button>
          </div>
        </div>
      

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        title={selectedSection?.label}
        footer={
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={handlePrevious} disabled={currentIndex === 0}>
              Previous
            </button>
            <button onClick={handleContinue}>
              Continue
            </button>
          </div>
        }
      >
        {selectedSection && (
          <ModalRouter {...selectedSection} />
        )}
      </Modal>
    </div>
  );
};

export default ModalLayout;
