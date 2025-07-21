import React from 'react';
import { FaRegLightbulb, FaBookOpen, FaExclamationCircle } from 'react-icons/fa';

const WishExplanation = () => {
  return (
    <div>
      <div className="agendagrammar">
        <h3><FaRegLightbulb /> Wish, If Only, and Hope</h3>
        <p>We use <strong>wish</strong>, <strong>if only</strong>, and <strong>hope</strong> to express desires, regrets, or hypothetical situations.</p>

        <ul>
          <li><strong>Wish/If only</strong> – Used for unreal or hypothetical situations. <strong>If only</strong> is more dramatic.</li>
          <li><strong>Hope</strong> – Used for realistic or possible situations in the future.</li>
        </ul>

        <hr />

        <h4><FaBookOpen /> 1. Wishes about the Present or Future</h4>
        <p><strong>Form:</strong> wish/if only + past simple (or past continuous)</p>
        <ul>
          <li>I wish I <strong>had</strong> more time. (I don’t.)</li>
          <li>If only she <strong>were</strong> here. (She isn’t.)</li>
        </ul>

        <h4><FaBookOpen /> 2. Wishes about the Past</h4>
        <p><strong>Form:</strong> wish/if only + had + past participle</p>
        <ul>
          <li>I wish I <strong>had studied</strong> more. (I didn’t.)</li>
          <li>If only we <strong>had left</strong> earlier. (We didn’t.)</li>
        </ul>

        <h4><FaBookOpen /> 3. Wishes about Willingness or Behavior</h4>
        <p><strong>Form:</strong> wish + would + base verb (not for oneself)</p>
        <ul>
          <li>I wish you <strong>would listen</strong>. (You don’t.)</li>
          <li>If only it <strong>would stop</strong> raining.</li>
        </ul>

        <h4><FaBookOpen /> 4. Wishes about Ability or Impossibility</h4>
        <p><strong>Form:</strong> wish/if only + could + base verb</p>
        <ul>
          <li>I wish I <strong>could drive</strong>. (I can’t.)</li>
          <li>If only we <strong>could fly</strong>.</li>
        </ul>

        <h4><FaBookOpen /> 5. Hopes for the Future</h4>
        <p><strong>Form:</strong> hope + present simple/will</p>
        <ul>
          <li>I hope she <strong>gets</strong> the job. (Possible.)</li>
          <li>We hope it <strong>will be</strong> sunny tomorrow.</li>
        </ul>

        <hr />

        <h4><FaExclamationCircle /> NOTES:</h4>
        <ul>
          <li><strong>If only</strong> is more emotional than <strong>wish</strong>.</li>
          <li>We don’t use <strong>would</strong> with the same subject (e.g., <em>I wish I would</em> is incorrect).</li>
        </ul>
      </div>
    </div>
  );
};

export default WishExplanation;
