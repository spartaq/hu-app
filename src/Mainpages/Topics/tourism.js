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
import videoData from '../Videos/Data/video.json';
import readingcompData from '../Reading-Exercises/Data/readingcomp.js';
import discussionquestionsData from "../../Components/DiscussionComps/Data/discussionquestions.json";
import RandomQuestionGenerator from '../../Components/DiscussionComps/questiongenerator.js';
import vocabData from "../../Components/VocabularyListComps/Data/phrasalverblist.json";
import VocabularyMatch from '../../Utils/Activities/VocabMatch.js';
import GapFillExercise from '../../Utils/gapfill.js';
import jsonData from '../Vocabulary-Exercises/Data/tourismgapfill.json';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/tourismquiz.json';
import SuggestExplanation from '../../Components/GrammarExplanationComps/suggestexplanation.js'
import SuggestExercises from '../../Components/GrammarExerciseComps/suggestexercisescomp.js'
import headerimg from '../../Images/budapest-tourism-crowd.jpg';


Modal.setAppElement('#root');

const Tourism = () => {
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
                title='Exam Topics - Tourism - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - Tourism'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Tourism</h1>                    
                </div>


=======
                <div className="grammarimage">
                <img src={headerimg} alt="English Exam Exercises" />
                </div>

                <div className="agenda-languagepoint">Language Point</div>
                
                
                <div className="languagepoint-container">
                    
                    <div>


                        <div>
                        <SuggestExplanation /> 
                        </div>                        
                 
                    </div>

                    <div>

                   
                        <div className="agenda-display-grid">
                           <SuggestExercises />
                        </div>
                   
                    </div>

                </div>
                
                
                

                <div>
                   
              <div className="agenda-quiz">Quiz</div>
                    <Quiz quizzesData={quizzesData} /> 
                    
                    </div>

                

                

                <div className="agenda-reading">Reading</div>
                <div className="reading-container">
                <div className="agenda-display-grid">
                    <GapFillExercise jsonData={jsonData} />
                    </div>
                </div>
                
                <div className="agenda-listening">Video</div>
                             

                <Video videos={videoData} title="Tourism's Impact on Cities" />
                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="tourism" />
            </div>
        </div>
    );
};

export default Tourism;
