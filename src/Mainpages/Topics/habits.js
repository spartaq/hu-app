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
import videoData from '../Videos/Data/video.json';
import readingcompData from '../Reading-Exercises/Data/readingcomp.js';
import discussionquestionsData from "../../Components/DiscussionComps/Data/discussionquestions.json";
import IdiomsList from '../../Components/VocabularyListComps/idiomslist.js';
import idiomsData from '../../Components/VocabularyListComps/Data/idiomslist.json';
import RandomQuestionGenerator from '../../Components/DiscussionComps/questiongenerator.js';
import PastHabitsExplanation from '../../Components/GrammarExplanationComps/pasthabitsexplanation.js';
import ToggleSection from '../../Utils/toggleSection';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/caffeinequiz.json';
import headerimg from '../../Images/habit1.jpg';

const sections = [
  { label: "Exercises", description: "Do this exercise to practice your grammar.", type: "quiz", subtype: "habits" },
];



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
            <div className="grammarimage">
                <img src={headerimg} alt="English Exam Exercises" />
                </div>
                <div className="agenda-languagepoint">Language Point</div>
                
                
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
                  

                    <div>
                    {sections.map((section, i) => (
                    <div className="bottom-margin" key={i}>
                    <ToggleSection  {...section} /> </div>
                    ))}      
                    </div>


                </div>

                <div className="agenda-subtitle">Vocabulary</div>
                
                <div>
                   

                    {isGridVisible && (
                        <div className="grammar-display-grid">
                        <IdiomsList idiomslist={idiomsData} topic="habits" /> 
                                    
                                </div>                        
                             )}

                    


                </div>

                <div className="agenda-reading">Reading</div>

                <Reading readings={readingcompData} title="Breaking Bad Habits" />
                
                <div className="agenda-listening">Video</div>               

                <Video videos={videoData} title="Habits" />
                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="habits" />
               
            </div>
        </div>
    );
};

export default Habits;
