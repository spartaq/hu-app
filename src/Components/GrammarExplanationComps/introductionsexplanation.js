import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';

const IntroductionsExplanation = () => {
  return (
    <div className="grammar-explanation">

      <h2><FaBookOpen /> Introductions</h2>

      <section>
        <h3><FaLightbulb /> Welcome to the Course</h3>
        <p>This lesson is all about getting to know each other. You’ll learn and practice how to talk about yourself, ask questions, and build confidence in first conversations.</p>
        <p><strong>Goal:</strong> Feel comfortable introducing yourself in different situations — at work, online, or in class.</p>
      </section>

      <section>
        <h3><FaLightbulb /> Saying Who You Are</h3>
        <p>We’ll start with simple ways to share basic information: your name, where you’re from, and what you do.</p>
        <p><strong>Example:</strong> Hi, I’m Anna. I’m from Hungary, and I work in IT support.</p>
      </section>

      <section>
        <h3><FaLightbulb /> Asking About Others</h3>
        <p>Introductions are two-way! You’ll learn polite and natural ways to ask questions when meeting someone new.</p>
        <p><strong>Example:</strong> Where are you from? What do you do for work?</p>
      </section>

      <section>
        <h3><FaLightbulb /> Talking About Interests</h3>
        <p>We’ll practice discussing hobbies, free time, and personal interests — a great way to keep a conversation going.</p>
        <p><strong>Example:</strong> I love traveling and trying new food.</p>
      </section>

      <section>
        <h3><FaLightbulb /> Describing Your Background</h3>
        <p>You’ll learn useful language to describe your studies, job, or experience when introducing yourself more formally.</p>
        <p><strong>Example:</strong> I studied business and now I work as a project manager.</p>
      </section>

      <section>
        <h3><FaLightbulb /> Setting Learning Goals</h3>
        <p>Finally, you’ll share what you’d like to achieve in your English lessons. This helps your teacher personalize your learning path.</p>
        <p><strong>Example:</strong> I’d like to improve my speaking confidence and vocabulary for meetings.</p>
      </section>

    </div>
  );
};

export default IntroductionsExplanation;
