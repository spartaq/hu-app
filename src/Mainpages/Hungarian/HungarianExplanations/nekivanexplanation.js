import React from 'react';
import '../../../CSS/grammarPage.css';
import { FaBookOpen, FaListUl, FaLightbulb, FaLanguage } from 'react-icons/fa';

const NekivanExplanation = () => {
  return (
    <div>
      <div className="grammar-explanation">

        <h2><FaBookOpen style={{ marginRight: '0.5rem' }} /> Grammar explanation</h2>
        <p>
          In Hungarian, the concept of <strong>“to have”</strong> is expressed using a special verb structure:
          <strong> neki van</strong>. This does not follow regular verb patterns and must be learned on its own.
        </p>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Neki van = to have</h3>
        <p>
          Hungarian does not have a direct verb for “to have.” Instead, it uses a structure like
          “To him/her there is...” with the verb <strong>van</strong> and a personal possessive form.
        </p>

        <h3><FaListUl style={{ marginRight: '0.5rem' }} /> Possession with <em>van</em> (to have)</h3>
        <div className="grammar-flex-table">
          {[
            [
              'Affirmative',
              'Negative',
              'Question',
            ],
            [
              '<strong>Nekem van</strong> autóm. (I have a car.)',
              '<strong>Nekem nincs</strong> autóm. (I don’t have a car.)',
              '<strong>Van</strong> autód? (Do you have a car?)',
            ],
            [
              '<strong>Neked van</strong> könyved. (You have a book.)',
              '<strong>Neked nincs</strong> könyved. (You don’t have a book.)',
              '<strong>Van</strong> könyve? (Does he/she have a book?)',
            ],
            [
              '<strong>Neki van</strong> macskája. (He/She has a cat.)',
              '<strong>Neki nincs</strong> macskája. (He/She doesn’t have a cat.)',
              '<strong>Van</strong> macskájuk? (Do they have a cat?)',
            ],
            [
              '<strong>Nekünk van</strong> házunk. (We have a house.)',
              '<strong>Nekünk nincs</strong> házunk. (We don’t have a house.)',
              '<strong>Van</strong> házunk? (Do we have a house?)',
            ],
            [
              '<strong>Nektek van</strong> tollatok. (You all have a pen.)',
              '<strong>Nektek nincs</strong> tollatok. (You all don’t have a pen.)',
              '<strong>Van</strong> tollatok? (Do you all have a pen?)',
            ],
            [
              '<strong>Nekik van</strong> kertjük. (They have a garden.)',
              '<strong>Nekik nincs</strong> kertjük. (They don’t have a garden.)',
              '<strong>Van</strong> kertjük? (Do they have a garden?)',
            ],
          ].map(([affirmative, negative, question], index) => (
            <div key={`van-${index}`} className="grammar-flex-row">
              <div className="grammar-cell" dangerouslySetInnerHTML={{ __html: affirmative }} />
              <div className="grammar-cell" dangerouslySetInnerHTML={{ __html: negative }} />
              <div className="grammar-cell" dangerouslySetInnerHTML={{ __html: question || '<span style="opacity:0.6">—</span>' }} />
            </div>
          ))}
        </div>

        <h3><FaLanguage style={{ marginRight: '0.5rem' }} /> Examples</h3>
        <ul>
          <li><strong>Neked van</strong> testvéred? (Do you have a sibling?)</li>
          <li><strong>Nekik nincs</strong> autójuk. (They don’t have a car.)</li>
        </ul>
        
      </div>
    </div>
  );
};

export default NekivanExplanation;
