import React from 'react';
import '../../../CSS/grammarPage.css';
import { FaBookOpen, FaListUl, FaLightbulb, FaLanguage } from 'react-icons/fa';

const NevutoExplanation = () => {
  return (
    <div>
      <div className="grammar-explanation">

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Grammar explanation</h2>
        <p>
          In Hungarian, postpositions (called <strong>névutók</strong>) are words that come <em>after</em> the noun and indicate
          direction, location, or relation — similar to English prepositions like “in,” “on,” “to,” etc. Some postpositions
          attach directly to the noun with case endings.
        </p>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Hungarian Névutók (Postpositions)</h3>
        <p>
          Unlike English prepositions, Hungarian postpositions follow the noun and often require it to be in a specific case
          (usually the dative or instrumental). Some are formed with suffixes directly attached to the noun.
        </p>

        <h3><FaLanguage style={{ marginRight: '0.5rem' }} /> English - Hungarian Postposition with Examples</h3>
        <div className="grammar-flex-table">
          {[
            [
              'English Meaning',
              'Hungarian Postposition',
              'Example',
            ],
            ['in', '-ban / -ben', 'A könyv <strong>a táskában</strong> van. - The book is <strong>in the bag</strong>.'],
            ['onto', '-ra / -re', 'Felmegyek <strong>az emeletre</strong>. - I go <strong>onto the floor</strong>.'],
            ['to (person/place)', '-hoz / -hez / -höz', 'Megyek <strong>az orvoshoz</strong>. - I’m going <strong>to the doctor</strong>.'],
            ['on', 'ra / re (motion), -n / -on / -en / -ön (location)', 'A könyvet <strong>az asztalra</strong> teszem. - I put the book <strong>on the table</strong>.'],
            ['from', '-tól / -től', 'Jövök <strong>a baráttól</strong>. - I’m coming <strong>from my friend</strong>.'],
            ['at', '-nál / -nél', '<strong>A bolt</strong> <strong>a sarkonál</strong> van. - The shop is <strong>at the corner</strong>.'],
          ].map(([english, hungarian, example], index) => (
            <div key={`nevuto-${index}`} className="grammar-flex-row">
              <div className="grammar-cell subject">{english}</div>
              <div className="grammar-cell">{hungarian}</div>
              <div className="grammar-cell" dangerouslySetInnerHTML={{ __html: example }} />
            </div>
          ))}
        </div>

        <h3><FaLightbulb style={{ marginRight: '0.5rem' }} /> Important notes</h3>
        <ul>
          <li>Postpositions often require the noun to take a case ending or personal suffix (e.g., <strong>nálam</strong> = at my place).</li>
          <li>The choice of vowel (e.g., <em>ban</em> vs <em>ben</em>) depends on vowel harmony.</li>
          <li>Some postpositions are independent words (e.g., <em>alatt</em> = under), while others are suffixes.</li>
          <li>Motion vs. location is important: use <em>ra/re</em> for motion <em>onto</em>, and <em>on/en</em> for location <em>on</em>.</li>
        </ul>

        <h3><FaLanguage style={{ marginRight: '0.5rem' }} /> Examples</h3>
        <ul>
          <li>A cipő <strong>a szekrényben</strong> van. - The shoe is <strong>in the cupboard</strong>.</li>
          <li>Lefekszem <strong>az ágyra</strong>. - I lie down <strong>onto the bed</strong>.</li>
          <li>A gyerekek <strong>az udvaron</strong> játszanak. - The children are playing <strong>in the yard</strong>.</li>
          <li>Megyek <strong>a nagymamához</strong>. - I’m going <strong>to grandma’s</strong>.</li>
          <li>Jövünk <strong>az iskolából</strong>. - We are coming <strong>from school</strong>.</li>
        </ul>

      </div>
    </div>
  );
};

export default NevutoExplanation;
