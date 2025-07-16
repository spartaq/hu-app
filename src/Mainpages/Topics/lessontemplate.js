import React, { useState } from 'react';
import Modal from 'react-modal';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SEO from '../../Components/SEO.js';
import Reading from '../../Components/ReadingComps/readingcomponent.js';
import Video from '../../Components/VideoComps/videocomponent.js';
import videoData from '../Listening-Exercises/Data/video.json';
import readingcompData from '../Reading-Exercises/Data/readingcomp.js';
import '../../CSS/lesson-agenda.css';
import IndirectSpeechExercise from '../../Components/GrammarExerciseComps/indspeechexercisecomp.js';
import IdiomsList from '../../Components/VocabularyListComps/idiomslist.js';

Modal.setAppElement('#root');

const LessonTemplate = () => {

    const [isGridVisible, setIsGridVisible] = useState(true);
    const [isExerciseVisible, setIsExerciseVisible] = useState(false);



    const toggleGridVisibility = () => setIsGridVisible(!isGridVisible);
    const toggleExerciseVisibility = () => setIsExerciseVisible(!isExerciseVisible);

    return (
        <div>
            <SEO
                title='Exam Topics - New Years Resolutions - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - New Years Resolutions'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">New Year's Resolutions</h1>
                </div>

                <div className="agenda-languagepoint">Language Point</div>
                
                <div>
                    <p>Idioms connect to New Year's and renewal</p>
                    <div className="grammarctrl descriptionbox">
                        <button type="button" className="grammarbtn" onClick={toggleGridVisibility}>
                            {isGridVisible ? "Hide Language Point" : "Show Language Point"}
                        </button>
                    </div>

                    {isGridVisible && (
                        <div className="grammar-display-grid">
                        <IdiomsList /> 
                                    
                                </div>                        
                             )}

                    <div className="grammarctrl descriptionbox">
                        <button type="button" className="grammarbtn" onClick={toggleExerciseVisibility}>
                            {isExerciseVisible ? "Hide Exercise" : "Show Exercise"}
                        </button>
                    </div>
                    {isExerciseVisible && (
                        <div className="grammar-display-grid">
                           <IndirectSpeechExercise /> 
                        </div>
                    )}


                </div>

                <div className="agenda-reading">Reading</div>

                <Reading readings={readingcompData} title="Nature" />
                
                <div className="agenda-listening">Video</div>               

                <Video videos={videoData} title="New Year" />
                
                <div className="agenda-discussion">Discussion</div>
                <div>    
                <ul>
                    <li><strong>What would you try if you knew you could not fail?</strong></li>
                    <li><strong>What would you like to be your biggest triumph by the end of the year?</strong></li>
                    <li><strong>What advice would you like to give yourself as you begin the New Year?</strong></li>
                    <li><strong>What would you be most happy about completing?</strong></li>
                    <li><strong>What major indulgence are you willing to experience?</strong></li>
                    <li><strong>What would you most like to change about yourself?</strong></li>
                    <li><strong>What do you think your biggest risk will be?</strong></li>
                    <li><strong>What brings you the most joy and how are you going to do more of that?</strong></li>
                    <li><strong>What is one change you could make to your lifestyle that would give you more peace?</strong></li>
                    <li><strong>At the end of the year, how would you like your life to be transformed?</strong></li>
                    <li><strong>What are some New Year's resolutions you have made in the past?</strong></li>
                    <li><strong>How can New Year's resolutions help you in the coming year?</strong></li>
                    <li><strong>What are some New Year's resolutions that you have broken quickly?</strong></li>
                    <li><strong>What are some New Year's resolutions that your friends have made?</strong></li>
                    <li><strong>How can New Year's resolutions be a good opportunity for change?</strong></li>
                    <li><strong>What New Year's resolutions are you still keeping now?</strong></li>
                    <li><strong>Are you going to lose weight?</strong></li>
                    <li><strong>Are you going to exercise every day?</strong></li>
                    <li><strong>Are you going to give up smoking?</strong></li>
                    <li><strong>Are you going to study harder?</strong></li>
                    </ul>
                    </div>
            </div>
        </div>
    );
};

export default LessonTemplate;
