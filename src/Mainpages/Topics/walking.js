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
import GerundExplanation from '../../Components/GrammarExplanationComps/gerundexplanation.js';
import Gerundexercises from '../../Components/GrammarExerciseComps/gerundexercisescomp.js';
import headerimg from '../../Images/walking.jpg';
import ToggleSection from '../../Utils/toggleSection';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/walkingquiz.json';

const sections = [
  { label: "Exercises", description: "Do this exercise to practice your grammar.", type: "quiz", subtype: "gerunds" },
];


Modal.setAppElement('#root');

const Walking = () => {
    
    return (
        <div>
            <SEO
                title='Exam Topics - Fitness - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - New Years Resolutions'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                <div>                   
                <h1 className="mt-2">Walking</h1> 
                  </div>  
                      <div className="grammarimage">
                <img src={headerimg} alt="English Exam Exercises" />
                </div> 
                </div>

                <div className="agenda-languagepoint">Language Point</div>
                
                
                <div className="languagepoint-container">
                    
                    <div>


                        <div>
                        <GerundExplanation /> 
                        </div>                        
                 
                    </div>

                    <div>

                   
                        <div>
                    {sections.map((section, i) => (
                    <div className="bottom-margin" key={i}>
                    <ToggleSection  {...section} /> </div>
                    ))}      
                    </div>
                   
                    </div>

                </div>

                
 <div className="agenda-quiz">Quiz</div> 
                <div>                   
                    <div className="agenda-display-grid">
                        <Quiz quizzesData={quizzesData} />
                    </div>                    
                </div>
                

                <div className="agenda-reading">Reading</div>
                <div className="reading-container">
                <Reading readings={readingcompData} title="Recommended Steps per Day by Age" /></div>
                
                <div className="agenda-listening">Video</div>
                             

                <Video videos={videoData} title="Debunking Exercise Myths" />
                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="walking" />
            </div>
        </div>
    );
};

export default Walking;
