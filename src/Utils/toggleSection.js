import React, { useState, useRef, forwardRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import {
  FaAngleDown,
  FaBookOpen,
  FaPenFancy,
  FaPuzzlePiece,
  FaSortAlphaDown,
  FaRegNewspaper,
  FaVideo,
  FaClock,
  FaSpeakap
} from "react-icons/fa";

import ExerciseRouter from '../Components/ExerciseRouter';

// Internal color themes per type
const defaultColors = {
  dialogue: { bg: 'purple', text: '#000' },
  vocab:    { bg: '#FCE38A', text: '#000' },
  quiz:     { bg: 'rgb(167 210 113)', text: '#000' },
  grammar:  { bg: '#D7BDE2', text: '#000' },
  gapfill:  { bg: '#AED6F1', text: '#000' },
  ordering: { bg: '#F9E79F', text: '#000' },
  reading:  { bg: '#F5B7B1', text: '#000' },
  video:    { bg: '#95E1D3', text: '#000' },
};

const toggleColors = {
  
  dialogue: { bglt: '#d691e4ff', text: '#000' },
  vocab:    { bglt: '#FFF4C2', text: '#000' },
  quiz:     { bglt: 'rgb(214 224 202)', text: '#000' },
  grammar:  { bglt: '#EFE3F1', text: '#000' },
  gapfill:  { bglt: '#D6EBF9', text: '#000' },
  ordering: { bglt: '#FCF3CF', text: '#000' },
  reading:  { bglt: '#FADED9', text: '#000' },
  video:    { bglt: '#CFF0EA', text: '#000' },
};

// Internal icon map by type
const iconMap = {
  dialogue: FaSpeakap,
  vocab: FaBookOpen,
  quiz: FaClock,
  grammar: FaPenFancy,
  gapfill: FaPuzzlePiece,
  ordering: FaSortAlphaDown,
  reading: FaRegNewspaper,
  video: FaVideo,
};

const ToggleSection = forwardRef(({
  label,
  description,
  type,
  subtype,
  id,
  color,
  textColor,
}, ref) => {
  const [visible, setVisible] = useState(false);
  const contentRef = useRef(null);
  const scrollTargetRef = useRef(null);

  const toggle = () => {
    setVisible(prev => {
      const nowOpen = !prev;

      if (!prev && scrollTargetRef.current) {
        // Scroll to the description div when opening
        setTimeout(() => {
          const sectionTop = scrollTargetRef.current.getBoundingClientRect().top + window.scrollY;
          const offset = 60; // adjust if you want some offset from top
          window.scrollTo({
            top: sectionTop - offset,
            behavior: 'smooth',
          });
        }, 100);
      }
      return nowOpen;
    });
  };

  const containerClass =
    ['gapfill', 'ordering', 'reading', 'video'].includes(type)
      ? 'sentence-ordering-container'
      : 'grammar-exercises-grid';

  const bg = color || defaultColors[type]?.bg || '#eee';
  const bglt = color || toggleColors[type]?.bglt || '#eee';
  const text = textColor || defaultColors[type]?.text || '#000';
  const Icon = iconMap[type];

  return (
    <>

  <div ref={scrollTargetRef} className="grammardoexercise">
    <p>{description}</p>
  </div>



      <div
        className="showagendagrammarbox"
        onClick={toggle}
        style={{
          backgroundColor: bg,
          color: text,
          cursor: 'pointer',
          padding: '1.5rem 20px',
          borderRadius: '5px 5px 0 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {Icon && <Icon />}
          <span>{label}</span>
        </div>
        <FaAngleDown className={`toggle-icon ${visible ? 'open' : ''}`} />
      </div>

      <div
        className="exercise-content-wrapper"
        style={{ padding: '0 0px', overflow: 'hidden', borderRadius: '6px' }}
      >
        <AnimatePresence initial={false}>
          {visible && (
            <motion.div
              key="exercise"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{
                overflow: 'hidden',
                backgroundColor: bg,
                borderRadius: '0 0 6px 6px',
              }}
            >
              <div
                ref={contentRef}
                className={containerClass}
                style={{ padding: '0', backgroundColor: bglt }}
              >
                <ExerciseRouter 
                type={type} 
                subtype={id || subtype}
                scrollTargetRef={scrollTargetRef} 
              />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
});

export default ToggleSection;
