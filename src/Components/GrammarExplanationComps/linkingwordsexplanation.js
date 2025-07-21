import React from 'react';
<<<<<<< HEAD


const LinkingwordsExplanation = () => {

    return (
        <div>

<div>
                            <div className="agendagrammar">
                            <h1>Linking Words</h1>

<p><em>A clause is a group of words that has a subject and a verb. It’s like a small sentence inside a bigger sentence.</em></p>

<h2>So</h2>
<p><strong>Function:</strong> Shows a result or consequence of something.</p>
<p><strong>Structure:</strong> [Clause 1], so [Clause 2].</p>
<p><strong>Example:</strong> We had several issues during deployment, so we postponed the release.</p>

<h2>Which</h2>
<p><strong>Function:</strong> Used to add extra information about something mentioned earlier (relative clause).</p>
<p><strong>Structure:</strong> [Main Clause], which [Extra Information].</p>
<p><strong>Example:</strong> The client provided new requirements, which caused us to rethink our timeline.</p>

<h2>Until</h2>
<p><strong>Function:</strong> Indicates up to the point in time something happens or changes.</p>
<p><strong>Structure:</strong> [Clause 1] until [Clause 2].</p>
<p><strong>Example:</strong> We can't proceed until we receive the client’s approval.</p>

<h2>Why</h2>
<p><strong>Function:</strong> Introduces a reason for something.</p>
<p><strong>Structure:</strong> [The action], which is why [Explanation].</p>
<p><strong>Example:</strong> The server crashed multiple times, which is why we need to investigate further.</p>

<h2>While</h2>
<p><strong>Function:</strong> Describes two actions happening at the same time.</p>
<p><strong>Structure:</strong> [Action 1] while [Action 2].</p>
<p><strong>Example:</strong> I’ll review the code while you work on the documentation.</p>

<h2>When</h2>
<p><strong>Function:</strong> Refers to a time something happens or happened.</p>
<p><strong>Structure:</strong> [Clause 1] when [Clause 2].</p>
<p><strong>Example:</strong> We’ll deploy the changes when the testing phase is complete.</p>

<h2>As</h2>
<p><strong>Function:</strong> Indicates two things happening at the same time, or shows reason.</p>
<p><strong>Structure:</strong> [Clause 1] as [Clause 2].</p>
<p><strong>Example (simultaneous actions):</strong> The system crashed as we were deploying the latest update.</p>
<p><strong>Example (reason):</strong> We’re pausing the deployment as the QA team found a critical bug.</p>

<h2>Before</h2>
<p><strong>Function:</strong> Refers to an action or event that happens earlier in time.</p>
<p><strong>Structure:</strong> [Clause 1] before [Clause 2].</p>
<p><strong>Example:</strong> We need to complete the tests before deploying to production.</p>

<h2>After</h2>
<p><strong>Function:</strong> Refers to an action or event that happens later in time.</p>
<p><strong>Structure:</strong> [Clause 1] after [Clause 2].</p>
<p><strong>Example:</strong> We’ll schedule a team meeting after the project is launched.</p>

<h2>As long as</h2>
<p><strong>Function:</strong> Indicates a condition that must be met.</p>
<p><strong>Structure:</strong> [Clause 1] as long as [Condition].</p>
<p><strong>Example:</strong> We can proceed as long as the client signs the contract.</p>

<h2>Whenever</h2>
<p><strong>Function:</strong> Refers to any time something happens or any opportunity something can happen.</p>
<p><strong>Structure:</strong> [Clause 1] whenever [Action].</p>
<p><strong>Example:</strong> Feel free to ask questions whenever you need clarification.</p>

<h2>Because</h2>
<p><strong>Function:</strong> Shows a reason or cause.</p>
<p><strong>Structure:</strong> [Clause 1] because [Reason].</p>
<p><strong>Example:</strong> We delayed the launch because we discovered several critical bugs.</p>

<h2>As soon as</h2>
<p><strong>Function:</strong> Refers to something happening immediately after another action or event.</p>
<p><strong>Structure:</strong> [Clause 1] as soon as [Action].</p>
<p><strong>Example:</strong> We’ll notify the client as soon as the product update is live.</p>

<h2>Since</h2>
<p><strong>Function:</strong> Indicates a point in time or a reason.</p>
<p><strong>Structure (time):</strong> [Action] since [Starting Point].</p>
<p><strong>Example (time):</strong> We’ve been working remotely since last year.</p>
<p><strong>Structure (reason):</strong> [Clause 1] since [Reason].</p>
<p><strong>Example (reason):</strong> The meeting was postponed since many people were unavailable.</p>

<h2>Once</h2>
<p><strong>Function:</strong> Refers to an action that will happen after another action is completed.</p>
<p><strong>Structure:</strong> [Clause 1] once [Action].</p>
<p><strong>Example:</strong> We’ll deploy the new feature once the final tests are done.</p>

<h2>Though</h2>
<p><strong>Function:</strong> Introduces a contrast or opposing idea.</p>
<p><strong>Structure:</strong> [Clause 1], though [Opposite or Contrast].</p>
<p><strong>Example:</strong> We missed the deadline, though the client was understanding.</p>

<h2>If</h2>
<p><strong>Function:</strong> Refers to a condition and its possible outcome.</p>
<p><strong>Structure:</strong> [Condition] if [Action].</p>
<p><strong>Example:</strong> We can reschedule the meeting if more than half of the team is unavailable.</p>

<h2>In case</h2>
<p><strong>Function:</strong> Refers to something that might happen and prepares for it.</p>
<p><strong>Structure:</strong> [Action] in case [Potential Scenario].</p>
<p><strong>Example:</strong> Bring your laptop to the meeting in case we need to run any demos.</p>

<h2>Even though</h2>
<p><strong>Function:</strong> Shows a surprising contrast.</p>
<p><strong>Structure:</strong> [Clause 1] even though [Surprising or Contradicting Clause].</p>
<p><strong>Example:</strong> We managed to finish the project even though we had a tight deadline.</p>

<h2>As if</h2>
<p><strong>Function:</strong> Refers to something imaginary or hypothetical.</p>
<p><strong>Structure:</strong> [Action] as if [Imaginary Scenario].</p>
<p><strong>Example:</strong> He acted as if he didn’t know about the changes.</p>




                                     </div>
                                    
                                </div>

        
        
        
        </div>
);
};

