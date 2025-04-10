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
import videoData from '../Listening-Exercises/Data/video.json';
import readingcompData from '../Reading-Exercises/Data/readingcomp.json';
import discussionquestionsData from "../../Components/DiscussionComps/Data/discussionquestions.json";
import RandomQuestionGenerator from '../../Components/DiscussionComps/questiongenerator.js';
import ComparisonExplanation from '../../Components/GrammarExplanationComps/comparisonsexplanation.js';
import Comparisonexercises from '../../Components/GrammarExerciseComps/comparisonexercisescomp.js';


Modal.setAppElement('#root');

const Quality = () => {
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
                title='Exam Topics - Quality - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - New Years Resolutions'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Quality</h1> 
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

                <div className="agenda-subtitle">Language Point</div>
                
                
                <div className="languagepoint-container">
                    
                    <div>
                        <div>
                        <ComparisonExplanation /> 
                        </div>                        
                 
                    </div>

                    <div>                   
                        <div className="agenda-display-grid">
                           <Comparisonexercises />
                        </div>
                   
                    </div>

                </div>



                <div className="agenda-subtitle">Reading</div>
                <div className="reading-container"> 
                <Reading readings={readingcompData} title="Planned Obsolescence and the Quality of Goods" />
                </div>
                <div className="agenda-subtitle">Video</div> 
                             

                <Video videos={videoData} title="Products Worse" />
                
                <div className="agenda-subtitle">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="quality" />
            </div>
        </div>
    );
};

export default Quality;
