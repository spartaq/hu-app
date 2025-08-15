<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
import { Stepper, Step, StepLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import QuizActivity from "../../Utils/Activities/QuizActivity";
import SentenceOrdering from "../../Utils/Activities/SentenceOrdering";
import VocabMatch from "../../Utils/Activities/VocabMatch";
<<<<<<< HEAD
=======
import GapFillActivity from "../../Utils/Activities/GapFillExercise";
import GrammarExerciseComp from "../../Utils/Activities/GrammarExerciseComp.js";
import ReadingActivity from "../../Utils/Activities/ReadingActivity.js";
import Videos from "../../Utils/Activities/VideoActivity.js";
import shuffle from "../../Utils/shuffle.js";
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
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
<<<<<<< HEAD
    <ColorlibStepIconRoot
      ownerState={{ active, completed }}
      className={className}
    >
=======
    <ColorlibStepIconRoot ownerState={{ active, completed }} className={className}>
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
      <span style={{ fontSize: "12px" }}>{icon}</span>
    </ColorlibStepIconRoot>
  );
}

<<<<<<< HEAD
const ExerciseSection = ({ type, data }) => {
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

            

            {type === "quiz" && (
  <div className="correct-answers">
    <h3>Correct Answers:</h3>
    <ul>
      {activityData.map((q, i) => (
        <li key={q.id || i}>
          <p>
            <strong>{i + 1}.</strong>{" "}
            {q.question.replace(/_+/, q.answer)}
            {q.translate && (
              <span style={{ color: "#666", marginLeft: "1rem" }}>
                ({q.translate})
              </span>
            )}
          </p>
        </li>
      ))}
    </ul>
  </div>
)}


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
=======
const ExerciseSection = ({ type, data, id, scrollTargetRef, subtype }) => {
  const topRef = useRef(null); // <-- anchor reference

  const [activityStarted, setActivityStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [activityEnded, setActivityEnded] = useState(false);
  const [activityData, setActivityData] = useState(Array.isArray(data) ? data : [data]);
  const [usedIds, setUsedIds] = useState([]);

  const autoStartTypes = useMemo(
    () => ["ordering", "vocab", "gapfill", "grammar", "reading", "video"],
    []
  );

const scrollToTop = () => {
  const target = scrollTargetRef?.current;
  console.log("scrollToTop called");
  console.log("Target ref:", target);

  if (target) {
    const rect = target.getBoundingClientRect();
    const offset = 60;
    const top = rect.top + window.scrollY - offset;
    console.log("Target rect:", rect);
    console.log("Scroll top position:", top);

    window.scrollTo({ top, behavior: 'smooth' });
  } else {
    console.log("No scrollTargetRef found, using topRef");
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
};


  const getTitle = () => {
    if (type === "quiz") return data?.quizTitle ?? "Quiz";
    if (type === "ordering") return data?.title ?? "Sentence Ordering";
    if (type === "vocab") return data?.quizTitle ?? "Vocabulary Match";
    if (type === "gapfill") return data?.title ?? "Gap Fill";
    if (type === "grammar") return data?.title ?? "Grammar Exercise";
    if (type === "reading") return data?.title ?? "Reading Comprehension";
    if (type === "video") return data?.title ?? "Videos";
    return "Activity";
  };

  const getRawData = useCallback(() => {
    if (type === "quiz") return Array.isArray(data?.questions) ? data.questions : [];
    if (type === "ordering") return Array.isArray(data) ? data : [];
    if (type === "vocab") return Array.isArray(data?.pairs) ? data.pairs : [];
    if (type === "gapfill") return Array.isArray(data?.text) ? [data] : [];
    if (type === "grammar") return Array.isArray(data?.sentences) ? data.sentences : [];
    if (type === "reading") return Array.isArray(data) ? data : [];
    if (type === "video") return Array.isArray(data) ? data : [];
    return [];
  }, [type, data]);

  const isSingleVideo = type === "video" && id !== undefined;

  useEffect(() => {
    if (type === "video") {
      const normalizedData = Array.isArray(data) ? data : [data];
      setActivityData(normalizedData);
      setActivityStarted(true);
    } else if (autoStartTypes.includes(type)) {
      const raw = getRawData();
      setActivityData(raw);
      setActivityStarted(true);
    }
  }, [type, data, autoStartTypes, getRawData]);

  const startActivity = () => {
    const allData = getRawData();

    if (type === "vocab") {
      const shuffledPairs = shuffle([...allData]);
      setActivityData(shuffledPairs);
    } else if (type === "gapfill") {
      const shuffledGapfill = shuffle([...allData]);
      setActivityData(shuffledGapfill);
    } else {
      const unused = allData.filter((item) => !usedIds.includes(item.id));
      const toUse = shuffle(unused).slice(0, 10);
      setUsedIds((prev) => [...prev, ...toUse.map((item) => item.id)]);
      setActivityData(toUse);
    }

    setActivityStarted(true);
    setActivityEnded(false);
    setCurrentIndex(0);
    setScore(0);
    scrollToTop();
  };

  const handleRestart = () => {
    if (type !== "vocab") {
      setUsedIds([]);
    }
    setActivityStarted(false);
    setActivityEnded(false);
    setScore(0);
    setCurrentIndex(0);
    scrollToTop();
  };

  const handleNext = () => {
    if (currentIndex + 1 < activityData.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setActivityEnded(true);
      scrollToTop();
      
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const ActivityComponent = () => {
    const current = activityData[currentIndex];
    if (!current) return <p>No data</p>;

    return (
      <div className="exercisesection__activity-box">
        {type === "quiz" && (
          <QuizActivity
            question={current}
            onAnswer={(isCorrect) => {
              if (isCorrect) setScore((s) => s + 1);
              handleNext();
            }}
          />
        )}
        {type === "ordering" && (
          <SentenceOrdering data={current} onCorrect={() => setScore((s) => s + 1)} />
        )}
        {type === "vocab" && (
          <VocabMatch data={data} onCorrect={() => setScore((s) => s + 1)} />
        )}
        {type === "gapfill" && (
          <GapFillActivity data={current} onComplete={() => setScore((s) => s + 1)} />
        )}
        {type === "grammar" && (
          <GrammarExerciseComp
            data={getRawData()}
            title={data?.title}
            description={data?.description}
          />
        )}
        {type === "reading" && activityData && (
          <ReadingActivity
            data={activityData[currentIndex]}
            title={activityData[currentIndex].readingcompTitle}
          />
        )}
        {type === "video" && activityData[currentIndex] && (
          <Videos
            data={activityData[currentIndex]}
            title={activityData[currentIndex].title}
          />
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
        )}
      </div>
    );
  };
<<<<<<< HEAD
 
=======

  return (
    <div className="exercisesection">
      <div ref={topRef} /> {/* Scroll anchor point */}

      {!activityStarted && !autoStartTypes.includes(type) ? (
        <div className="exercisesection__start">
          <div className="exercisesection__quiz-card">
            <span className="exercisesection__title">{getTitle()}</span>
            <button onClick={startActivity} className="exercisesection__start-button">
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
          {type === "quiz" && (
            <div className="correct-answers">
              <h3>Correct Answers:</h3>
              <ul>
                {activityData.map((q, i) => (
                  <li key={q.id || i}>
                    <p>
                      <strong>{i + 1}.</strong> {q.question.replace(/_+/, q.answer)}
                      {q.translate && (
                        <span style={{ color: "#666", marginLeft: "1rem" }}>
                          ({q.translate})
                        </span>
                      )}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
          {isSingleVideo ? (
            <Videos data={data} title={data.title} />
          ) : (
            <>
              <ActivityComponent />

              {!autoStartTypes.includes(type) && (
                <Stepper activeStep={currentIndex} alternativeLabel className="stepperWrap">
                  {activityData.map((_, index) => (
                    <Step key={index}>
                      <StepLabel StepIconComponent={CustomStepIcon} />
                    </Step>
                  ))}
                </Stepper>
              )}

              {activityStarted && !activityEnded && activityData.length > 0 && (
                <div className="exercisesection__nav button-row">
                  <div className="button-group">
                    <button
                      onClick={handleRestart}
                      className="exercisesection__nav-button"
                    >
                      Reset
                    </button>

                  </div>

                  <div className="button-group">
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
              )}
            </>
          )}
        </>
      )}

    </div>
  );
};
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c

export default ExerciseSection;
