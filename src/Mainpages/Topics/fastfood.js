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
import readingcompData from '../Reading-Exercises/Data/readingcomp.js';
import Reading from '../../Components/ReadingComps/readingcomponent.js';
import discussionquestionsData from "../../Components/DiscussionComps/Data/discussionquestions.json";
import RandomQuestionGenerator from '../../Components/DiscussionComps/questiongenerator.js';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/fastfoodquiz.json';
import GrammarExplanation from '../../Components/GrammarExplanationComps/perfectpastexplanation.js';
import Grammarexercises from '../../Components/GrammarExerciseComps/perfectpastexercisescomp.js';
import idiomData from "../../Mainpages/Vocabulary-Exercises/Data/idioms.json";
import PhrasalverbsList from '../../Components/VocabularyListComps/phrasalverblist.js';
import headerimg from '../../Images/fast-food1.jpg';



Modal.setAppElement('#root');

const FastFood = () => {
    

    return (
        <div>
            <SEO
                title='Exam Topics - Fast Food - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the Fast Food'
                name='English Exam Exercises - New Years Resolutions'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title"><div className="grammarimage">
                <img src={headerimg} alt="English Exam Exercises" /></div>
                    <h1 className="mt-2">Fast Food</h1>
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
                
                <div className="agenda-subtitle">Vocabulary</div>
                <div>                   
                    <div className="agenda-display-grid">
                        <PhrasalverbsList data={idiomData} topic="fastfood" />
                    </div>                    
                </div>

                <div className="agenda-subtitle">Reading</div> 
                <div className="reading-container">
                <Reading readings={readingcompData} title="Changing Food Culture" /> 
                    

                </div>
                
                <div className="agenda-subtitle">Video</div> 
                             

                <Video videos={videoData} title="Fast Food" />
                
                <div className="agenda-subtitle">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="fastfood" />
            </div>
        </div>
    );
};

export default FastFood;
