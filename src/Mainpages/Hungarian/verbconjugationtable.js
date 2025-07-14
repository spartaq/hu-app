import React from 'react';

const HuVerbConjugation = () => {
  return (
    <div className="grammar-explanation">
      <h2>Verb Conjugation Tables</h2>

      <h2>Regular Verbs (e.g., <em>tanul</em> - to learn)</h2>
      <p><strong>Example verbs:</strong> tanul, ír, olvas, hallgat, vár, takarít, mos, főz, beszél, néz, tanít</p>

      <div className="grammar-flex-table" style={{ border: '1px solid #ccc' }}>
        <div className="grammar-flex-row header">
          <div className="grammar-cell subject"><strong>Person</strong></div>
          <div className="grammar-cell"><strong>Indefinite</strong></div>
          <div className="grammar-cell"><strong>Definite</strong></div>
        </div>
        {[
          ['Én', 'tanulok', 'tanulom'],
          ['Te', 'tanulsz', 'tanulod'],
          ['Ő', 'tanul', 'tanulja'],
          ['Mi', 'tanulunk', 'tanuljuk'],
          ['Ti', 'tanultok', 'tanuljátok'],
          ['Ők', 'tanulnak', 'tanulják'],
        ].map(([person, indefinite, definite], i) => (
          <div key={i} className="grammar-flex-row">
            <div className="grammar-cell subject">{person}</div>
            <div className="grammar-cell">{indefinite}</div>
            <div className="grammar-cell">{definite}</div>
          </div>
        ))}
      </div>

      <h2>-ik Verbs (e.g., <em>alszik</em> - to sleep)</h2>
      <p><strong>Example verbs:</strong> játszik, alszik, érkezik, lakik, dolgozik, mutatkozik, viselkedik, hazudik, költözik, emlékezik</p>

      <div className="grammar-flex-table" style={{ border: '1px solid #ccc' }}>
        <div className="grammar-flex-row header">
          <div className="grammar-cell subject"><strong>Person</strong></div>
          <div className="grammar-cell"><strong>Indefinite</strong></div>
        </div>
        {[
          ['Én', 'alszom'],
          ['Te', 'alszol'],
          ['Ő', 'alszik'],
          ['Mi', 'alszunk'],
          ['Ti', 'alszotok'],
          ['Ők', 'alszanak'],
        ].map(([person, indefinite], i) => (
          <div key={i} className="grammar-flex-row">
            <div className="grammar-cell subject">{person}</div>
            <div className="grammar-cell">{indefinite}</div>
          </div>
        ))}
      </div>

      <h2>Irregular Verb: <em>tesz</em></h2>
      <p><strong>Other verbs in this group:</strong> lesz, vesz, visz, hisz, eszik, iszik</p>

      <div className="grammar-flex-table" style={{ border: '1px solid #ccc' }}>
        <div className="grammar-flex-row header">
          <div className="grammar-cell subject"><strong>Person</strong></div>
          <div className="grammar-cell"><strong>Indefinite</strong></div>
          <div className="grammar-cell"><strong>Definite</strong></div>
        </div>
        {[
          ['Én', 'teszek', 'teszem'],
          ['Te', 'teszel', 'teszed'],
          ['Ő', 'tesz', 'teszi'],
          ['Mi', 'teszünk', 'tesszük'],
          ['Ti', 'tesztek', 'teszitek'],
          ['Ők', 'tesznek', 'teszik'],
        ].map(([person, indefinite, definite], i) => (
          <div key={i} className="grammar-flex-row">
            <div className="grammar-cell subject">{person}</div>
            <div className="grammar-cell">{indefinite}</div>
            <div className="grammar-cell">{definite}</div>
          </div>
        ))}
      </div>

      <h2>Irregular Verb: <em>megy</em> (to go)</h2>
      <p><strong>Related verb:</strong> megy</p>

      <div className="grammar-flex-table" style={{ border: '1px solid #ccc' }}>
        <div className="grammar-flex-row header">
          <div className="grammar-cell subject"><strong>Person</strong></div>
          <div className="grammar-cell"><strong>Indefinite</strong></div>
        </div>
        {[
          ['Én', 'megyek'],
          ['Te', 'mész'],
          ['Ő', 'megy'],
          ['Mi', 'megyünk'],
          ['Ti', 'mentek'],
          ['Ők', 'mennek'],
        ].map(([person, indefinite], i) => (
          <div key={i} className="grammar-flex-row">
            <div className="grammar-cell subject">{person}</div>
            <div className="grammar-cell">{indefinite}</div>
          </div>
        ))}
      </div>

      <h2>Irregular Verb: <em>jön</em> (to come)</h2>
      <p><strong>Related verb:</strong> jön</p>

      <div className="grammar-flex-table" style={{ border: '1px solid #ccc' }}>
        <div className="grammar-flex-row header">
          <div className="grammar-cell subject"><strong>Person</strong></div>
          <div className="grammar-cell"><strong>Indefinite</strong></div>
        </div>
        {[
          ['Én', 'jövök'],
          ['Te', 'jössz'],
          ['Ő', 'jön'],
          ['Mi', 'jövünk'],
          ['Ti', 'jöttök'],
          ['Ők', 'jönnek'],
        ].map(([person, indefinite], i) => (
          <div key={i} className="grammar-flex-row">
            <div className="grammar-cell subject">{person}</div>
            <div className="grammar-cell">{indefinite}</div>
          </div>
        ))}
      </div>

      <h2>Special Verb: <em>van</em> (to be)</h2>
      <p><strong>Used for:</strong> existence, state, location</p>

      <div className="grammar-flex-table" style={{ border: '1px solid #ccc' }}>
        <div className="grammar-flex-row header">
          <div className="grammar-cell subject"><strong>Person</strong></div>
          <div className="grammar-cell"><strong>Form</strong></div>
        </div>
        {[
          ['Én', 'vagyok'],
          ['Te', 'vagy'],
          ['Ő', 'van'],
          ['Mi', 'vagyunk'],
          ['Ti', 'vagytok'],
          ['Ők', 'vannak'],
        ].map(([person, form], i) => (
          <div key={i} className="grammar-flex-row">
            <div className="grammar-cell subject">{person}</div>
            <div className="grammar-cell">{form}</div>
          </div>
        ))}
      </div>

      <h2>Structure: <em>neki van</em> (he/she has)</h2>
      <p><strong>Used for:</strong> Possession — <em>nekem van...</em> (I have...)</p>

      <div className="grammar-flex-table" style={{ border: '1px solid #ccc' }}>
        <div className="grammar-flex-row header">
          <div className="grammar-cell subject"><strong>Person</strong></div>
          <div className="grammar-cell"><strong>Dative Form</strong></div>
          <div className="grammar-cell"><strong>van form</strong></div>
          <div className="grammar-cell"><strong>English</strong></div>
        </div>
        {[
          ['Én', 'nekem', 'van', 'I have'],
          ['Te', 'neked', 'van', 'You have'],
          ['Ő', 'neki', 'van', 'He/She has'],
          ['Mi', 'nekünk', 'van', 'We have'],
          ['Ti', 'nektek', 'van', 'You (pl.) have'],
          ['Ők', 'nekik', 'van', 'They have'],
        ].map(([person, dative, vanForm, english], i) => (
          <div key={i} className="grammar-flex-row">
            <div className="grammar-cell subject">{person}</div>
            <div className="grammar-cell">{dative}</div>
            <div className="grammar-cell">{vanForm}</div>
            <div className="grammar-cell">{english}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HuVerbConjugation;
