import React from 'react';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';
import '../../CSS/grammarPage.css';

const ComparisonExplanation = () => {
  return (
    <div className="grammar-explanation">
      <h2><FaBookOpen style={{ marginRight: '8px' }} />Comparisons</h2>
      <p>
        Comparisons help us describe similarities, differences, or degrees of qualities between two or more things.
      </p>

      <h3><FaLightbulb style={{ marginRight: '8px' }} />Basic Forms</h3>
      <ul>
        <li>
          <strong>Comparative and Superlative:</strong>  
          <br />
          big → bigger than → the biggest  
          <br />
          important → more important than → the most important  
          <br />
          <em>Example:</em> This book is <strong>bigger than</strong> that one.
        </li>

        <li>
          <strong>Equality Comparisons:</strong>  
          <br />
          as [adjective] as / not as [adjective] as  
          <br />
          <em>Example:</em> This car is <strong>as fast as</strong> that one.
        </li>

        <li>
          <strong>Other Comparison Structures:</strong>  
          <br />
          different from / different than  
          <br />
          similar to  
          <br />
          the same as  
          <br />
          <em>Example:</em> Her opinion is <strong>different from</strong> mine.
        </li>
      </ul>

      <h3><FaLightbulb style={{ marginRight: '8px' }} />Showing Big Differences</h3>
      <ul>
        <li>
          much / so much / a lot / even / way / far + comparative  
          <br />
          <em>Example:</em> This phone is <strong>way faster than</strong> the old one.
        </li>
        <li>
          nowhere near as + adjective + as  
          <br />
          not nearly as + adjective + as  
          <br />
          <em>Example:</em> This laptop is <strong>nowhere near as powerful as</strong> the desktop.
        </li>
        <li>
          by far the + superlative  
          <br />
          <em>Example:</em> That was <strong>by far the best</strong> meal we’ve had.
        </li>
      </ul>

      <h3><FaLightbulb style={{ marginRight: '8px' }} />Showing Small Differences</h3>
      <ul>
        <li>
          slightly / a little / a bit / not much + comparative  
          <br />
          <em>Example:</em> This shirt is <strong>a little tighter than</strong> the other one.
        </li>
        <li>
          almost / nearly / not quite / roughly / more or less / about the same + noun + as  
          <br />
          <em>Example:</em> Their prices are <strong>roughly the same</strong> as ours.
        </li>
        <li>
          very / really similar to  
          <br />
          <em>Example:</em> This version is <strong>really similar to</strong> the previous one.
        </li>
      </ul>

      <h3><FaLightbulb style={{ marginRight: '8px' }} />Showing No Difference</h3>
      <ul>
        <li>
          exactly the same + noun + as  
          <br />
          just as + adjective + as  
          <br />
          <em>Example:</em> Their house is <strong>exactly the same size as</strong> ours.
        </li>
      </ul>
    </div>
  );
};

export default ComparisonExplanation;
