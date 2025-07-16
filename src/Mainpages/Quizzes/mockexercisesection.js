import React, { useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import QuizActivity from "../../Utils/Activities/QuizActivity";
import SentenceOrdering from "../../Utils/Activities/SentenceOrdering";
import VocabMatch from "../../Utils/Activities/VocabMatch";
import "../../CSS/exercisesection.css";

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor: ownerState.active
    ? "#3f50b5"
    : ownerState.completed
    ? "#4caf50"
    : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 16,
  height: 16,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
}));

function CustomStepIcon(props) {
  const { active, completed, className, icon } = props;
  return (
    <ColorlibStepIconRoot
      ownerState={{ active, completed }}
      className={className}
    >
      <span style={{ fontSize: "12px" }}>{icon}</span>
    </ColorlibStepIconRoot>
  );
}

const MockExerciseSection = ({ type, data }) => {
    const [activityStarted, setActivityStarted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [activityEnded, setActivityEnded] = useState(false);
    const [activityData, setActivityData] = useState([]);
    const [usedIds, setUsedIds] = useState([]);
  
    const getTitle = () => {
        if (type === "quiz") return data?.quizTitle ?? "Quiz"; 
        if (type === "ordering") return data?.title ?? "Sentence Ordering";
        if (type === "vocab") return data?.quizTitle ?? "Vocabulary Match";
        return "Activity";
      };
    
      const getRawData = () => {
        if (type === "quiz") return Array.isArray(data?.questions) ? data.questions : [];
        if (type === "ordering") return Array.isArray(data) ? data : [];
        if (type === "vocab") return Array.isArray(data?.pairs) ? data.pairs : [];
        return [];
      };
      
    const shuffleArray = (arr) => {
      const array = [...arr];
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
  
    const startActivity = () => {
      const allData = getRawData();

      if (type === "vocab") {
        // No slicing, no IDs, just pass full data as a single-item array
        setActivityData([data]);
      } else {
        const unused = allData.filter((item) => !usedIds.includes(item.id));
        const toUse = shuffleArray(unused).slice(0, 10);
        setUsedIds((prev) => [...prev, ...toUse.map((item) => item.id)]);
        setActivityData(toUse);
      }

      setActivityStarted(true);
      setActivityEnded(false);
      setCurrentIndex(0);
      setScore(0);
    };
  
    const handleNext = () => {
      if (currentIndex + 1 < activityData.length) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setActivityEnded(true);
      }
    };
  
    const handlePrev = () => {
      if (currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    };
  
const handleRestart = () => {
  if (type !== "vocab") {
    setUsedIds([]);
  }
  setActivityStarted(false);
  setActivityEnded(false);
  setScore(0);
  setCurrentIndex(0);
};
  
    const ActivityComponent = () => {
      const current = activityData[currentIndex];
      if (!current) return <p>No data</p>;
  
      return (
        <div className="exercisesection__activity-box">
          {type === "quiz" && (
            <QuizActivity
              question={current}
              onAnswer={(isCorrect) => isCorrect && setScore((s) => s + 1)}
            />
          )}
  
            {type === "ordering" && (
            <SentenceOrdering
                data={current} 
                onCorrect={() => setScore((s) => s + 1)}
            />
            )}

            {type === "vocab" && (
            <VocabMatch
                data={current} 
                onCorrect={() => setScore((s) => s + 1)}
            />
            )}
        </div>
      );
    };
  
    return (
      <div className="exercisesection">
        {!activityStarted ? (
          <div className="exercisesection__start">
            <div className="exercisesection__quiz-card">
              <span>{getTitle()}</span>
              <button
                onClick={startActivity}
                className="exercisesection__start-button"
              >
                Start
              </button>
            </div>
          </div>
        ) : activityEnded ? (
          <div className="exercisesection__score-card">
            <h2>Activity Completed!</h2>
            <p>
              Your score: {score} / {activityData.length}
            </p>
            <div className="newexerciseblock">
              <button onClick={handleRestart} className="exercisesection__restart-button">
                Restart
              </button>
              <button onClick={startActivity} className="exercisesection__restart-button">
                New Set
              </button>
            </div>
          </div>
        ) : (
          <>
            <Stepper activeStep={currentIndex} alternativeLabel>
              {activityData.map((_, index) => (
                <Step key={index}>
                  <StepLabel StepIconComponent={CustomStepIcon} />
                </Step>
              ))}
            </Stepper>
  
            <ActivityComponent />
  
            <div className="exercisesection__nav">
              <p>
                Question {currentIndex + 1} of {activityData.length}
              </p>
              <div>
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="exercisesection__nav-button exercisesection__nav-button--prev"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="exercisesection__nav-button exercisesection__nav-button--next"
                >
                  {currentIndex + 1 === activityData.length ? "Finish" : "Next"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };
 

export default MockExerciseSection;
