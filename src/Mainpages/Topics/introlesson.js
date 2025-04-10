import React from 'react';
import Modal from 'react-modal';
import '../../CSS/lesson-agenda.css';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SEO from '../../Components/SEO.js';
import discussionquestionsData from "../../Components/DiscussionComps/Data/discussionquestions.json";
import RandomQuestionGenerator from '../../Components/DiscussionComps/questiongenerator.js';
import VocabularyMatch from '../../Utils/vocabmatch.js';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/introlessonquiz.json';
import GrammarExplanation from '../../Components/GrammarExplanationComps/tenseexplanation.js';
import Grammarexercises from '../../Components/GrammarExerciseComps/tenseexercisescomp.js';
import vocabData from "../../Components/VocabularyListComps/Data/phrasalverblist.json";



Modal.setAppElement('#root');

const Introlesson = () => {
    

    return (
        <div>
            <SEO
                title='Exam Topics - Introductory Lesson - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - New Years Resolutions'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Introduction</h1>
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
                        <VocabularyMatch data={vocabData} topic="introlesson" />
                    </div>                    
                </div>
                
                <div className="agenda-subtitle">Quiz</div> 
                <div>                   
                    <div className="agenda-display-grid">
                        <Quiz quizzesData={quizzesData} />
                    </div>                    
                </div>

   
                
             
                
                <div className="agenda-subtitle">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="telecom" />
            </div>
        </div>
    );
};

export default Introlesson;
