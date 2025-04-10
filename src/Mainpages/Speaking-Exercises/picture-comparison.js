import React, { useState } from 'react';
import Breadcrumbs from '../../Components/Breadcrumb';
import SEO from '../../Components/SEO';
import data from './Data/picturecomp.json';
import SpeakingMenu from '../../Components/Menus/SpeakingMenu';
import Sidebar from '../../Components/Sidebar';

const PictureComparison = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(currentIndex => currentIndex + 1);
    };

    const handlePrev = () => {
        setCurrentIndex(currentIndex => currentIndex - 1);
    };

    const currentEntry = data[currentIndex] || {}; // Ensure data is available and provide a default empty object

    return (
        <div>
             <SEO
        title='Picture Comparison - English Exam Exercises'
        description='A collection of topics to help you prepare for the speaking parts of English exams'
        name='English Exam Exercises'
        type='article'
      />
            
            <div className="introtext">
            <Breadcrumbs />
                <h3 className=" mt-2">Picture comparison {currentIndex + 1}</h3>
            <p>Speak for 2 minutes on each question</p></div> 
            <div className="grammar-container">
                
            <div className="exercises-container div1">



                <div className="picture-comparison">
                    <h2>{currentEntry.picturecompTitle}</h2>
                    <p>{currentEntry.picturecompQuestion}</p>
                    <div className="picture-container">
                        {currentEntry.pics && currentEntry.pics.map((pic, index) => (
                            <img key={index} src={pic} alt={index + 1} className="picture-item" />
                        ))}
                    </div>
                    <div className="button-container">
                        <button onClick={handlePrev} disabled={currentIndex === 0}>Previous</button>
                        <button onClick={handleNext} disabled={currentIndex === data.length - 1}>Next</button>
                    </div>
                </div>
            </div>
            
            <div className="div2">
                <SpeakingMenu />
            </div>
            <div className="div3"> 

<Sidebar />
</div>
            </div>
        </div>
    );
};

export default PictureComparison;
