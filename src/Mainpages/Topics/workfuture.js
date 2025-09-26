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
import readingcompData from '../Reading-Exercises/Data/readingcomp.js';
import Reading from '../../Components/ReadingComps/readingcomponent.js';
import discussionquestionsData from "../../Components/DiscussionComps/Data/discussionquestions.json";
import RandomQuestionGenerator from '../../Components/DiscussionComps/questiongenerator.js';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/workfuturequiz.json';
import GrammarExplanation from '../../Components/GrammarExplanationComps/futureexplanation.js';
import GrammarExercises from '../../Components/GrammarExerciseComps/futureexercisecomp.js';
import headerimg from '../../Images/future1.jpg';



Modal.setAppElement('#root');

const WorkFuture = () => {
    

    return (
        <div>
            <SEO
                title='Exam Topics - Work Future - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the future'
                name='English Exam Exercises - Work Future'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Work Future</h1>
                </div>

                
                
             

 <div className="grammarimage">
                <img src={headerimg} alt="English Exam Exercises" />
                </div> 

                <div className="agenda-languagepoint">Language Point</div>
                
                
                <div className="languagepoint-container">
                    
                    <div>


                        <div>
                        <GrammarExplanation /> 
                        </div>                        
                 
                    </div>

                    <div>

                   
                        <div className="agenda-display-grid">
                           <GrammarExercises />
                        </div>
                   
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
                <Reading readings={readingcompData} title="The Future of Work" /> 
                    

                </div>
                
                <div className="agenda-listening">Video</div>
                             

                <Video videos={videoData} title="Future of Work" />
                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="workfuture" />
            </div>
        </div>
    );
};

export default WorkFuture;
