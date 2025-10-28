import React, { useState, useEffect } from "react";

const RandomQuestionGenerator = ({ discussionquestions, topic }) => {
  const [unusedQuestions, setUnusedQuestions] = useState([]);
  const [allFilteredQuestions, setAllFilteredQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(
    "Click the button to get a question!"
  );

  useEffect(() => {
    // Filter questions by topic on initial load
    const filtered = topic
      ? discussionquestions.filter((q) => q.topic === topic)
      : discussionquestions;

    setUnusedQuestions(filtered);
    setAllFilteredQuestions(filtered);
  }, [discussionquestions, topic]);

  const getRandomQuestion = () => {
    let questions = [...unusedQuestions];

    // Reset if all questions were used
    if (questions.length === 0) {
      questions = [...allFilteredQuestions];
    }

    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];

    // Remove the used question from the array
    questions.splice(randomIndex, 1);
    setUnusedQuestions(questions);

    setCurrentQuestion(question.text);
  };

  return (
    <div className="qgenerator" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Discussion Questions</h1>
      <div id="question" style={{ fontSize: "18px", margin: "20px 0" }}>
        {currentQuestion}
      </div>
      <button
        onClick={getRandomQuestion}
        style={{
          padding: "10px 20px",
          fontSize: "1em",
          cursor: "pointer",
        }}
      >
        Get a Question
      </button>
    </div>
  );
};

export default RandomQuestionGenerator;
