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
import GrammarExplanation from '../../Components/GrammarExplanationComps/edingexplanation.js';
import headerimg from '../../Images/parents1.jpg';
import ToggleSection from '../../Utils/toggleSection.js';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/bucketlistquiz.json';

const sections = [
  { label: "Exercises", description: "Do this exercise to practice your grammar.", type: "quiz", subtype: "eding" },
];


Modal.setAppElement('#root');

const Parenting = () => {
    
    return (
        <div>
            <SEO
                title='Exam Topics - Parenting - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of Parenting'
                name='English Exam Exercises - Parenting'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                <div>                   
                <h1 className="mt-2">Parenting</h1> 
                  </div>  
                      <div className="grammarimage">
                <img src={headerimg} alt="English Exam Exercises" />
                </div> 
                </div>

                <div className="agenda-languagepoint">Language Point</div>
                
                
                <div className="languagepoint-container">
                    
                    <div>


                        <div>
                        <GrammarExplanation /> 
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
                <Reading readings={readingcompData} title="18 Hilarious Parenting Stories" /></div>
                
                <div className="agenda-listening">Video</div>
                             

                <Video videos={videoData} title="Parental Control" />
                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="parenting" />
            </div>
        </div>
    );
};

export default Parenting;
