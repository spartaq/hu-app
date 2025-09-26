import React, { useState } from 'react';
import Modal from 'react-modal';
										   
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SEO from '../../Components/SEO.js';
import Reading from '../../Components/ReadingComps/readingcomponent.js';
import Video from '../../Components/VideoComps/videocomponent.js';
import videoData from '../Videos/Data/video.json';
import readingcompData from '../Reading-Exercises/Data/readingcomp.js';
import '../../CSS/lesson-agenda.css';
import GrammarExplanation from '../../Components/GrammarExplanationComps/indspeechexplanation.js';
import GrammarExercises from '../../Components/GrammarExerciseComps/indspeechexercisecomp.js';
import discussionquestionsData from "../../Components/DiscussionComps/Data/discussionquestions.json";
import RandomQuestionGenerator from '../../Components/DiscussionComps/questiongenerator.js';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/caffeinequiz.json';
import headerimg from '../../Images/caffeine1.webp';

Modal.setAppElement('#root');

const Caffeine = () => {									   

    const [isGridVisible, setIsGridVisible] = useState(true);
    const [isExerciseVisible, setIsExerciseVisible] = useState(false);

    const toggleGridVisibility = () => setIsGridVisible(!isGridVisible);
    const toggleExerciseVisibility = () => setIsExerciseVisible(!isExerciseVisible);

    return (
        <div>
            <SEO
                title='Exam Topics - Caffeine - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of caffeine'
                name='English Exam Exercises - Caffeine'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Caffeine</h1>
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
				
				<Reading readings={readingcompData} title="Caffeine: The Workplace Drug of Choice" />
                
                <div className="agenda-listening">Video</div>														   
					  

                <Video videos={videoData} title="caffeine" />
						  
					<div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="caffeine" />
            
                
                
            </div>
        </div>
    );
};

export default Caffeine;
