import React from 'react';
import Modal from 'react-modal';
import '../../CSS/lesson-agenda.css';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SEO from '../../Components/SEO.js';
import Video from '../../Components/VideoComps/videocomponent.js';
import videoData from '../Listening-Exercises/Data/video.json';
import discussionquestionsData from "../../Components/DiscussionComps/Data/discussionquestions.json";
import RandomQuestionGenerator from '../../Components/DiscussionComps/questiongenerator.js';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/languagequiz.json';
import GrammarExplanation from '../../Components/GrammarExplanationComps/tenseexplanation.js';
import Grammarexercises from '../../Components/GrammarExerciseComps/tenseexercisescomp.js';



Modal.setAppElement('#root');

const Language = () => {
    

    return (
        <div>
            <SEO
                title='Exam Topics - Language - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - New Years Resolutions'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Language</h1>
                </div>

                
                
                <div className="agenda-subtitle">Quiz</div> 
                <div>                   
                    <div className="agenda-display-grid">
                        <Quiz quizzesData={quizzesData} />
                    </div>                    
                </div>

                <div className="agenda-subtitle">Language Point</div>
                
                
                <div className="languagepoint-container">
                    
                    <div>


                        <div>
                        <GrammarExplanation /> 
                        </div>                        
                 
                    </div>

                    <div>

                   
                        <div className="agenda-display-grid">
                           <Grammarexercises />
                        </div>
                   
                    </div>

                </div>
                
                
                
                <div className="agenda-subtitle">Video</div> 
                             

                <Video videos={videoData} title="Create Your Own Words" />
                
                <div className="agenda-subtitle">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="language" />
            </div>
        </div>
    );
};

export default Language;
