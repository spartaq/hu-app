import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';

const ReportedspeechExplanation = () => {
  return (
    <div className="grammar-explanation">

      <h2><FaBookOpen /> Reported Speech (Statements)</h2>

      <p>
        Reported speech (also called indirect speech) is used to tell someone what another person said without quoting their exact words. This is useful for summarizing or reporting conversations. When converting direct speech into reported speech, verb tenses usually shift back in time—a process called <em>backshifting</em>. The exact changes depend on the original tense and the context of the sentence.
      </p>

      <h3><FaLightbulb /> Key Changes in Verb Tenses</h3>
      <p>
        When the reporting verb is in the past tense, most verb forms in the original statement shift one step back in time:
      </p>
      <ul>
        <li><strong>Present simple → Past simple</strong>: "I work here." → He said he <em>worked</em> there.</li>
        <li><strong>Present continuous → Past continuous</strong>: "She is reading." → He said she <em>was reading</em>.</li>
        <li><strong>Present perfect → Past perfect</strong>: "I have finished." → He said he <em>had finished</em>.</li>
        <li><strong>Past simple → Past perfect</strong>: "They left early." → He said they <em>had left</em> early.</li>
        <li><strong>Will → Would</strong>: "She will help." → He said she <em>would</em> help.</li>
        <li><strong>Can → Could</strong>: "I can swim." → He said he <em>could</em> swim.</li>
        <li><strong>Must / Have to → Had to</strong>: "You must leave." → He said I <em>had to</em> leave.</li>
      </ul>

      <h3><FaLightbulb /> Changes in Time and Place Words</h3>
      <p>
        In addition to verb tense changes, some time and place expressions also change to match the shift in perspective:
      </p>
      <ul>
        <li><strong>Now → Then</strong>: "I'm busy now." → He said he was busy <em>then</em>.</li>
        <li><strong>Today → That day</strong>: "I saw her today." → He said he had seen her <em>that day</em>.</li>
        <li><strong>Yesterday → The day before</strong>: "She called yesterday." → He said she had called <em>the day before</em>.</li>
        <li><strong>Tomorrow → The next day</strong>: "I'll go tomorrow." → He said he would go <em>the next day</em>.</li>
        <li><strong>Here → There</strong>: "I'm here." → He said he was <em>there</em>.</li>
      </ul>

      <h3><FaLightbulb /> When No Change is Needed</h3>
      <p>
        If the reporting verb is in the present tense, or if the original statement expresses a general truth or a fact that is still true, the verb tense usually stays the same:
      </p>
      <ul>
        <li>"Water boils at 100°C." → He says that water <em>boils</em> at 100°C.</li>
        <li>"I love coffee." → She says she <em>loves</em> coffee.</li>
      </ul>

    </div>
  );
};

export default ReportedspeechExplanation;
