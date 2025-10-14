import React from 'react';
import Modal from 'react-modal';
import '../../CSS/lesson-agenda.css';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SEO from '../../Components/SEO.js';
import Reading from '../../Components/ReadingComps/readingcomponent.js';
import Video from '../../Components/VideoComps/videocomponent.js';
import videoData from '../Videos/Data/video.json';
import readingcompData from '../Reading-Exercises/Data/readingcomp.js';
import discussionquestionsData from "../../Components/DiscussionComps/Data/discussionquestions.json";
import RandomQuestionGenerator from '../../Components/DiscussionComps/questiongenerator.js';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/electionquiz.json';
import GrammarExplanation from '../../Components/GrammarExplanationComps/indspeechexplanation.js';
import GrammarExercises from '../../Components/GrammarExerciseComps/indspeechexercisecomp.js';
import headerimg from '../../Images/voting1.jpg';
import readingimg from '../../Images/orban.jpg';


Modal.setAppElement('#root');

const Elections = () => {

    return (
        <div>
            <SEO
                title='Exam Topics - Elections - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - New Years Resolutions'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Elections</h1>
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
                
                <div className="agenda-subtitle">Quiz</div> 
                <div>                   
                    <div className="agenda-display-grid">
                        <Quiz quizzesData={quizzesData} />
                    </div>                    
                </div>



                <div className="agenda-reading">Reading</div>
                <div className="grammarimage">
                <img src={readingimg} alt="English Exam Exercises" />
                </div>
                <Reading readings={readingcompData} title="The 'Strongman' Prime Minister Losing Power" />
                
                <div className="agenda-listening">Video</div>
                <Video videos={videoData} title="Hungary Elections 2022" />
                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="elections" />
            </div>
        </div>
    );
};

export default Elections;
