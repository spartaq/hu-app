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
import VocabularyMatch from '../../Utils/vocabmatch.js';
import GapFillExercise from '../../Utils/gapfill.js';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/disagreementquiz.json';
import ImageCarousel from '../../Utils/imgcarousel.js';
import GrammarExplanation from '../../Components/VocabularyListComps/wordformsexplanation.js';
import Grammarexercises from '../../Components/VocabularyExerciseComps/wordformsexercisescomp.js';
import vocabData from "../../Components/VocabularyListComps/Data/vocabularylist.json";
import jsonData from '../Vocabulary-Exercises/Data/persuadinggapfill.json';



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
                        <VocabularyMatch data={vocabData} topic="persuading" />
                    </div>                    
                </div>
                
                <div className="agenda-subtitle">Quiz</div> 
                <div>                   
                    <div className="agenda-display-grid">
                        <Quiz quizzesData={quizzesData} />
                    </div>                    
                </div>

                <div className="agenda-subtitle">Reading</div> 
                <div className="reading-container">
                <div className="agenda-display-grid">
                    <GapFillExercise jsonData={jsonData} />
                    </div>
                </div>
                
                <div className="agenda-subtitle">Video</div> 
                             

                <Video videos={videoData} title="Persuading2" />
                
                <div className="agenda-subtitle">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="persuading" />
            </div>
        </div>
    );
};

export default Persuading;
