import React, { useState } from 'react';
import Modal from 'react-modal';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SEO from '../../Components/SEO.js';
import '../../CSS/lesson-agenda.css';
import Reading from '../../Components/ReadingComps/readingcomponent.js';
import Video from '../../Components/VideoComps/videocomponent.js';
import videoData from '../Listening-Exercises/Data/video.json';
import readingcompData from '../Reading-Exercises/Data/readingcomp.js';
import discussionquestionsData from "../../Components/DiscussionComps/Data/discussionquestions.json";
import Futureexcomp from '../../Components/GrammarExerciseComps/futureexercisecomp.js';
import FutureExplanation from '../../Components/GrammarExplanationComps/futureexplanation.js';
import IdiomsList from '../../Components/VocabularyListComps/idiomslist.js';
import Idiomsexercise from '../../Components/VocabularyExerciseComps/idiomsexercisescomp.js';
import idiomsData from '../../Components/VocabularyListComps/Data/idiomslist.json';
import idiomsexerciseData from '../../Mainpages/Vocabulary-Exercises/Data/idioms.json';
import RandomQuestionGenerator from '../../Components/DiscussionComps/questiongenerator.js';


Modal.setAppElement('#root');

const NewYearResolutions = () => {

    const [isGridVisible, setIsGridVisible] = useState(true);
    const [isExerciseVisible, setIsExerciseVisible] = useState(true);



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
                    <h2>Ways to express future plans</h2>
                    <div className="grammarctrl descriptionbox">
                        <button type="button" className="grammarbtn" onClick={toggleGridVisibility}>
                            {isGridVisible ? "Hide Language Point" : "Show Language Point"}
                        </button>
                    </div>

                    {isGridVisible && (
                        <div className="grammar-display-grid">
                        <FutureExplanation />
                                    
                                </div>                        
                             )}

                    <div className="grammarctrl descriptionbox">
                        <button type="button" className="grammarbtn" onClick={toggleExerciseVisibility}>
                            {isExerciseVisible ? "Hide Exercise" : "Show Exercise"}
                        </button>
                    </div>
                    {isExerciseVisible && (
                        <div className="grammar-display-grid">
                           <Futureexcomp /> 
                        </div>
                    )}


                </div>

                <div className="agenda-subtitle">Vocabulary</div>
                
                <div>
                    <p>Idioms connected to New Year's and renewal</p>
                    <div className="grammarctrl descriptionbox">
                        <button type="button" className="grammarbtn" onClick={toggleGridVisibility}>
                            {isGridVisible ? "Hide Language Point" : "Show Language Point"}
                        </button>
                    </div>

                    {isGridVisible && (
                        <div className="grammar-display-grid">
                        <IdiomsList idiomslist={idiomsData} topic="resolutions" /> 
                                    
                                </div>                        
                             )}

                    <div className="grammarctrl descriptionbox">
                        <button type="button" className="grammarbtn" onClick={toggleExerciseVisibility}>
                            {isExerciseVisible ? "Hide Exercise" : "Show Exercise"}
                        </button>
                    </div>
                    {isExerciseVisible && (
                        <div className="grammar-display-grid">
                           <Idiomsexercise idiomsexercise={idiomsexerciseData} topic="resolutions" /> 
                        </div>
                    )}


                </div>



                <div className="agenda-reading">Reading</div>

                <Reading readings={readingcompData} title="DW Resolutions" />
                
                <div className="agenda-listening">Video</div>               

                <Video videos={videoData} title="Easy to Make" />
                
                <div className="agenda-discussion">Discussion</div>

                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="resolutions" />

                
            </div>
        </div>
    );
};

export default NewYearResolutions;
