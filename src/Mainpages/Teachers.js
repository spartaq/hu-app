import Breadcrumb from '../Components/Breadcrumb';
import GrammarMenu from '../Components/Menus/GrammarMenu';
import SEO from '../Components/SEO';
import Sidebar from '../Components/Sidebar';
import grammar from '../Images/teacher1-1280x470.jpg';



export default function Teachers () {
    return ( 
        <div>
        <SEO
   title='Grammar Exercises - English Exam Exercises'
   description='A big list of English grammar exercises to practice for exams'
   name='English Exam Exercises'
   type='article' />
   <Breadcrumb />

<div className="grammar-container">



<div className="exercises-container div1">
<div className='homebodytext'>
<img src={grammar} alt="English Exam Exercises" />   
<section>
<h2>Lesson Plans</h2>
<p>some text</p>
</section>

<section>
<h2>Learning Methodolgy Background</h2>
<p>some text</p>
</section>

</div>
</div>

<div className="gmenu"> <GrammarMenu /> 
</div>

<div> 

   <Sidebar />
</div>

</div>
</div>
    );
}

