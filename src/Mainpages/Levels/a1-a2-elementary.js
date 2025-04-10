import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SEO from '../../Components/SEO';
import Breadcrumb from '../../Components/Breadcrumb';
import Sidebar from '../../Components/Sidebar';
import FlashcardMenu from '../../Components/Menus/FlashcardMenu';
import elementary from '../../Images/A1Elementary-1280x470.jpg'


const A1A2Elementary = () => {

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
            
            <img src={elementary} alt="English Exam Exercises" />
            <div className="introtext">
				<h3 className="mt-2">A1/A2 Exercises</h3></div>
            <div className="page-description">Here is a collection of vocabulary exercises to do. The exercises are divided by categories which correspond to exam levels. Each category here has 10 exercises, but there are more once you go to the page. Keep chcking back as I am always adding new exercises.</div>
 

            <div className="courses_container">
            <div className="courses_box">
    
				<div className="blog-card">
				<div className="description">
				  <h1>Grammar </h1>
				  <h2>Getting the basics down</h2>
				  <p>Vocabulary exercises, flashcards and quizzes to help you improve and have greater success on exams.</p>
          
          <div class="linkbox-items-body">
          <div class="linkbox-items-body-content">
									  <Link to="/grammar-exercises/to-be">
									  <span><span className="label label-a1">A1</span> To Be: Am, Is, Are</span></Link>
										<i class="fa fa-angle-right"></i>
									  </div>
									  <div class="linkbox-items-body-content">
									  <Link to="/grammar-exercises/simple-present">
										<span><span className="label label-a1">A1</span> Simple Present</span></Link>
										<i class="fa fa-angle-right"></i>
									  </div>
									  <div class="linkbox-items-body-content">
									  <Link to="/grammar-exercises/present-continuous">
										<span><span className="label label-a1">A1</span> Present Continuous</span></Link>
										<i class="fa fa-angle-right"></i>
									  </div>
									  <div class="linkbox-items-body-content">
									  <Link to="/grammar-exercises/simple-past"><span><span className="label label-a1">A1</span> Simple Past</span></Link>
										<i class="fa fa-angle-right"></i>
									  </div>
									  <div class="linkbox-items-body-content">
									  <Link to="/grammar-exercises/future"><span><span className="label label-a1">A1</span> Future</span></Link>
										<i class="fa fa-angle-right"></i>
									  </div>
										</div>
				
        
        </div>
			  </div>
			  
			  <div className="blog-card">
				<div className="description">
				  <h1>Vocabulary </h1>
				  <h2>Having an adequate vocabulary brings greater success.</h2>
				  <p>These kinds of tasks are found on TOEFL, EuroExam, and Cambridge.</p>
				  <div class="linkbox-items-body">
          <div class="linkbox-items-body-content">
									  <Link to="#">
									  <span><span className="label label-a1">A1</span> Around the House</span></Link>
										<i class="fa fa-angle-right"></i>
									  </div>
										</div>
				</div>
			  </div>

        <div className="blog-card">
				<div className="description">
				  <h1>Skills </h1>
				  <h2>Having an adequate vocabulary brings greater success.</h2>
				  <p>These kinds of tasks are found on TOEFL, EuroExam, and Cambridge.</p>
				  <div class="linkbox-items-body">
          <div class="linkbox-items-body-content">
									  <Link to="#">
									  <span><span className="label label-a1">A1</span> Reading</span></Link>
										<i class="fa fa-angle-right"></i>
									  </div><div class="linkbox-items-body-content">
									  <Link to="#">
									  <span><span className="label label-a1">A1</span> Listening</span></Link>
										<i class="fa fa-angle-right"></i>
									  </div>
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
 
export default A1A2Elementary;

