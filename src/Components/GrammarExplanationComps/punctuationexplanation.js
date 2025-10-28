import React from 'react';
import '../../CSS/grammarPage.css';
import { FaLightbulb, FaBookOpen } from 'react-icons/fa';

const PunctuationExplanation = () => {
  return (
    <div className="grammar-explanation">

      <h2><FaBookOpen /> Punctuation Grammar Explanation</h2>

<p>Think of <strong>punctuation marks</strong> as road signs for reading and writing—they guide the flow of ideas just like signs guide traffic. Each mark has its own role in helping the reader understand meaning, rhythm, and emotion.</p>
<hr />

<h3><FaLightbulb /> Period (.) – Stop Sign</h3>
<p>Just like a stop sign brings a car to a full stop, a <strong>period</strong> signals the end of a sentence. It tells the reader to pause before moving on.</p>
<ul>
  <li>I went to the store<strong>.</strong></li>
  <li>She likes coffee<strong>.</strong></li>
</ul>

<h3><FaLightbulb /> Comma (,) – Speed Bump</h3>
<p>A <strong>comma</strong> slows things down, helping to separate ideas within a sentence. It prevents confusion, just like a speed bump prevents reckless driving.</p>
<ul>
  <li>After dinner<strong>,</strong> we watched a movie.</li>
  <li>My brother, who lives abroad, is visiting soon.</li>
</ul>

<h3><FaLightbulb /> Semicolon (;) – Roundabout</h3>
<p>A <strong>semicolon</strong> connects two closely related ideas; it allows smooth transitions between them. It’s like a roundabout that keeps traffic flowing without a full stop.</p>
<ul>
  <li>She loves painting<strong>;</strong> it helps her relax.</li>
  <li>I wanted to go out<strong>;</strong> however, it started raining.</li>
</ul>

<h3><FaLightbulb /> Colon (:) – Green Light</h3>
<p>A <strong>colon</strong> signals that something important is coming next: a list, an explanation, or an example. It’s like a green light directing you forward with purpose.</p>
<ul>
  <li>You need three things<strong>:</strong> time, effort, and patience.</li>
  <li>He got what he wanted<strong>:</strong> a fresh start.</li>
</ul>

<h3><FaLightbulb /> Dash (—) – Detour Sign</h3>
<p>A <strong>dash</strong> introduces extra information or a sudden shift in thought—like a detour that takes you briefly off the main path before returning to the road.</p>
<ul>
  <li>I’ll call you tomorrow — if I remember!</li>
  <li>She wasn’t just tired — she was exhausted.</li>
</ul>

<h3><FaLightbulb /> Parentheses (()) – Rest Stop</h3>
<p><strong>Parentheses</strong> hold extra details that aren’t essential to the main route (but which provide useful side information). It’s like a rest stop offering additional options without forcing you to exit the highway.</p>
<ul>
  <li>We arrived early (around 6 p.m.).</li>
  <li>My dog (a golden retriever) loves swimming.</li>
</ul>

<h3><FaLightbulb /> Question Mark (?) – Intersection Sign</h3>
<p>A <strong>question mark</strong> signals an open-ended statement that requires thought or response. It’s like an intersection where you must decide which way to go.</p>
<ul>
  <li>What time is it?</li>
  <li>Do you like pizza?</li>
</ul>

<h3><FaLightbulb /> Exclamation Point (!) – Warning Sign</h3>
<p>This punctuation mark adds <strong>emphasis, excitement, or urgency</strong>! It’s like how a warning sign alerts drivers to pay attention.</p>
<ul>
  <li>Watch out!</li>
  <li>That’s amazing!</li>
</ul>

<h3>Notes</h3>
<ul>
  <li>Use punctuation to guide your reader’s pace and understanding.</li>
  <li>Too many punctuation marks can confuse the reader — use them thoughtfully.</li>
  <li>Each punctuation mark has a specific function; knowing them helps make your writing clear and expressive.</li>
</ul>


    </div>
  );
};

export default PunctuationExplanation;
