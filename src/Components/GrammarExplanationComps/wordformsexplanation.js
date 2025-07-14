import React from 'react';

const WordformsExplanation = () => {
  return (
    <div>
      <div className="agendagrammar">
        <p>
          In English, many words have different forms depending on their grammatical role — noun, verb, adjective, or adverb.
          Understanding these word forms helps you use words correctly in sentences.
        </p>

        <div className="grammar-flex-table">
          {[
            ['Noun', 'Verb', 'Adjective', 'Adverb'],
  ['determination', 'determine', 'determined', 'determinedly'],
  ['improvement', 'improve', 'improved', 'improvingly'],
  ['agility', 'agilize', 'agile', 'agilely'],
  ['quickness', 'quicken', 'quick', 'quickly'],
  ['experience', 'experiencing', 'experienced', 'experientially'],
  ['decision', 'decide', 'decisive', 'decisively'],
  ['method', 'methodize', 'methodical', 'methodically'],
  ['bravery', 'braver', 'brave', 'bravely'],
  ['encouragement', 'encourage', 'encourages', 'encouragingly'],
  ['boldness', 'bold', 'bold', 'boldly'],
  ['loudness', 'cheer', 'loud', 'loudly'],
  ['accuracy', 'accurate', 'accurate', 'accurately'],
  ['analysis', 'analyze', 'analytical', 'none'],
  ['grace', 'none', 'graceful', 'gracefully'],
  ['excellence', 'excelling', 'excellent', 'excellently'],
  ['controversy', 'none', 'controversial', 'controversially'],
  ['performance', 'perform', 'performed', 'none'],
  ['cheer', 'cheer', 'cheerful', 'none'],
  ['ability', 'none', 'able', 'ably'],
  ['resoluteness', 'resolve', 'resolved', 'resolutely'],
  ['understanding', 'understand', 'understandable', 'none'],
  ['success', 'succeed', 'successful', 'successfully'],
  ['resilience', 'none', 'resilient', 'resiliently'],
  ['deliberation', 'deliberate', 'deliberate', 'deliberately'],
  ['value', 'value', 'invaluable', 'invaluably'],
  ['reaction', 'react', 'reactive', 'none'],
  ['persistence', 'persist', 'persistent', 'none'],
  ['discipline', 'discipline', 'disciplined', 'disciplinary'],
  ['diligence', 'none', 'diligent', 'diligently']
          ].map((row, index) => (
            <div key={index} className={`grammar-flex-row${index === 0 ? ' header' : ''}`}>
              {row.map((cell, i) => (
                <div key={i} className="grammar-cell">{cell}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordformsExplanation;
