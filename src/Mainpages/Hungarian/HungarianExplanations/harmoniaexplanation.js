import React from 'react';
import '../../../CSS/grammarPage.css';
import { FaLightbulb, FaListUl, FaLanguage, FaBookOpen } from 'react-icons/fa';

const HarmoniaExplanation = () => {
  return (
    <div>
      <div className="grammar-explanation">

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Grammar explanation</h2>
        <p>
          <strong>Vowel harmony</strong> is a key feature of Hungarian. It means that suffixes (like endings or postpositions)
          change depending on the vowels in the word. Hungarian vowels are divided into three types: front, back, and mixed.
        </p>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Vowel types</h3>
        <div className="grammar-flex-table">
          {[
            ['Vowel Type', 'Vowels', 'Example Word'],
            ['Back vowels', 'a, á, o, ó, u, ú', 'autó, kutya, ház'],
            ['Front vowels', 'e, é, i, í, ö, ő, ü, ű', 'ebéd, könyv, tükör'],
            ['Mixed', 'Both front and back vowels', 'telefon, kabát'],
          ].map(([type, vowels, example], index) => (
            <div key={`vowel-${index}`} className="grammar-flex-row">
              <div className="grammar-cell">{type}</div>
              <div className="grammar-cell">{vowels}</div>
              <div className="grammar-cell">{example}</div>
            </div>
          ))}
        </div>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Suffix harmony examples</h3>
        <p>Most Hungarian suffixes have a back and front version. You choose the one that matches the word’s vowel type.</p>
        <div className="grammar-flex-table">
          {[
            ['Word', 'Suffix Meaning', 'Correct Form', 'Why?'],
            ['ház', 'in (ban/ben)', 'házban', 'Back vowel → use -ban'],
            ['könyv', 'in (ban/ben)', 'könyvben', 'Front vowel → use -ben'],
            ['autó', 'with (val/vel)', 'autóval', 'Back vowel → use -val'],
            ['tükör', 'with (val/vel)', 'tükörrel', 'Front vowel → use -vel'],
            ['telefon', 'in', 'telefonban', 'Mixed → back vowel dominates → -ban'],
          ].map(([word, meaning, form, reason], index) => (
            <div key={`suffix-${index}`} className="grammar-flex-row">
              <div className="grammar-cell">{word}</div>
              <div className="grammar-cell">{meaning}</div>
              <div className="grammar-cell">{form}</div>
              <div className="grammar-cell">{reason}</div>
            </div>
          ))}
        </div>

        <h3><FaLightbulb style={{ marginRight: '0.5rem' }} /> Important points</h3>
        <ul>
          <li>Suffixes must match the vowel type of the word they follow.</li>
          <li>If a word has both front and back vowels (mixed), the <strong>last vowel usually decides</strong>.</li>
          <li>Some foreign words or exceptions break this rule — these must be learned separately.</li>
        </ul>

        <h3><FaLanguage style={{ marginRight: '0.5rem' }} /> Examples</h3>
        <ul>
          <li>A házban lakom. - I live in the house.</li>
          <li>A boltban vásárolok. - I shop in the store.</li>
          <li>A könyvben sok kép van. - There are many pictures in the book.</li>
          <li>A tükörrel nézem magam. - I look at myself with the mirror.</li>
        </ul>

      </div>
    </div>
  );
};

export default HarmoniaExplanation;
