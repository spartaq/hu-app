import React from 'react';
import '../CSS/flashcards.css'
import { Link } from 'react-router-dom';
import SEO from '../Components/SEO';
import Sidebar from '../Components/Sidebar';
import Breadcrumb from '../Components/Breadcrumb';
import flashcard from '../Images/flashcard2-1280x470.jpg'

const Flashcards = () => {
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
<img src={flashcard} alt="English Exam Exercises" />
<div className="introtext">
<h3 className="mt-2">Flashcards</h3></div>
<div className="page-description">Here is a collection of flashcards to learn and practice vocabulary. The words are the full list of suggested vocabulary by level based on the International English Standards Committee. The cards are divided by type of word as well as by subject.  

<div class="courses_container">
<div class="courses_box">

<div className="blog-card">
<div className="description">
<h1>B2 Adjectives</h1>
<h2>Getting the basics down</h2>
<p>Vocabulary exercises, flashcards and quizzes to help you improve and have greater success on exams.</p>
<ul>
<li> <Link to="/flashcards/b2-adj-flashcards"><span className="label label-b2">Go</span>
</Link></li>
</ul>
</div>
</div>

<div className="blog-card">
<div className="description">
<h1>C1 Vocabulary</h1>
<h2>Comprehensive list of vocabulary for the C1 level.</h2>
<p>Arranged in blocks of 20 words, designed to be practiced daily for a few mintues.</p>
<ul>
<li> <Link to="/flashcards/c1-vocab-flashcards"><span className="label label-c1">Go</span>
</Link></li>
</ul>
</div>
</div>

<div className="blog-card">
<div className="description">
<h1>C1 Verbs</h1>
<h2>Getting the basics down</h2>
<p> vocabulary exercises including all the vocabulary points needed per level.</p>
<ul>
    <li><Link to="/flashcards/c1-verb-flashcards"> C1 Advanced Verbs</Link></li>
</ul>
</div>
</div>

<div className="blog-card">
<div className="description">
<h1>Irregular Verbs</h1>
<h2>Getting the basics down</h2>
<p> vocabulary exercises including all the vocabulary points needed per level.</p>
<ul>
    <li><Link to="/flashcards/irregular-verbs"> Irregular Verbs</Link></li>
</ul>
</div>
</div>

<div className="blog-card">
<div className="description">
<h1>100 Most Common Verbs</h1>
<h2>Getting the basics down</h2>
<p> vocabulary exercises including all the vocabulary points needed per level.</p>
<ul>
    <li><Link to="/flashcards/verbshun"> 100 Most Common Verbs (Hun)</Link></li>
</ul>
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
 
export default Flashcards;

