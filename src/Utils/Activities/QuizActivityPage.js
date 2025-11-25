// src/Utils/Activities/QuizActivityPage.js
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import QuizActivity from "./QuizActivity";

export default function QuizActivityPage() {
  const location = useLocation();
  const data = location.state?.data;
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data) return <p>No quiz data found.</p>;

  const question = data.questions[currentIndex];

  const handleAnswer = ({ next }) => {
    if (next && currentIndex < data.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return <QuizActivity question={question} onAnswer={handleAnswer} />;
}
