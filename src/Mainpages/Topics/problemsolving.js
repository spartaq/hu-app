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
import vocabData from "../../Components/VocabularyListComps/Data/phrasalverblist.json";
import VocabularyMatch from '../../Utils/vocabmatch.js';
import GapFillExercise from '../../Utils/gapfill.js';
import jsonData from '../Vocabulary-Exercises/Data/problemsolvinggapfill.json';
import ImageCarousel from '../../Utils/imgcarousel.js';
import carouselData from '../Vocabulary-Exercises/Data/vocabimages.json'
import quizzesData from '../Quizzes/Data/problemsolvingquiz.json';
import ModalsdeductionExplanation from '../../Components/GrammarExplanationComps/modalsdeductionexplanation.js';
import ModalsdeductionExercises from '../../Components/GrammarExerciseComps/modalsdeductionexercisescomp.js';



Modal.setAppElement('#root');

const Problemsolving = () => {
    

    return (
        <div>
            <SEO
                title='Exam Topics - Problem Solving - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - New Years Resolutions'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Problem Solving</h1>
                </div>

                <div className="agenda-subtitle">Warmer</div>

                <div>
                
                <ImageCarousel data={carouselData} topic="problemsolving" />
                </div>

                <div className="agenda-subtitle">Language Point</div>
                
                
                <div className="languagepoint-container">
                    
                    <div>


                        <div>
                        <ModalsdeductionExplanation /> 
                        </div>                        
                 
                    </div>

                    <div>

                   
                        <div className="agenda-display-grid">
                           <ModalsdeductionExercises />
                        </div>
                   
                    </div>

                </div>
                
                <div className="agenda-subtitle">Vocabulary</div> 
                

                <div>
                   
                <div className="agenda-display-grid">
                    <VocabularyMatch data={vocabData} topic="problemsolving" />
                    </div>
                    
                    </div>
                

                <div className="agenda-subtitle">Reading</div> 
                <div className="reading-container">
                <div className="agenda-display-grid">
                    <GapFillExercise jsonData={jsonData} />
                    </div>
                </div>
                
                <div className="agenda-subtitle">Video</div> 
                             

                <Video videos={videoData} title="Tech solutions" />
                
                <div className="agenda-subtitle">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="problemsolving" />
            </div>
        </div>
    );
};

export default Problemsolving;
