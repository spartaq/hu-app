import React, { useState } from 'react';
import SEO from '../../Components/SEO';
import Breadcrumbs from '../../Components/Breadcrumb';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import audioData from './Data/audio.json';

const Audio = () => {
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(audioData[currentAudioIndex].questions.length).fill(''));
  const [showResults, setShowResults] = useState(false);

  const handleNextAudio = () => {
    const nextAudioIndex = (currentAudioIndex + 1) % audioData.length;
    setCurrentAudioIndex(nextAudioIndex);
    setAnswers(Array(audioData[nextAudioIndex].questions.length).fill(''));
    setShowResults(false);
  };

  const handleAnswerChange = (questionIndex, choice) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = choice;
    setAnswers(updatedAnswers);
    setShowResults(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const isCorrect = (questionIndex) => {
    return answers[questionIndex] === audioData[currentAudioIndex].questions[questionIndex].correctAnswer;
  };

  const getResultIcon = (questionIndex, choiceIndex) => {
    if (showResults && isCorrect(questionIndex) && answers[questionIndex] === audioData[currentAudioIndex].questions[questionIndex].choices[choiceIndex]) {
      return <span style={{ color: 'green' }}>&#10003;</span>;
    } else if (showResults && !isCorrect(questionIndex) && answers[questionIndex] === audioData[currentAudioIndex].questions[questionIndex].choices[choiceIndex]) {
      return <span style={{ color: 'red' }}>&#10005;</span>;
    } else {
      return null;
    }
  };

  return (
    <div>
      <SEO
        title='Listening Exercises - English Exam Exercises'
        description='A collection of lectures to listen to on videos, podcasts and general audio.'
        name='English Exam Exercises'
        type='article'
      />
      <div className="introtext">
      <Breadcrumbs />
        <h3 className=" mt-2">Listening Exercises</h3>
      <p>Here is a collection of exercises to help you master the grammar you need to ace English exams.</p></div>
            <div className="grammar-container">
                
            <div className="exercises-container">
           
        <AudioPlayer
          src='https://s3-ap-northeast-1.amazonaws.com/hkbible/mp3/B03___12_Luke__________Cantonese.mp3'
          onPlay={() => console.log("onPlay")}
        />
        <form onSubmit={handleSubmit}>
          <div className="exercises-container">
            {audioData[currentAudioIndex].questions.map((questionObj, questionIndex) => (
              <div key={questionIndex} className="question-container">
                <div className="question">{questionObj.number}. {questionObj.question}</div>
                <div className="choices-container">
                  {questionObj.choices.map((choice, choiceIndex) => (
                    <label key={choiceIndex}>
                      <input
                        type="radio"
                        value={choice}
                        checked={answers[questionIndex] === choice}
                        onChange={() => handleAnswerChange(questionIndex, choice)}
                      />
                      {choice}
                      {getResultIcon(questionIndex, choiceIndex)}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button type="submit" className="check-answers-button">Check Answers</button>
          <button type="button" className="check-answers-button" onClick={handleNextAudio}>Next Audio</button>
        </form>
      </div>
      
      <div>
            
            </div>
      
      </div>
    </div>
  );
}

export default Audio;
