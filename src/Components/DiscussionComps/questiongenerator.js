import React, { useState, useEffect } from "react";

const RandomQuestionGenerator = ({ discussionquestions, topic }) => {
  const [currentQuestion, setCurrentQuestion] = useState(
    "Click the button to get a question!"
  );

  useEffect(() => {
    // Optional: You could filter questions based on the topic on initial load if desired
    const filtered = topic
      ? discussionquestions.filter((question) => question.topic === topic)
      : discussionquestions;
    
    // Ensure the current question is picked from the filtered list if needed
    if (filtered.length > 0) {
      setCurrentQuestion(filtered[Math.floor(Math.random() * filtered.length)].text);
    }
  }, [discussionquestions, topic]);

  const getRandomQuestion = () => {
    const filtered = topic
      ? discussionquestions.filter((question) => question.topic === topic)
      : discussionquestions;
    const randomIndex = Math.floor(Math.random() * filtered.length);
    setCurrentQuestion(filtered[randomIndex].text);
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
