import React, { useEffect, useState } from 'react';
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
import RandomQuestionGenerator from '../../Components/DiscussionComps/questiongenerator.js';
import vocabData from "../../Components/VocabularyListComps/Data/phrasalverblist.json";
import VocabularyMatch from '../../Utils/vocabmatch.js';
import GapFillExercise from '../../Utils/gapfill.js';
import jsonData from '../Vocabulary-Exercises/Data/gapfill.json'
import PassiveExplanation from '../../Components/GrammarExplanationComps/passiveexplanation.js';
import PassiveExercises from '../../Components/GrammarExerciseComps/passiveexercisescomp.js';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/foodquiz.json';


Modal.setAppElement('#root');

const Food = () => {
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
                title='Exam Topics - Food - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - New Years Resolutions'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Food</h1> 
                    <div className="anchor-menu">
                        <ul>
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    <a href={`#${item.id}`}>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="agenda-subtitle">Language Point</div>
                
                
                <div className="languagepoint-container">
                    
                    <div>


                        <div>
                        <PassiveExplanation /> 
                        </div>                        
                 
                    </div>

                    <div>

                   
                        <div className="agenda-display-grid">
                           <PassiveExercises />
                        </div>
                   
                    </div>

                </div>
                
                <div className="agenda-subtitle">Vocabulary</div> 
                <p>Drag the words onto their proper definitions (left to right)</p>

                <div>
                   
                    <div className="agenda-display-grid">
                    <VocabularyMatch data={vocabData} topic="utensils" />
                    </div>
                    <Quiz quizzesData={quizzesData} /> 
                    
                    </div>
                   
                

                <div className="agenda-subtitle">Reading</div> 
                <div className="reading-container">
                <div className="agenda-display-grid">
                    <GapFillExercise jsonData={jsonData} />
                    </div>
                </div>
                
                <div className="agenda-subtitle">Video</div> 
                             

                <Video videos={videoData} title="Utensils" />
                
                <div className="agenda-subtitle">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="utensils" />
            </div>
        </div>
    );
};

export default Food;
