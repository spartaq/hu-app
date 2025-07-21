import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';

const CauseeffectExplanation = () => {
  return (
    <div className="grammar-explanation">
      <h2><FaBookOpen /> Cause and Effect Grammar</h2>
      <p>This explanation covers the common words and phrases used to express cause and effect relationships in English.</p>

      <div className="grammar-explanation-text">
        <h3><FaLightbulb /> Cause</h3>
        <ul>
          <li>
            <strong>because</strong> – <em>because + subject + verb</em><br />
            <span>Because I was late, I missed the bus.</span>
          </li>
          <li>
            <strong>because of</strong> – <em>because of + noun</em><br />
            <span>The flight was delayed because of bad weather.</span>
          </li>
          <li>
            <strong>due to</strong> – <em>due to + noun</em><br />
            <span>The delay was due to traffic.</span>
          </li>
          <li>
            <strong>since</strong> – <em>since + subject + verb</em><br />
            <span>Since it rained, we stayed inside.</span>
          </li>
          <li>
            <strong>as</strong> – <em>as + subject + verb</em><br />
            <span>As I was tired, I went to bed early.</span>
          </li>
          <li>
            <strong>in light of</strong> – <em>in light of + noun / the fact that + subject + verb</em><br />
            <span>In light of the fact that Miklos is stuck in traffic, we decided to postpone the meeting.</span>
          </li>
          <li>
            <strong>thanks to</strong> – <em>thanks to + noun</em><br />
            <span>Thanks to her hard work, the project was a success.</span>
          </li>
        </ul>

        <h3><FaLightbulb /> Effect</h3>
        <ul>
          <li>
            <strong>therefore</strong> – (means "so", usually written, needs semicolon)<br />
            <em>subject + verb; therefore, subject + verb</em><br />
            <span>She didn't study; therefore, she failed the test.</span>
          </li>
          <li>
            <strong>therefore</strong> – (means "so", more common in spoken)<br />
            <em>subject + verb, therefore + verbing</em><br />
            <span>She didn't study, therefore failing the test.</span>
          </li>
          <li>
            <strong>hence</strong> – (means "which is the cause of")<br />
            <em>subject + verb, hence + noun</em><br />
            <span>Our server was down, hence the delay in responding.</span>
          </li>
          <li>
            <strong>so</strong> – <em>subject + verb + so + subject + verb</em><br />
            <span>It rained, so we stayed inside.</span>
          </li>
          <li>
            <strong>as a result of</strong> – <em>as a result of + noun / verbing</em><br />
            <span>My plane was late as a result of a snowstorm.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CauseeffectExplanation;
