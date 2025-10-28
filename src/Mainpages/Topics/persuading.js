import React from 'react';
import Modal from 'react-modal';
import '../../CSS/lesson-agenda.css';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SEO from '../../Components/SEO.js';
import Video from '../../Components/VideoComps/videocomponent.js';
import videoData from '../Videos/Data/video.json';
import discussionquestionsData from "../../Components/DiscussionComps/Data/discussionquestions.json";
import RandomQuestionGenerator from '../../Components/DiscussionComps/questiongenerator.js';
import GapFillExercise from '../../Utils/gapfill.js';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/disagreementquiz.json';
import ImageCarousel from '../../Utils/imgcarousel.js';
import GrammarExplanation from '../../Components/GrammarExplanationComps/wordformsexplanation.js';
import Grammarexercises from '../../Components/GrammarExerciseComps/wordformsexercisescomp.js';
import jsonData from '../Vocabulary-Exercises/Data/persuadinggapfill.json';
import ToggleSection from '../../Utils/toggleSection';

const sections = [
  { label: "Exercises", description: "Do this exercise to practice your grammar.", type: "quiz", subtype: "wordforms" },
];


Modal.setAppElement('#root');

const Persuading = () => {

    return (
        <div>
            <SEO
                title='Exam Topics - Persuading - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - New Years Resolutions'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Persuading</h1>
                </div>

                <div className="agenda-subtitle">Warmer</div>

                        <div>

                        <ImageCarousel />
                        </div>


                <div className="agenda-languagepoint">Language Point</div>
                
                
                <div className="languagepoint-container">
                    
                    <div>


                        <div>
                        <GrammarExplanation /> 
                        </div>                        
                 
                    </div>

                                            <div>
        {sections.map((section, i) => (
          <div className="bottom-margin" key={i}>
          <ToggleSection  {...section} /> </div>
        ))}      
           </div>

                    

                </div>
                
              
                
                <div className="agenda-quiz">Quiz</div> 
                <div>                   
                    <div className="agenda-display-grid">
                        <Quiz quizzesData={quizzesData} />
                    </div>                    
                </div>

                <div className="agenda-reading">Reading</div>
                <div className="reading-container">
                <div className="agenda-display-grid">
                    <GapFillExercise jsonData={jsonData} />
                    </div>
                </div>
                
                <div className="agenda-listening">Video</div>
                             

                <Video videos={videoData} title="Persuading2" />
                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="persuading" />
            </div>
        </div>
    );
};

export default Persuading;