export default LinkingwordsExplanation;
=======
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';

const LinkingWordsExplanation = () => {
  return (
    <div className="grammar-explanation">
      <h2><FaBookOpen /> Linking Words</h2>

      <p>
        Linking words (also called conjunctions or connectors) help connect ideas in a sentence or between sentences. They show relationships such as cause and effect, contrast, time, or condition.
      </p>

      <div className="example-block">
        <p><strong>Examples:</strong></p>
        <ul>
          <li>The meeting was delayed, <strong>so</strong> we used the time to review the report.</li>
          <li>We can go out <strong>after</strong> we finish work.</li>
          <li>You can leave early <strong>as long as</strong> everything is done.</li>
        </ul>
      </div>

      <div className="grammar-explanation-text">
        <h3><FaLightbulb /> Common Linking Words and Their Use</h3>

        <div className="grammar-flex-table">
          {[
            ['so', 'Shows a result or consequence.'],
            ['because', 'Gives a reason.'],
            ['although / though', 'Shows contrast.'],
            ['if', 'Gives a condition.'],
            ['when', 'Refers to a specific time.'],
            ['while', 'Describes two actions happening at the same time.'],
            ['until', 'Shows how long something continues.'],
            ['before', 'Indicates an earlier time.'],
            ['after', 'Indicates a later time.'],
            ['as soon as', 'Means immediately after something happens.'],
            ['since', 'Gives a reason or indicates time from a point in the past.'],
            ['as long as', 'Shows a condition that must be true.'],
            ['in case', 'Describes a precaution.'],
            ['even though', 'Adds a surprising contrast.'],
            ['once', 'Means “after” something happens.'],
            ['as if', 'Describes an imaginary or unreal situation.'],
            ['which', 'Adds extra information about the previous clause.'],
            ['why', 'Gives a reason (often in a relative clause).'],
            ['whenever', 'Means any time or every time.'],
            ['as', 'Shows time or reason.'],
          ].map(([word, description], index) => (
            <div key={index} className="grammar-flex-row">
              <div className="grammar-cell"><strong>{word}</strong></div>
              <div className="grammar-cell">{description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkingWordsExplanation;
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
