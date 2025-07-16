import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../Components/SEO';
import Sidebar from '../../Components/Sidebar';
import Breadcrumb from '../../Components/Breadcrumb';
import grammar from '../../Images/grammar4-1280x470.jpg';


const Grammarexercises = () => {
    return (
    <div>
         <SEO
            title='Grammar Exercises - English Exam Exercises'
            description='A big list of English grammar exercises to practice for exams'
            name='English Exam Exercises'
            type='article' />
            <Breadcrumb />
            
			
	<div className='home-container'>
        
		<div className='homebodytext'>
            <img src={grammar} alt="English Exam Exercises" />
            <div className="introtext">
				<h3 className="mt-2">Grammar Exercises</h3>
			</div>
				
				<div className="page-description">Here is a collection of grammar exercises to do. The exercises are divided by categories which correspond to exam levels. Each category here has 10 exercises, but there are more once you go to the page. Keep chcking back as I am always adding new exercises.</div>

				<div class="courses_container">
					<div class="courses_box">

								<div className="blog-card">
									<div className="description">
									  <h1>Verb Tenses</h1>
									  <h2>Getting the basics down</h2>
									  <p>Vocabulary exercises, flashcards and quizzes to help you improve and have greater success on exams.</p>
									  <div class="linkbox-items-body">
									  <div class="linkbox-items-body-content">
									  <Link to="/grammar-exercises/to-be">
									  <span><span className="label label-a1">A1</span> To Be: Am, Is, Are</span></Link>
										<i class="fa fa-angle-right"></i>
									  </div>
									  <div class="linkbox-items-body-content">
									  <Link to="/grammar-exercises/to-be-past">
									  <span><span className="label label-a1">A1</span> To Be: Was, Were</span></Link>
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
									  <Link to="/grammar-exercises/simpcont">
										<span><span className="label label-a2">A2</span> Simple Present vs. Present Continuous</span></Link>
										<i class="fa fa-angle-right"></i>
									  </div>
									  <div class="linkbox-items-body-content">
									  <Link to="/grammar-exercises/past-continuous"><span><span className="label label-a2">A2</span> Past Continuous</span></Link>
										<i class="fa fa-angle-right"></i>
									  </div>
									  <div class="linkbox-items-body-content">
									  <Link to="/grammar-exercises/simple-past"><span><span className="label label-a2">A2</span> Simple Past</span></Link>
										<i class="fa fa-angle-right"></i>
									  </div>
									  <div class="linkbox-items-body-content">
									  <Link to="/grammar-exercises/future"><span><span className="label label-a2">A2</span> Future</span></Link>
										<i class="fa fa-angle-right"></i>
									  </div>
									  <div class="linkbox-items-body-content">
									  <Link to="/grammar-exercises/present-perfect"><span><span className="label label-b1">B1</span> Present Perfect</span></Link>
										<i class="fa fa-angle-right"></i>
									  </div>
									  <div class="linkbox-items-body-content">
									  <Link to="/grammar-exercises/perfect-past"><span><span className="label label-b1">B1</span> Present Perfect vs. Simple Past</span></Link>
										<i class="fa fa-angle-right"></i>
									  </div>
										</div>
									</div>
								</div>
								  
							    <div className="blog-card">
									<div className="description">
									  <h1>Conditionals</h1>
									  <h2>Having an adequate vocabulary brings greater success.</h2>
									  <p>Vocabulary exercises, flashcards and quizzes to help you improve and have greater success on exams.</p>
									  <ul>
										<li><Link to="/grammar-exercises/first-conditional"><span className="label label-b2">B2</span> 1st Conditional</Link></li>
										<li><Link to="/grammar-exercises/first-cond-prod"><span className="label label-b2">B2</span> 1st Conditional (Prod)</Link></li>
									  <li><Link to="/grammar-exercises/second-conditional"><span className="label label-b2">B2</span> 2nd Conditional</Link></li>
									  <li><Link to="/grammar-exercises/second-cond-prod"><span className="label label-b2">B2</span> 2nd Conditional (prod)</Link></li>
									  <li><Link to="/grammar-exercises/third-conditional"><span className="label label-c1">C1</span> 3rd Conditional</Link></li>
									  <li><Link to="/grammar-exercises/third-cond-prod"><span className="label label-c1">C1</span> 3rd Conditional (prod)</Link></li>
									  <li><Link to="/grammar-exercises/mixed-cond-prod"><span className="label label-c1">C1</span> Mixed Conditionals (prod)</Link></li>
										</ul>
									</div>
								</div>

								<div className="blog-card">
									<div className="description">
									  <h1>Other grammar points</h1>
									  <h2>Having an adequate vocabulary brings greater success.</h2>
									  <p>Vocabulary exercises, flashcards and quizzes to help you improve and have greater success on exams.</p>
									  <ul>
										<li><Link to="/grammar-exercises/indirect-speech"><span className="label label-b2">B2</span> Indirect Speech</Link></li>
									  <li><Link to="/grammar-exercises/passive"><span className="label label-b2">B2</span> Passive</Link></li>
									  <li><Link to="/grammar-exercises/passivebeing"><span className="label label-b2">B2</span> Passive being</Link></li>
									  <li><Link to="/grammar-exercises/sense-verbs"><span className="label label-b2">B2</span> Sense Verbs</Link></li>
									  <li><Link to="/grammar-exercises/ed-ing"><span className="label label-b2">B2</span> Ed or Ing</Link></li>
									  <li><Link to="/grammar-exercises/modals-obligation"><span className="label label-c1">C1</span> Modals Obligation</Link></li>
									  <li><Link to="/grammar-exercises/modals-deduction"><span className="label label-c1">C1</span> Modals Deduction</Link></li>
									  <li><Link to="/grammar-exercises/reported-speech"><span className="label label-c1">C1</span> Reported Speech</Link></li>
									  <li><Link to="/grammar-exercises/gerunds"><span className="label label-c1">C1</span> Gerunds</Link></li>
									  <li><Link to="/grammar-exercises/infinitives"><span className="label label-c1">C1</span> Infinitives</Link></li>
									  <li><Link to="/grammar-exercises/unless"><span className="label label-c1">C1</span> Unless</Link></li>
									  <li><Link to="/grammar-exercises/adjadv"><span className="label label-c1">C1</span> Adjectives and Adverbs</Link></li>
									  <li><Link to="/grammar-exercises/pasthabits"><span className="label label-c1">C1</span> Past Habits</Link></li>
									  <li><Link to="/grammar-exercises/soenough"><span className="label label-c1">C1</span> So and Enough</Link></li>
									  <li><Link to="/grammar-exercises/causeeffect"><span className="label label-c1">C1</span> Cause and Effect</Link></li>
									  <li><Link to="/grammar-exercises/relativeclauses"><span className="label label-c1">C1</span> Relative Clauses</Link></li>
									  <li><Link to="/grammar-exercises/comparison"><span className="label label-c1">C1</span> Comparison</Link></li>
									  <li><Link to="/grammar-exercises/jelenido"><span className="label label-c1">C1</span> Jelen Ido (Simple Present)</Link></li>
										</ul>
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
 
export default Grammarexercises;

