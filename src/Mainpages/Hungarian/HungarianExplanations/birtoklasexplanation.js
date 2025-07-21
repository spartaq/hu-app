import React from 'react';
import '../../../CSS/grammarPage.css';
import { FaBookOpen, FaListUl, FaLightbulb } from 'react-icons/fa';

const BirtoklasExplanation = () => {
  return (
    <div className="grammar-explanation">

      <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Grammar explanation</h2>
      <p>
        In Hungarian, we don’t use a separate word for “my,” “your,” or “his/her.” Instead, we change the ending of the noun to show possession.
      </p>

      <h3><FaListUl style={{ marginRight: '0.5rem' }} /> 1. Singular Possessive (1 thing)</h3>
      <p>We add special endings to the noun to say who it belongs to.</p>

      <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Possessive Endings (example: <em>könyv</em> = book)</h3>
      <div className="grammar-flex-table">
        {[
          ['(Én) my', '-em / -om', '<strong>Könyvem</strong> van. (I have a book.)'],
          ['(Te) your', '-ed / -od', '<strong>Könyved</strong> van. (You have a book.)'],
          ['(Ő) his/her', '-e / -a', '<strong>Könyve</strong> van. (He/She has a book.)'],
          ['(Mi) our', '-ünk / -nk', '<strong>Könyvünk</strong> van. (We have a book.)'],
          ['(Ti) your (plural)', '-etek / -tok', '<strong>Könyvetek</strong> van. (You all have a book.)'],
          ['(Ők) their', '-ük / -uk', '<strong>Könyvük</strong> van. (They have a book.)'],
        ].map(([person, ending, example], index) => (
          <div key={`singular-${index}`} className="grammar-flex-row">
            <div className="grammar-cell subject">{person}</div>
            <div className="grammar-cell">{ending}</div>
            <div className="grammar-cell" dangerouslySetInnerHTML={{ __html: example }} />
          </div>
        ))}
      </div>

      <p>
        <strong>Which ending?</strong> Use <code>-a/-e</code> if the last vowel is front (e, é, i, í, ö, ő, ü, ű), and <code>-om/-em</code> if it's back (a, á, o, ó, u, ú). You’ll learn the pattern with time!
      </p>

      <h3><FaListUl style={{ marginRight: '0.5rem' }} /> 2. Plural Possessive (more than one thing)</h3>
      <p>For more than one item, we add <code>-k</code> plus the same endings:</p>

      <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Possession with Plural Objects (e.g., <em>könyvek</em> = books)</h3>
      <div className="grammar-flex-table">
        {[
            [
              'Affirmative',
              'Negative',
              'Question',
            ],
          ['(Én) my', '<strong>Könyveim</strong> vannak. (I have books.)'],
          ['(Te) your', '<strong>Könyveid</strong> vannak. (You have books.)'],
          ['(Ő) his/her', '<strong>Könyvei</strong> vannak. (He/She has books.)'],
          ['(Mi) our', '<strong>Könyveink</strong> vannak. (We have books.)'],
          ['(Ti) your (plural)', '<strong>Könyveitek</strong> vannak. (You all have books.)'],
          ['(Ők) their', '<strong>Könyveik</strong> vannak. (They have books.)'],
        ].map(([person, example], index) => (
          <div key={`plural-${index}`} className="grammar-flex-row">
            <div className="grammar-cell subject">{person}</div>
            <div className="grammar-cell" dangerouslySetInnerHTML={{ __html: example }} />
          </div>
        ))}
      </div>

      <h3><FaListUl style={{ marginRight: '0.5rem' }} /> 3. “Of” structure</h3>
      <p>
        To say “the girl’s book,” Hungarian puts the possessor in front and adds <code>-nak/-nek</code> and uses the possessive ending:
      </p>
      <ul>
        <li><strong>A lánynak könyve van.</strong> (The girl has a book.)</li>
        <li><strong>A tanárnak autója van.</strong> (The teacher has a car.)</li>
      </ul>

      <h3><FaLightbulb style={{ marginRight: '0.5rem' }} /> Negative and questions</h3>
      <ul>
        <li><strong>Negatives:</strong> Add <code>nincs</code>.<br />
          - Nekem <strong>nincs könyvem</strong>. (I don’t have a book.)
        </li>
        <li><strong>Questions:</strong> Just add a question mark or raise your voice.<br />
          - <strong>Van könyved?</strong> (Do you have a book?)
        </li>
      </ul>

      <h3><FaLightbulb style={{ marginRight: '0.5rem' }} /> Quick tips</h3>
      <ul>
        <li>Possession = noun + ending</li>
        <li><strong>könyvem</strong> = my book</li>
        <li><strong>autód</strong> = your car</li>
        <li><strong>háza</strong> = his/her house</li>
      </ul>

      <h3><FaListUl style={{ marginRight: '0.5rem' }} /> More examples</h3>
      <ul>
        <li><strong>Ez a tollam.</strong> (This is my pen.)</li>
        <li><strong>Hol van a telefonod?</strong> (Where is your phone?)</li>
        <li><strong>A fiúnak kutyája van.</strong> (The boy has a dog.)</li>
        <li><strong>Nincs szobánk.</strong> (We don’t have a room.)</li>
      </ul>

    </div>
  );
};

export default BirtoklasExplanation;
