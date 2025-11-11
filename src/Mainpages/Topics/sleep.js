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
import readingcompData from '../Reading-Exercises/Data/readingcomp.js';
import Reading from '../../Components/ReadingComps/readingcomponent.js';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/sleepquiz.json';
import InfinitiveExplanation from '../../Components/GrammarExplanationComps/infinitiveexplanation.js';
import Infinitiveexercises from '../../Components/GrammarExerciseComps/infinitiveexercisescomp.js';
import headerimg from '../../Images/sleep.webp';
import ToggleSection from '../../Utils/toggleSection';

const sections = [
  { label: "Exercises", description: "Do this exercise to practice your grammar.", type: "quiz", subtype: "infinitives" },
];



Modal.setAppElement('#root');

const Sleep = () => {
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
                title='Exam Topics - Sleep - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of sleep'
                name='English Exam Exercises - Sleep'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Sleep</h1>
                </div>

                <div className="grammarimage">
                <img src={headerimg} alt="English Exam Exercises" />
                </div> 


                <div className="agenda-languagepoint">Language Point</div>
                
                
                <div className="languagepoint-container">
                    
                    <div>


                        <div>
                        <InfinitiveExplanation /> 
                        </div>                        
                 
                    </div>

                    <div>

<div>
                   
                               <div>
        {sections.map((section, i) => (
          <div className="bottom-margin" key={i}>
          <ToggleSection  {...section} /> </div>
        ))}      
           </div>
                    </div>
                   
                        <div className="agenda-display-grid">
                           <Infinitiveexercises />
                        </div>
                   
                    </div>

                </div>
                
                <div className="agenda-quiz">Quiz</div> 
                

                <div>               
                    <Quiz quizzesData={quizzesData} />                     
                    </div>
                

                <div className="agenda-reading">Reading</div>
                <div className="reading-container">
                <Reading readings={readingcompData} title="Popular Myths About Sleep, Debunked" />
                </div>
                
                <div className="agenda-listening">Video</div>
                             

                <Video videos={videoData} title="The Power of Naps" />
                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="sleep" />
            </div>
        </div>
    );
};

export default Sleep;
