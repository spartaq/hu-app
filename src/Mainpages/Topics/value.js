
import React from 'react';
import Modal from 'react-modal';
import '../../CSS/lesson-agenda.css';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SEO from '../../Components/SEO.js';
import Video from '../../Components/VideoComps/videocomponent.js';
import videoData from '../Videos/Data/video.json';
import readingcompData from '../Reading-Exercises/Data/readingcomp.js';
import Reading from '../../Components/ReadingComps/readingcomponent.js';
import discussionquestionsData from "../../Components/DiscussionComps/Data/discussionquestions.json";
import RandomQuestionGenerator from '../../Components/DiscussionComps/questiongenerator.js';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/corruptionquiz.json';
import GrammarExplanation from '../../Components/GrammarExplanationComps/unlessexplanation.js';
import ImageCarousel from '../../Utils/imgcarousel.js';
import carouselData from '../Vocabulary-Exercises/Data/vocabimages.json';
import ToggleSection from '../../Utils/toggleSection';

const sections = [
  { label: "Exercises", description: "Do this exercise to practice your grammar.", type: "quiz", subtype: "unless" },
];



Modal.setAppElement('#root');

const Value = () => {
    

    return (
        <div>
            <SEO
                title='Exam Topics - Value - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - Value'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Value</h1>
                </div>

                <div className="agenda-subtitle">Warmer</div>

                        <div>

                        <ImageCarousel data={carouselData} topic="Value" />
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
                <Reading readings={readingcompData} title="Enron and the California Blackouts" />
                </div>

                <div className="agenda-listening">Video</div>
                 <Video videos={videoData} title="The Rise and Fall of Enron" />
                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="Value" />
            </div>
        </div>
    );
};

export default Value;