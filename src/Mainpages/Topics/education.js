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
import VocabularyMatch from '../../Utils/vocabmatchcolumn.js';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/educationquiz.json';
import GrammarExplanation from '../../Components/GrammarExplanationComps/thirdcondexplanation.js';
import Grammarexercises from '../../Components/GrammarExerciseComps/thirdconditionalexercisescomp.js';
import vocabData from "../../Components/VocabularyListComps/Data/vocabcolumn.json";
import idiomData from "../../Mainpages/Vocabulary-Exercises/Data/idioms.json";
import PhrasalverbsList from '../../Components/VocabularyListComps/phrasalverblist.js';
import headerimg from '../../Images/education1.webp';



Modal.setAppElement('#root');

const Education = () => {
    

    return (
        <div>
            <SEO
                title='Exam Topics - Education - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - New Years Resolutions'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Education</h1>
                </div>
            <div className="grammarimage">
                <img src={headerimg} alt="English Exam Exercises" />
                </div>
                
                
                <div className="agenda-quiz">Quiz</div> 
                <div>                   
                    <div className="agenda-display-grid">
                        <Quiz quizzesData={quizzesData} />
                    </div>                    
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
                           <Grammarexercises />
                        </div>
                   
                    </div>

                </div>
                
                <div className="agenda-subtitle">Vocabulary</div>
                <div>                   
                    <div className="agenda-display-grid">
                        <VocabularyMatch data={vocabData} topic="education" />
                        <hr></hr>
                        <PhrasalverbsList data={idiomData} topic="education" />
                    </div>                    
                </div>

                <div className="agenda-reading">Reading</div>
                <div className="reading-container">
                <Reading readings={readingcompData} title="Education" /> 
                    

                </div>
                
                <div className="agenda-listening">Video</div>
                             

                <Video videos={videoData} title="AI School" />
                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="education" />
            </div>
        </div>
    );
};

export default Education;
