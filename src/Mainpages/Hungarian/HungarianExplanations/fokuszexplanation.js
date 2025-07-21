import React from 'react';
import '../../../CSS/grammarPage.css';
import { FaLightbulb, FaListUl, FaLanguage, FaBookOpen } from 'react-icons/fa';


const FokuszExplanation = () => {
  return (
    <div>
        
          <div className="grammar-explanation">

<h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Grammar Explanation</h2>
<p>Hungarian word order is flexible, but not random. The position of words in a sentence changes what is emphasized. This is called <strong>focus</strong>. The most important (new or emphasized) information comes right before the verb.</p>

<h3><FaLightbulb style={{ marginRight: '0.5rem' }} /> Word Order and Focus in Hungarian</h3>
<p>Unlike English, Hungarian does not always follow Subject-Verb-Object (SVO) order. The word that appears immediately before the verb is usually the focus — the part that answers the question, “What’s new or important?”</p>

<h3><FaListUl style={{ marginRight: '0.5rem' }} /> Examples</h3>
<div className="grammar-flex-table">
  {[
    ['English Meaning', 'Hungarian Sentence', 'Focus'],
    ['I bought a book.', 'Vettem egy könyvet.', '“egy könyvet” is new info (what I bought)'],
    ['A book is what I bought.', 'Egy könyvet vettem.', 'Focus on “book” (not a pen, etc.)'],
    ['Yesterday I bought a book.', 'Tegnap vettem egy könyvet.', 'Focus on “yesterday” (when)'],
    ['I bought the book in the store.', 'A boltban vettem meg a könyvet.', 'Focus on “boltban” (where)'],
    ['I bought the book, not borrowed it.', 'Megvettem a könyvet, nem kölcsönöztem.', 'Focus on “megvettem” (bought)']
  ].map(([eng, hun, focus], index) => (
    <div key={index} className="grammar-flex-row">
      <div className="grammar-cell">{eng}</div>
      <div className="grammar-cell">{hun}</div>
      <div className="grammar-cell">{focus}</div>
    </div>
  ))}
</div>

<h3><FaLightbulb style={{ marginRight: '0.5rem' }} /> Important Notes</h3>
<ul>
  <li>The verb usually stays in the second position in neutral sentences, but in focused sentences, the focus word moves directly before the verb.</li>
  <li>The sentence-final position often contains “known” or “less important” information.</li>
  <li>The word order helps highlight <strong>what is new, contrasted, or emphasized</strong> — not just grammatical roles.</li>
</ul>

<h3><FaLanguage style={{ marginRight: '0.5rem' }} /> More Examples</h3>
<ul>
  <li><strong>Én</strong> ettem meg a csokit. - <em>I</em> ate the chocolate (not you).</li>
  <li><strong>A csokit</strong> ettem meg. - I ate <em>the chocolate</em> (not the cake).</li>
  <li><strong>Tegnap</strong> ettem csokit. - I ate chocolate <em>yesterday</em>.</li>
</ul>


          </div>
       
      
    </div>
  );
};

export default FokuszExplanation;


