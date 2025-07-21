import React from 'react';
import '../../../CSS/grammarPage.css';
import { FaBookOpen, FaListUl, FaLightbulb, FaLanguage } from 'react-icons/fa';

const ComparisonExplanation = () => {
  return (
    <div>
      <div className="grammar-explanation">

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Grammar explanation</h2>
        <p>
          In Hungarian, comparison is formed by modifying the adjective. Just like in English, you can compare two things
          (<em>comparative</em>) or say something is the most (<em>superlative</em>).
        </p>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Comparative and superlative in Hungarian</h3>
        <p>
          The <strong>comparative</strong> is formed by adding <strong>-bb</strong> to the adjective. To make it <strong>superlative</strong>,
          use the prefix <strong>a leg-</strong> + the comparative form.
        </p>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> English - Hungarian comparison with examples</h3>
        <div className="grammar-flex-table">
          {[
            [
              'Adjective',
              'Comparative',
              'Superlative',
              'English',
            ],
            ['magas', 'magasabb', 'a legmagasabb', 'tall, taller, the tallest'],
            ['taller', 'magasabb', 'Ő <strong>magasabb</strong>, mint én. - He is <em>taller</em> than me.'],
            ['the tallest', 'a legmagasabb', 'Ő <strong>a legmagasabb</strong> a csoportban. - He is <strong>the tallest</strong> in the group.'],
            ['cold', 'hideg', 'A víz hideg. - The water is cold.'],
            ['colder', 'hidegebb', 'Ma <strong>hidegebb</strong> van, mint tegnap. - Today is <strong>colder</strong> than yesterday.'],
            ['the coldest', 'a leghidegebb', 'Ez <strong>a leghidegebb</strong> nap. - This is <strong>the coldest</strong> day.'],
          ].map(([english, hungarian, example], index) => (
            <div key={`comparison-${index}`} className="grammar-flex-row">
              <div className="grammar-cell">{english}</div>
              <div className="grammar-cell">{hungarian}</div>
              <div
                className="grammar-cell"
                dangerouslySetInnerHTML={{ __html: example }}
              />
            </div>
          ))}
        </div>

        <h3><FaLightbulb style={{ marginRight: '0.5rem' }} /> Important points</h3>
        <ul>
          <li>The basic rule: <strong>adjective + bb</strong> → comparative.</li>
          <li>Use <strong>mint</strong> (than) to compare two things: <em>nagyobb, mint...</em></li>
          <li>For superlatives, use the article <strong>a</strong> (or <strong>az</strong>) and the prefix <strong>leg-</strong>.</li>
          <li>Some adjectives change slightly before adding <strong>-bb</strong> (e.g., <em>szép → szebb</em>).</li>
        </ul>

        <h3><FaLanguage style={{ marginRight: '0.5rem' }} /> Examples</h3>
        <ul>
          <li>Ez a ház <strong>nagyobb</strong>, mint a másik. - This house is <strong>bigger</strong> than the other.</li>
          <li>Ő <strong>a legokosabb</strong> diák. - He/She is <strong>the smartest</strong> student.</li>
          <li>A leves <strong>melegebb</strong>, mint a tea. - The soup is <strong>warmer</strong> than the tea.</li>
          <li>Ez <strong>a legjobb</strong> film. - This is <strong>the best</strong> movie.</li>
        </ul>

      </div>
    </div>
  );
};

export default ComparisonExplanation;
