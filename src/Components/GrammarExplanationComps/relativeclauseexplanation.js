import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';

const RelativeclauseExplanation = () => {
  return (
    <div className="grammar-explanation">

      <h2><FaBookOpen /> Relative Clauses</h2>

      <p>
        Relative clauses provide extra information about a noun in a sentence. They are introduced by relative pronouns: <strong>who, which, that, whose, where,</strong> and <strong>when</strong>.
      </p>

      <h3><FaLightbulb /> Defining Relative Clause - no comma</h3>
      <p>
        These clauses give essential information about the noun. Without them, the sentence would lose its meaning. <strong>No commas are used</strong> in defining relative clauses.
      </p>
      <div className="example-block">
        <ul>
          <li>This is the software <strong>that our team built</strong>.</li>
        </ul>
      </div>

      <p><strong>Relative pronouns in defining clauses:</strong></p>
      <ul>
        <li><strong>Who</strong> – for people (subject) → <em>The engineer who led the project is retiring.</em></li>
        <li><strong>Which</strong> – for things → <em>The tool which automates testing is useful.</em></li>
        <li><strong>That</strong> – for people or things (often replaces "who" or "which" in defining clauses) → <em>The code that he wrote is efficient.</em></li>
        <li><strong>Whose</strong> – for possession → <em>The developer whose idea was implemented received an award.</em></li>
        <li><strong>Where</strong> – for places → <em>The office where I work has a great view.</em></li>
        <li><strong>When</strong> – for times → <em>The year when we launched the product was 2020.</em></li>
      </ul>

      <h3><FaLightbulb /> Non-Defining Relative Clauses - comma</h3>
      <p>
        These clauses provide extra (non-essential) information and <strong>must be separated by commas</strong>. If removed, the sentence still makes sense.
      </p>
      <div className="example-block">
        <ul>
          <li>Our manager, <strong>who has worked here for 10 years</strong>, is leaving.</li>
          <li>The new software, <strong>which was released last week</strong>, has a few bugs.</li>
        </ul>
      </div>

      <p><strong>Relative pronouns used:</strong></p>
      <ul>
        <li><strong>Who</strong> (for people) → <em>John, who leads the team, is very experienced.</em></li>
        <li><strong>Which</strong> (for things) → <em>Our product, which won an award, is selling well.</em></li>
        <li><strong>Whose</strong> (for possession) → <em>My colleague, whose laptop is broken, needs a new one.</em></li>
        <li><strong>Where / When</strong> → <em>The company, where I started my career, is expanding.</em></li>
      </ul>

      <p><strong>🚨 Note:</strong> "That" is <strong>not used</strong> in non-defining clauses.</p>

      <h3><FaLightbulb /> Using "What" as a Relative Pronoun</h3>
      <p>
        <strong>"What"</strong> means "the thing(s) that" and does not refer to a specific noun.
      </p>
      <div className="example-block">
        <ul>
          <li>She explained <strong>what</strong> caused the issue. (= the thing that caused the issue)</li>
        </ul>
      </div>

      <p><strong>🚨 Do not use "what" instead of "that" or "which":</strong></p>
      <p>❌ <em>The software what I use is efficient.</em> → <strong>Incorrect</strong></p>
      <p>✅ <em>The software that I use is efficient.</em></p>

    </div>
  );
};

export default RelativeclauseExplanation;
