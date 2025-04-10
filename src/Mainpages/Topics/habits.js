import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../CSS/lesson-agenda.css';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SEO from '../../Components/SEO.js';
import Reading from '../../Components/ReadingComps/readingcomponent.js';
import Video from '../../Components/VideoComps/videocomponent.js';
import videoData from '../Listening-Exercises/Data/video.json';
import readingcompData from '../Reading-Exercises/Data/readingcomp.json';
import discussionquestionsData from "../../Components/DiscussionComps/Data/discussionquestions.json";
import IdiomsList from '../../Components/VocabularyListComps/idiomslist.js';
import Idiomsexercise from '../../Components/VocabularyExerciseComps/idiomsexercisescomp.js';
import idiomsData from '../../Components/VocabularyListComps/Data/idiomslist.json';
import idiomsexerciseData from '../../Mainpages/Vocabulary-Exercises/Data/idioms.json';
import RandomQuestionGenerator from '../../Components/DiscussionComps/questiongenerator.js';
import PastHabitsExplanation from '../../Components/GrammarExplanationComps/pasthabitsexplanation.js';
import Pasthabitsexcomp from '../../Components/GrammarExerciseComps/pasthabitsexercisecomp.js';


Modal.setAppElement('#root');

const Habits = () => {

    const [isGridVisible, setIsGridVisible] = useState(true);
    const [isExerciseVisible, setIsExerciseVisible] = useState(true);



    const toggleGridVisibility = () => setIsGridVisible(!isGridVisible);
    const toggleExerciseVisibility = () => setIsExerciseVisible(!isExerciseVisible);

    return (
        <div>
            <SEO
                title='Exam Topics - Habits - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - New Years Resolutions'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Habits</h1>
                </div>

                <div className="agenda-subtitle">Language Point</div>
                
                
                <div>
                    <h2>Ways to express habits</h2>
                    <div className="grammarctrl descriptionbox">
                        <button type="button" className="grammarbtn" onClick={toggleGridVisibility}>
                            {isGridVisible ? "Hide Language Point" : "Show Language Point"}
                        </button>
                    </div>

                    {isGridVisible && (
                        <div className="grammar-display-grid">
                        <PastHabitsExplanation />
                                    
                                </div>                        
                             )}

                    <div className="grammarctrl descriptionbox">
                        <button type="button" className="grammarbtn" onClick={toggleExerciseVisibility}>
                            {isExerciseVisible ? "Hide Exercise" : "Show Exercise"}
                        </button>
                    </div>
                    {isExerciseVisible && (
                        <div className="grammar-display-grid">
                           <Pasthabitsexcomp /> 
                        </div>
                    )}


                </div>

                <div className="agenda-subtitle">Vocabulary</div>
                
                <div>
                    <p>Expressions related to habits</p>                    
                    <div className="grammarctrl descriptionbox">
                        <button type="button" className="grammarbtn" onClick={toggleGridVisibility}>
                            {isGridVisible ? "Hide Language Point" : "Show Language Point"}
                        </button>
                    </div>

                    {isGridVisible && (
                        <div className="grammar-display-grid">
                        <IdiomsList idiomslist={idiomsData} topic="habits" /> 
                                    
                                </div>                        
                             )}

                    <div className="grammarctrl descriptionbox">
                        <button type="button" className="grammarbtn" onClick={toggleExerciseVisibility}>
                            {isExerciseVisible ? "Hide Exercise" : "Show Exercise"}
                        </button>
                    </div>
                    {isExerciseVisible && (
                        <div className="grammar-display-grid">
                           <Idiomsexercise idiomsexercise={idiomsexerciseData} topic="habits" /> 
                        </div>
                    )}


                </div>

                <div className="agenda-subtitle">Reading</div>

                <Reading readings={readingcompData} title="Breaking Bad Habits" />
                
                <div className="agenda-subtitle">Video</div>                

                <Video videos={videoData} title="Habits" />
                
                <div className="agenda-subtitle">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="habits" />
               
            </div>
        </div>
    );
};

export default Habits;
