import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useLocation } from 'react-router-dom';
import YouTubeVideos from "../../Components/YouTubeVideos";
import videoData from '../../Mainpages/Videos/Data/video.json';
import { addTooltipsToText } from '../../Utils/tooltipUtils';  

const VideoComponent = ({ title }) => {

  const location = useLocation();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [showVocab, setShowVocab] = useState(false);

  useEffect(() => {
    if (title) {
      // Filter by title if provided
      const videoIndex = videoData.findIndex((video) => video.title === title);
      if (videoIndex !== -1) {
        setCurrentVideoIndex(videoIndex);
        setAnswers(Array(videoData[videoIndex].questions.length).fill(''));
      } else {
        console.error(`Video with title "${title}" not found`);
      }
    } else {
      // Fallback to topic parameter in URL
      const params = new URLSearchParams(location.search);
      const topic = params.get('topic');
      if (topic) {
        const videoIndex = videoData.findIndex((video) => video.topic === topic);
        if (videoIndex !== -1) {
          setCurrentVideoIndex(videoIndex);
          setAnswers(Array(videoData[videoIndex].questions.length).fill(''));
        }
      }
    }
  }, [location, title]);

  useEffect(() => {
    const transcriptText = videoData[currentVideoIndex]?.transcript.join(" ") || "";
    const vocabulary = videoData[currentVideoIndex]?.vocabulary || [];
  
    if (vocabulary.length > 0) {
      const tooltippedTranscript = addTooltipsToText(transcriptText, vocabulary);
      setTooltippedTranscript(tooltippedTranscript);
    } else {
      setTooltippedTranscript(transcriptText);
    }
  }, [currentVideoIndex]);
  
  const [tooltippedTranscript, setTooltippedTranscript] = useState("");  // <-- **State to store processed transcript with tooltips**

  const handlePreviousVideo = () => {
    const prevVideoIndex = (currentVideoIndex - 1 + videoData.length) % videoData.length;
    setCurrentVideoIndex(prevVideoIndex);
    setAnswers(Array(videoData[prevVideoIndex].questions.length).fill(''));
    setShowResults(false);
  };

  const handleNextVideo = () => {
    const nextVideoIndex = (currentVideoIndex + 1) % videoData.length;
    setCurrentVideoIndex(nextVideoIndex);
    setAnswers(Array(videoData[nextVideoIndex].questions.length).fill(''));
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
    return answers[questionIndex] === videoData[currentVideoIndex].questions[questionIndex].correctAnswer;
  };

  const getResultIcon = (questionIndex, choiceIndex) => {
    if (showResults && isCorrect(questionIndex) && answers[questionIndex] === videoData[currentVideoIndex].questions[questionIndex].choices[choiceIndex]) {
      return <span style={{ color: 'green' }}>&#10003;</span>;
    } else if (showResults && !isCorrect(questionIndex) && answers[questionIndex] === videoData[currentVideoIndex].questions[questionIndex].choices[choiceIndex]) {
      return <span style={{ color: 'red' }}>&#10005;</span>;
    } else {
      return null;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTranscript = () => {
    setShowTranscript(prevState => !prevState);
  };

  const closeTranscript = () => {
    setShowTranscript(false);
  };

  const toggleVocab = () => {
    setShowVocab(prevState => !prevState);
  };

  const closeVocab = () => {
    setShowVocab(false);
  };

  if (!videoData[currentVideoIndex]) {
    return <p>Video not found</p>;
  }

  return (
    <div>

      <div className="grammar-comp-container">
        <div className="introtext">
         

          <div className="exercises-container">
            
            <div className="videointerface">
              <div className="videotitle">
                <h1>{videoData[currentVideoIndex].title}</h1>
                <span>Topic: {videoData[currentVideoIndex].topic}</span>
                <span>Level: {videoData[currentVideoIndex].level}</span>
              </div>
              
              <div className="video-content">
                <div className="video-container">
                <YouTubeVideos videoId={videoData[currentVideoIndex].videoId} />
                </div>
                <div className="transcript-container">
                  <button type="button" className='checkbtn' onClick={toggleTranscript}>Transcript</button>
                  <button type="button" className='checkbtn' onClick={toggleVocab}>Vocabulary</button>
                </div>
              </div>
            </div>

            {showVocab && (
              <div className="overlay" onClick={closeVocab}>
                <div className="transcript-overlay" onClick={(e) => e.stopPropagation()}>
                  <div className="vocabulary-text">
                    <ul>
                      {videoData[currentVideoIndex].vocabulary.map((item, index) => {
                        const [word, translation] = item.split(" - ").map(str => str.trim());
                        return (
                          <li key={index}>
                            <strong>{word}</strong> - {translation}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {showTranscript && (
              <div className="overlay" onClick={closeTranscript}>
                <div className="transcript-overlay" onClick={(e) => e.stopPropagation()}>
                  <div
                    className="transcript-text"
                    dangerouslySetInnerHTML={{ __html: tooltippedTranscript }}  // <-- **Using tooltipped transcript**
                  />
                </div>
              </div>
            )}

            <form className="videoform"onSubmit={handleSubmit}>
              <div className="question-container">
                <Carousel interval={null} wrap={false} controls={true} indicators={false} pause={'hover'}>
                  {videoData[currentVideoIndex].questions.map((questionObj, questionIndex) => (
                    <Carousel.Item key={questionIndex}>
                      <div className="question-container">
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
                      <button type="submit" className="checkbtn">Check Answer</button>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>

              <div className="filterctrl">
                <button type="button" className="checkbtn" onClick={handlePreviousVideo}><i className="fas fa-arrow-left"></i></button>
                <button type="button" className="checkbtn" onClick={handleNextVideo}><i className="fas fa-arrow-right"></i></button>
              </div>
            </form>
          </div>

          <div className={`mobile-menu-speaking ${isMenuOpen ? 'open' : ''}`}>
            <div className="set-buttons">
              <button className="close-button" onClick={toggleMenu}>✕</button>
              {videoData.map((video, index) => (
                <button
                  key={index}
                  className="flashbtn"
                  onClick={() => setCurrentVideoIndex(index)}
                >
                  {video.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoComponent;
