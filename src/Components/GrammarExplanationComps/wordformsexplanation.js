import React from 'react';

<<<<<<< HEAD

const WordformsExplanation = () => {

    return (
        <div>

<div>
                            <div className="agendagrammar">
                        <p>Word forms action active actively to act</p>
                        <table className="grammartable" border="1">
  <tr>
    <th>Noun</th>
    <th>Verb</th>
    <th>Adjective</th>
    <th>Adverb</th>
  </tr>
  <tr>
    <td>safety</td>
    <td>none</td>
    <td>safe</td>
    <td>safely</td>
  </tr>
  <tr>
    <td>decision</td>
    <td>decide</td>
    <td>decisive</td>
    <td>decisively</td>
  </tr>
  <tr>
    <td>efficiency</td>
    <td>to be efficient</td>
    <td>efficient</td>
    <td>efficiently</td>
  </tr>
  <tr>
    <td>success</td>
    <td>succeed</td>
    <td>successful</td>
    <td>successfully</td>
  </tr>
  <tr>
    <td>clarity</td>
    <td>clarify</td>
    <td>clear</td>
    <td>clearly</td>
  </tr>
  <tr>
    <td>exception</td>
    <td>none</td>
    <td>exceptional</td>
    <td>exceptionally</td>
  </tr>
  <tr>
    <td>value</td>
    <td>value</td>
    <td>valuable</td>
    <td>valuably</td>
  </tr>
  <tr>
    <td>effect</td>
    <td>affect</td>
    <td>effective</td>
    <td>effectively</td>
  </tr>
  <tr>
    <td>analysis</td>
    <td>analyze</td>
    <td>analytical</td>
    <td>analytically</td>
  </tr>
  <tr>
    <td>difference</td>
    <td>differ</td>
    <td>different</td>
    <td>differently</td>
  </tr>
  <tr>
    <td>action</td>
    <td>act</td>
    <td>active</td>
    <td>actively</td>
  </tr>
  <tr>
    <td>change</td>
    <td>change</td>
    <td>changing</td>
    <td>none</td>
  </tr>
  <tr>
    <td>explanation</td>
    <td>explain</td>
    <td>explanatory</td>
    <td>none</td>
  </tr>
  <tr>
    <td>argument</td>
    <td>argue</td>
    <td>argumentative</td>
    <td>none</td>
  </tr>
</table>




                                     </div>
                                    
                                </div>

        
        
        
        </div>
);
};

export default WordformsExplanation;
=======
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
>>>>>>> 526c2da47c5a6909af179aa867eaaa4630814b1c
