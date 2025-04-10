import Breadcrumb from '../Components/Breadcrumb';
import SEO from '../Components/SEO';
import Sidebar from '../Components/Sidebar';



const LessonPlans = () => {
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

    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Lesson Plan</h1>

     
      <section style={{ marginBottom: "20px" }}>
        <h2>Small Talk (5 min)</h2>
        <p>Ask each participant something to get them talking.</p>
      </section>

     
      <section style={{ marginBottom: "20px" }}>
        <h2>Warmer (5 min)</h2>
        <p>Engage participants with a quick game or puzzle.</p>
        <ul>
          <li>Example: Solve a simple riddle.</li>
          <li>Play a quick vocabulary game.</li>
        </ul>
      </section>

     
      <section style={{ marginBottom: "20px" }}>
        <h2>Language Point (10 min)</h2>
        <p>Introduce the language concept, for example, indirect questions:</p>
        <ul>
          <li>Direct: "Where is the station?"</li>
          <li>Indirect: "Could you tell me where the station is?"</li>
        </ul>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2>Topic Presentation (15 min)</h2>
        <p>Present the topic using a video or reading material.</p>
        <p><strong>Focus:</strong> Vocabulary building related to the topic.</p>
        <p>Example: Watch a short video on travel tips and discuss key terms.</p>
      </section>

      {/* Topic Discussion */}
      <section style={{ marginBottom: "20px" }}>
        <h2>Topic Discussion (20 min)</h2>
        <p>Engage students in a discussion based on the topic presented.</p>
        <p>Suggested questions:</p>
        <ul>
          <li>What did you find most interesting about the video/reading?</li>
          <li>Have you experienced something similar?</li>
        </ul>
      </section>

      {/* Cooler */}
      <section style={{ marginBottom: "20px" }}>
        <h2>Cooler (10 min)</h2>
        <p>Wrap up the session with a fun or reflective activity.</p>
        <ul>
          <li>Example: Play a short word association game.</li>
          <li>Reflect on what was learned during the session.</li>
        </ul>
      </section>
    </div>


                </div>
        </div>

        <div><Sidebar /></div>

</div>
</div>
    );
}

export default LessonPlans;
