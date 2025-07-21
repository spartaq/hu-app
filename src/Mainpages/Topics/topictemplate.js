import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import '../../CSS/lesson-agenda.css';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SEO from '../../Components/SEO.js';
import Video from '../../Components/VideoComps/videocomponent.js';
import videoData from '../Videos/Data/video.json';
import discussionquestionsData from "../../Components/DiscussionComps/Data/discussionquestions.json";
import RandomQuestionGenerator from '../../Components/DiscussionComps/questiongenerator.js';
import VocabularyMatch from '../../Utils/Activities/VocabMatch.js';
import GapFillExercise from '../../Utils/gapfill.js';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/sustainabilityquiz.json';
import GrammarExplanation from '../../Components/GrammarExplanationComps/unlessexplanation.js';
import Grammarexercises from '../../Components/GrammarExerciseComps/unlessexercisescomp.js';
import vocabData from "../../Components/VocabularyListComps/Data/phrasalverblist.json";
import jsonData from '../Vocabulary-Exercises/Data/sustainabilitygapfill.json';



Modal.setAppElement('#root');

const Template = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        // Dynamically gather all agenda-subtitle elements
        const subtitles = Array.from(document.querySelectorAll('.agenda-subtitle')).map((subtitle, index) => ({
            id: `section-${index}`,
            text: subtitle.textContent,
        }));

        // Add IDs to the subtitles
        subtitles.forEach((item, index) => {
            const element = document.querySelectorAll('.agenda-subtitle')[index];
            element.setAttribute('id', item.id);
        });

        setMenuItems(subtitles);
    }, []);

    return (
        <div>
            <SEO
                title='Exam Topics - ### - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - New Years Resolutions'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">###</h1>
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
                        <VocabularyMatch data={vocabData} topic="###" />
                    </div>                    
                </div>
                
                <div className="agenda-subtitle">Quiz</div> 
                <div>                   
                    <div className="agenda-display-grid">
                        <Quiz quizzesData={quizzesData} />
                    </div>                    
                </div>

                <div className="agenda-reading">Reading</div>
                <div className="reading-container">
                <div className="agenda-display-grid">
                    <GapFillExercise jsonData={jsonData} />
                    </div>
                </div>
                
                <div className="agenda-listening">Video</div>
                             

                <Video videos={videoData} title="###" />
                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="###" />
            </div>
        </div>
    );
};

export default Template;
