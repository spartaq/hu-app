import React, { useEffect, useState } from 'react';
import { TikTokEmbed } from "react-social-media-embed";
import Modal from 'react-modal';
import '../../CSS/lesson-agenda.css';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SEO from '../../Components/SEO.js';
import Reading from '../../Components/ReadingComps/readingcomponent.js';
import Video from '../../Components/VideoComps/videocomponent.js';
import videoData from '../Listening-Exercises/Data/video.json';
import readingcompData from '../Reading-Exercises/Data/readingcomp.js';
import discussionquestionsData from "../../Components/DiscussionComps/Data/discussionquestions.json";
import RandomQuestionGenerator from '../../Components/DiscussionComps/questiongenerator.js';
import SecondcondprodExercises from '../../Components/GrammarExerciseComps/secondcondprodexercisescomp.js';
import SecondcondExplanation from '../../Components/GrammarExplanationComps/secondcondexplanation.js';


Modal.setAppElement('#root');

const Neighbors = () => {
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
                title='Exam Topics - Neighbors - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - Neighbors'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Neighbors</h1>
                    <div className="anchor-menu">
                        <ul>
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    <a href={`#${item.id}`}>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
               

                <div className="agenda-subtitle">Language Point</div> <div 
                className="languagepoint-container">
                    
                    <div>


                        <div>
                        <SecondcondExplanation /> 
                        </div>                        
                 
                    </div>

                    <div>

                   
                        <div className="agenda-display-grid">
                           <SecondcondprodExercises />
                        </div>
                   
                    </div>

                </div>

                <div className="agenda-subtitle">Reading</div>
                <div className="reading-container">   
                <Reading readings={readingcompData} title="Neighbor Conflicts and Etiquette" />
                </div>
                
                <div className="agenda-subtitle">Video</div> 
                
                <TikTokEmbed url="https://www.tiktok.com/@bbcnews/video/7466832344540843296" />
                <Video videos={videoData} title="Blocked View" />

                
                <div className="agenda-subtitle">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="neighbors" />
            </div>
        </div>
    );
};

export default Neighbors;
