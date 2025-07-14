import { Link } from 'react-router-dom';
import SEO from '../../Components/SEO';
import Breadcrumbs from '../../Components/Breadcrumb';
import writing from '../../Images/writing1-1280x470.jpg';

const Writingexercises = () => {
    return ( 
    <div>
         <SEO
            title='Writing Exercises - English Exam Exercises'
            description='A big list of English writing topics to practice for exams'
            name='English Exam Exercises'
            type='article' />
        
        <Breadcrumbs />
        <div className='home-container'>
            <div className='homebodytext'>
            <img src={writing} alt="English Exam Exercises" />
            <div className="introtext">
      <h3 className="mt-2">Writing Exercises</h3></div>
            <div className="page-description">Here is a collection of vocabulary exercises to do. The exercises are divided by categories which correspond to exam levels. Each category here has 10 exercises, but there are more once you go to the page. Keep chcking back as I am always adding new exercises. 

            <div class="courses_container">
            <div class="courses_box">
    
    <div className="blog-card">
    <div className="description">
      <h1>Writing Tips</h1>
      <h2>Getting the basics down</h2>
      <p>Writing guide, flashcards and quizzes to help you improve and have greater success on exams.</p>
      <ul>
                <li><Link to="/writing-exercises/writing1"><span className="label label-b2">B2</span> Writing Tips</Link></li>
        </ul>
    </div>
  </div>
  


  </div>
</div>
</div>

</div>
<div>

      </div>

  </div>



        </div>
    )
}
 
export default Writingexercises;

