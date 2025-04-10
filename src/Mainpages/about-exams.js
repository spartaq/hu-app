import Breadcrumb from '../Components/Breadcrumb';
import GrammarMenu from '../Components/Menus/GrammarMenu';
import SEO from '../Components/SEO';
import Sidebar from '../Components/Sidebar';
import grammar from '../Images/grammar4-1280x470.jpg';

export default function Aboutexams () {
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
        <h2>Cambridge Exams</h2>
        <p>The Cambridge English exams are internationally recognized certifications that assess English language proficiency. They cover a range of levels from basic (A1) to advanced (C2), ensuring that students can demonstrate their language skills for academic, professional, and personal purposes. Popular exams include the Cambridge English: Preliminary (PET), First (FCE), Advanced (CAE), and Proficiency (CPE).</p>
    </section>

    <section>
        <h2>IELTS</h2>
        <p>The International English Language Testing System (IELTS) is a standardized test designed to assess the English language proficiency of non-native speakers. It is widely accepted by educational institutions, employers, and immigration authorities around the world. The test evaluates four key language skills: listening, reading, writing, and speaking, with scores ranging from 1 to 9.</p>
    </section>

    <section>
        <h2>EuroExam</h2>
        <p>The EuroExam is a suite of English language exams recognized throughout Europe. It is designed to assess the practical communication skills of candidates, with a focus on real-life language use. The exams are available at different levels, from A1 to C2, and test a range of skills including listening, reading, writing, and speaking.</p>
    </section>

    <section>
        <h2>TOEFL</h2>
        <p>The Test of English as a Foreign Language (TOEFL) is a standardized test that measures the English language proficiency of non-native speakers. It is primarily used by universities and colleges in English-speaking countries to assess the readiness of applicants for academic coursework. The test covers four sections: reading, listening, speaking, and writing, with a focus on academic English.</p>
    </section>

    <section>
        <h2>General High School Exams</h2>
        <p>General high school exams are standardized tests taken by students to assess their knowledge and skills across various subjects. These exams are typically required for graduation and can include a wide range of topics such as mathematics, science, literature, and social studies. The format and content of these exams vary by country and education system.</p>
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