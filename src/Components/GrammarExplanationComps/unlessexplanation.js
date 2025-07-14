import React from 'react';
import { FaQuestionCircle, FaBookOpen, FaExclamationTriangle } from 'react-icons/fa';

const UnlessExplanation = () => {
  return (
    <div>
      <div className="agendagrammar">
        <h1><FaQuestionCircle /> Unless</h1>
        <p>Study this example situation:</p>

        <h1><FaBookOpen /> unless = except if</h1>
        <p>The club is for members only.<br />
          You can’t go in <strong>unless</strong> you are a member.</p>
        <p>This means:<br />
          You can’t go in except if you are a member.<br />
          You can go in only if you are a member.</p>

        <h1><FaBookOpen /> Some more examples of unless:</h1>
        <ul>
          <li>I’ll see you tomorrow <strong>unless</strong> I have to work late. (= except if I have to work late)</li>
          <li>There are no buses to the beach. <strong>Unless</strong> you have a car, it’s difficult to get there. (= except if you have a car)</li>
          <li><strong>A:</strong> Shall I tell Lisa what happened?<br />
            <strong>B:</strong> Not <strong>unless</strong> she asks you. (= tell her only if she asks you)</li>
          <li>Ben hates to complain. He wouldn’t complain about something <strong>unless</strong> it was really bad. (= except if it was really bad)</li>
          <li>We can take a taxi to the restaurant – <strong>unless</strong> you’d prefer to walk. (= except if you’d prefer to walk)</li>
        </ul>

        <p>Instead of <strong>unless</strong> it is often possible to say <strong>if … not</strong>:</p>
        <p><strong>Unless</strong> we leave now, we’ll be late. <em>or</em> If we don’t leave now, we’ll …</p>

        <h1><FaBookOpen /> as long as / so long as</h1>
        <p>You can say <strong>as long as</strong> or <strong>so long as</strong> (= if, on condition that):</p>
        <ul>
          <li>You can borrow my car <strong>as long as</strong> you promise not to drive too fast.</li>
        </ul>

        <h1><FaBookOpen /> until = up to the point in time when</h1>
        <p><strong>Until</strong> refers to something happening up to a specific point in time and then stopping:</p>
        <ul>
          <li>We stayed at the café <strong>until</strong> it closed. (= We stayed, and when it closed, we left.)</li>
          <li>I won’t go home <strong>until</strong> I finish this report. (= I will stay here, and when I finish the report, I will go home.)</li>
          <li>She didn’t say anything <strong>until</strong> I asked her. (= She was silent, but then she spoke when I asked.)</li>
          <li>Wait here <strong>until</strong> I come back. (= Stay here, and when I return, you can leave.)</li>
        </ul>

        <p><FaExclamationTriangle /> Be careful not to confuse <strong>until</strong> with <strong>as long as</strong>:</p>
        <ul>
          <li>You can stay <strong>as long as</strong> you like. (= for the duration that you like)</li>
          <li>You can stay <strong>until</strong> 10 p.m. (= up to 10 p.m., and then you must leave)</li>
        </ul>

        <h1><FaBookOpen /> unless / as long as / until etc. for the future</h1>
        <p>When we are talking about the future, we do not use <strong>will</strong> after <strong>unless / as long as / so long as / provided / providing / until</strong>. We use a present tense (see Unit 25):</p>
        <ul>
          <li>I’m not going out <strong>unless</strong> it stops raining. (<em>not unless it will stop</em>)</li>
          <li><strong>Providing</strong> the weather is good, we’re going to have a picnic tomorrow. (<em>not providing the weather will be good</em>)</li>
          <li>Wait here <strong>until</strong> she arrives. (<em>not until she will arrive</em>)</li>
        </ul>
      </div>
    </div>
  );
};

export default UnlessExplanation;
