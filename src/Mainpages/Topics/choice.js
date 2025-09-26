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
import Wishexercises from '../../Components/GrammarExerciseComps/wishexercisescomp.js';
import WishExplanation from '../../Components/GrammarExplanationComps/wishexplanation.js';
import headerimg from '../../Images/choice1.webp';


Modal.setAppElement('#root');

const Choice = () => {
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
                title='Exam Topics - Choice - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - New Years Resolutions'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Choice</h1> 
                     </div>
                     

                <div className="grammarimage">
                <img src={headerimg} alt="English Exam Exercises" />
                </div> 

                <div className="agenda-languagepoint">Language Point</div>
                
                
                <div className="languagepoint-container">
                    
                    <div>


                        <div>
                        <WishExplanation /> 
                        </div>                        
                 
                    </div>

                    <div>

                   
                        <div className="agenda-display-grid">
                           <Wishexercises />
                        </div>
                   
                    </div>

                </div>

                

                

                <div className="agenda-reading">Reading</div>
                <div className="reading-container">
                <Reading readings={readingcompData} title="Too Many Choices: A Problem That Can Paralyze" /></div>
                
                <div className="agenda-listening">Video</div>
                             

                <Video videos={videoData} title="The Paradox of Choice" />
                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="choice" />
            </div>
        </div>
    );
};

export default Choice;
