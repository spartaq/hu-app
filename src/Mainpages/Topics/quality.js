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
import GrammarExplanation from '../../Components/GrammarExplanationComps/comparisonsexplanation.js';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/fashionquiz.json';
import headerimg from '../../Images/fashion.webp';
import ToggleSection from '../../Utils/toggleSection';

const sections = [
  { label: "Exercises", description: "Do this exercise to practice your grammar.", type: "quiz", subtype: "comparison" },
];



Modal.setAppElement('#root');

const Quality = () => {


    return (
        <div>
            <SEO
                title='Exam Topics - Quality - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of Quality'
                name='English Exam Exercises - Quality'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Fast Fashion</h1>
                </div>

                <div className="grammarimage">
                <img src={headerimg} alt="English Exam Exercises" />
                </div> 

                <div className="agenda-languagepoint">Language Point</div>
                
                
                <div className="languagepoint-container">
                    
                    <div>
                        <div>
                        <GrammarExplanation /> 
                        </div>                        
                 
                    </div>

                  

                    <div>
        {sections.map((section, i) => (
          <div className="bottom-margin" key={i}>
          <ToggleSection  {...section} /> </div>
        ))}      
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
                <Reading readings={readingcompData} title="Defining Fast Fashion" />
                </div>
                <div className="agenda-listening">Video</div>
                             

                <Video videos={videoData} title="Products Worse" />
                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="quality" />
            </div>
        </div>
    );
};

export default Quality;
