import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SEO from '../../Components/SEO';
import Breadcrumb from '../../Components/Breadcrumb';
import Sidebar from '../../Components/Sidebar';
import FlashcardMenu from '../../Components/Menus/FlashcardMenu';
import advanced from '../../Images/advancedbooks-1280x470.jpg'


const C1Advanced = () => {

  const navigate = useNavigate();

  const handleClick = (readingTitle) => {
      navigate('/reading-exercises/reading-comprehension', {
          state: { readingcompTitle: readingTitle }
      });
  };

    return (
    <div>
         <SEO
            title='A1 Exercises - English Exam Exercises'
            description='A1 Level exercises to practice for exams'
            name='English Exam Exercises'
            type='article' />
            
            <Breadcrumb />
            <div className='home-container'>
  <div className='homebodytext'>
            
            <img src={advanced} alt="English Exam Exercises" />
            <div className="introtext">
      <h3 className="mt-2">C1 Advanced Exercises</h3></div>
            <div className="page-description">Here is a collection of vocabulary exercises to do. The exercises are divided by categories which correspond to exam levels. Each category here has 10 exercises, but there are more once you go to the page. Keep chcking back as I am always adding new exercises. 

            <div className="courses_container">
            <div className="courses_box">
    
    <div className="blog-card">
    <div className="description">
      <h1>Grammar </h1>
      <h2>Getting the basics down</h2>
      <p>Vocabulary exercises, flashcards and quizzes to help you improve and have greater success on exams.</p>
      <ul>
      <li><Link to="/reading-exercises/reading-comprehension?readingcompTitle=abroad"><span className="label label-b2">B2</span> A Year Abroad</Link></li>
      <li><Link to="/reading-exercises/reading-comprehension?topic=daily"><span className="label label-b2">B2</span> Daily</Link></li>
        </ul>
    </div>
  </div>
  
  <div className="blog-card">
    <div className="description">
      <h1>Vocabulary </h1>
      <h2>Having an adequate vocabulary brings greater success.</h2>
      <p>These kinds of tasks are found on TOEFL, EuroExam, and Cambridge.</p>
      <ul>
                <li><Link to="/reading-exercises/paragraph-headings"><span className="label label-a2">B2</span> Paragraph Headings</Link></li>
        </ul>
    </div>
  </div>

  </div>



</div>
</div>

</div>


<div>
<div className="gmenu div2"> <FlashcardMenu /> 
</div>
             <div><Sidebar/></div>
      
      
      </div>
  </div>
    </div>
    )
}
 
export default C1Advanced;

