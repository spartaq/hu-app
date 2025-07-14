import React from 'react';

const Questions = ({ 
  questions, 
  handleNextQuestion, 
  currentQuestion, 
  handleAnswerClick, 
  timer, 
  isLastq, 
  selectedAnswer 
}) => {
  
  const question = questions[currentQuestion];
  const correctAnswer = question.answer.split(" - ")[0]; // Extract "True" or "False"

  return (
    <div className="container mt-3">
      <div className="card-body">
        <p className="mt-2 text-warning">
          Time remaining: {timer}
        </p>
        <h4 className="card-text">
          {question.question}
        </h4>
        <div className="list-group">
          {question.options.map((option, index) => {
            let backgroundColor = 'white';

            if (selectedAnswer) {
              if (option === correctAnswer) {
                backgroundColor = 'lightgreen'; // Correct answer always green
              } else if (option === selectedAnswer && option !== correctAnswer) {
                backgroundColor = 'lightcoral'; // Incorrect selection red
              }
            }

            return (
              <button
                key={index}
                className="list-group-item list-group-item-action mt-2"
                onClick={() => handleAnswerClick(option)}
                style={{
                  backgroundColor: backgroundColor,
                  border: '1px solid gray',
                }}
                disabled={!!selectedAnswer} // Disable clicking after selection
              >
                {option}
              </button>
            );
          })}
        </div>
        <br />
        <div className="row">
          <div className="col">
            <p className="card-title">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
          <div className="col">
            {isLastq ? (
              <button className="btn btn-primary btn-sm" onClick={handleNextQuestion}>
                Submit
              </button>
            ) : (
              <button className="btn btn-primary btn-sm" onClick={handleNextQuestion}>
                Next Question
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
