import { Link } from 'react-router-dom';
import SEO from '../../Components/SEO';
import Breadcrumbs from '../../Components/Breadcrumb';
import Sidebar from '../../Components/Sidebar';
import speaking from '../../Images/speaking3-1280x470.jpg';


const Speakingexercises = () => {
    return (
        <div>
         <SEO
            title='Speaking Exercises - English Exam Exercises'
            description='A big list of English speaking topics and prompts to practice for exams'
            name='English Exam Exercises'
            type='article' />
            <Breadcrumbs />
            <div className='home-container'>
            <div className='homebodytext'>
            <img src={speaking} alt="English Exam Exercises" />
            <div className="introtext">
      <h3 className="mt-2">Speaking Exercises</h3></div>
            <div className="page-description">Here is a collection of grammar exercises to do. The exercises are divided by categories which correspond to exam levels. Each category here has 10 exercises, but there are more once you go to the page. Keep chcking back as I am always adding new exercises. 

            <div class="courses_container">
            <div class="courses_box">
    
    <div className="blog-card">
    <div className="description">
      <h1>Speaking Topics</h1>
      <h2>Getting the basics down</h2>
      <p>Vocabulary exercises, flashcards and quizzes to help you improve and have greater success on exams.</p>
      <ul>
      <li><Link to="/speaking-exercises/speaking-topics"><span className="label label-b2">B2</span> Speaking Topics 1</Link></li></ul>
    </div>
  </div>
  
  <div className="blog-card">
    <div className="description">
      <h1>Picture Comparison</h1>
      <h2>Having an adequate vocabulary brings greater success.</h2>
      <p>Vocabulary exercises, flashcards and quizzes to help you improve and have greater success on exams.</p>
      <ul>
      <li><Link to="/speaking-exercises/picture-comparison"><span className="label label-b2">B2</span> Picture Comparison</Link></li></ul>
    </div>
  </div>

  </div>
</div>
</div>

</div>
<div>

             <div><Sidebar/></div>
      </div> 
        
        </div>
        
       
    </div>
    )
}
 
export default Speakingexercises;

