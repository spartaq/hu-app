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
import VocabularyMatch from '../../Utils/vocabmatchcolumn.js';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/automationquiz.json';
import GrammarExplanation from '../../Components/GrammarExplanationComps/passivebeingexplanation.js';
import GrammarExercises from '../../Components/GrammarExerciseComps/passivebeingexercisescomp.js';
import vocabData from "../../Components/VocabularyListComps/Data/vocabcolumn.json";
import idiomData from "../Vocabulary-Exercises/Data/idioms.json";
import PhrasalverbsList from '../../Components/VocabularyListComps/phrasalverblist.js';
import ImageCarousel from '../../Utils/imgcarousel.js';
import carouselData from '../Vocabulary-Exercises/Data/vocabimages.json'


Modal.setAppElement('#root');

const Automation = () => {

    return (
        <div>
            <SEO
                title='Exam Topics - Automation - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - New Years Resolutions'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Automation</h1>
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
                
                <div className="agenda-subtitle">Quiz</div> 
                <div>                   
                    <div className="agenda-display-grid">
                        <Quiz quizzesData={quizzesData} />
                    </div>                    
                </div>



                <div className="agenda-vocabulary">Vocabulary</div>
                <Reading readings={readingcompData} title="Self Service Checkout Reddit" />
                
                <div className="agenda-listening">Video</div>
                <Video videos={videoData} title="Self-Checkout Systems: Convenience or Cumbersome?" />
                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="automation" />
            </div>
        </div>
    );
};

export default Automation;
