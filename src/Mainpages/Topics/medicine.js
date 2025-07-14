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
import vocabData from "../../Components/VocabularyListComps/Data/vocabularylist.json";
import VocabularyMatch from '../../Utils/Activities/VocabMatch.js';
import GapFillExercise from '../../Utils/gapfill.js';
import jsonData from '../Vocabulary-Exercises/Data/medicinegapfill.json';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/medicinequiz.json';
import UnlessExplanation from '../../Components/GrammarExplanationComps/unlessexplanation.js';
import Unlessexercises from '../../Components/GrammarExerciseComps/unlessexercisescomp.js';



Modal.setAppElement('#root');

const Medicine = () => {
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
                title='Exam Topics - Medicine - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - New Years Resolutions'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Medicine</h1>
                </div>

                
                
                <div className="agenda-subtitle">Vocabulary</div> 
                

                <div>
                   
                <div className="agenda-display-grid">
                    <VocabularyMatch data={vocabData} topic="medicine" />
                    </div>
                    <Quiz quizzesData={quizzesData} /> 
                    
                    </div>
                

                <div className="agenda-reading">Reading</div>
                <div className="reading-container">
                <div className="agenda-display-grid">
                    <GapFillExercise jsonData={jsonData} />
                    </div>
                </div>
                
                <div className="agenda-listening">Video</div>
                             

                <Video videos={videoData} title="Theranos" />
                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="medicine" />
            </div>
        </div>
    );
};

export default Medicine;
