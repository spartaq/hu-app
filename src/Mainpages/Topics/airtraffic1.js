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
import GrammarExercises from '../../Components/GrammarExerciseComps/secondconditionalexercisescomp.js';
import GrammarExplanation from '../../Components/GrammarExplanationComps/secondcondexplanation.js';


Modal.setAppElement('#root');

const Airtraffic = () => {

    return (
        <div>
            <SEO
                title='Exam Topics - Air Traffic - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - New Years Resolutions'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Air Traffic</h1> 

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

                

                

                <div className="agenda-reading">Reading</div>
                <div className="reading-container">
                <Reading readings={readingcompData} title="Plane Crashes: Perception vs. Reality" /></div>
                
                <div className="agenda-listening">Video</div>
                             

                <Video videos={videoData} title="Air Traffic Controllers" />
                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="atc" />
            </div>
        </div>
    );
};

export default Airtraffic;
