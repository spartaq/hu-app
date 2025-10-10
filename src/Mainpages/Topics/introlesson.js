import React from 'react';
import Modal from 'react-modal';
import '../../CSS/lesson-agenda.css';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SEO from '../../Components/SEO.js';
import discussionquestionsData from "../../Components/DiscussionComps/Data/discussionquestions.json";
import RandomQuestionGenerator from '../../Components/DiscussionComps/questiongenerator.js';
import GrammarExplanation from '../../Components/GrammarExplanationComps/introductionsexplanation.js';
import ToggleSection from '../../Utils/toggleSection';
import headerimg from '../../Images/education1.webp';

const sections = [
  { label: "Exercises", description: "Do this exercise to practice your grammar.", type: "quiz", subtype: "tense" },
];



Modal.setAppElement('#root');

const Introlesson = () => {
    

    return (
        <div>
            <SEO
                title='Exam Topics - Introductions - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - Introductions'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Introductions</h1>
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

              <div className="agenda-quiz">Practice</div>     
<div>
                    {sections.map((section, i) => (
                    <div className="bottom-margin" key={i}>
                    <ToggleSection  {...section} /> </div>
                    ))}      
                    </div>

                   
                      
                    </div>

                </div>
                
                
             
   
                
             
                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="introductions" />
            </div>
        </div>
    );
};

export default Introlesson;
