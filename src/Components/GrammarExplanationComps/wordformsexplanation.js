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
  
  ["optimization", "optimize", "optimized", "optimizing"],
  ["deployment", "deploy", "deployed", "deploying"],
  ["integration", "integrate", "integrated", "integrating"],
  ["implementation", "implement", "implemented", "implementing"],
  ["design", "design", "designed", "designing"],
  ["quality", "qualify", "qualified", "qualifying"],
  ["security", "secure", "secured", "securing"],
  ["hosting", "host", "hosted", "hosting"],
  ["recovery", "recover", "recovered", "recovering"],
  ["updates", "update", "updated", "updating"],
  ["innovation", "innovate", "innovative", "innovating"],
  ["optimization", "optimize", "optimized", "optimizing"],
  ["failure", "fail", "failed", "failing"],
  ["distribution", "distribute", "distributed", "distributing"],
  ["documentation", "document", "documented", "documenting"],
  ["configuration", "configure", "configured", "configuring"],
  ["training", "train", "trained", "training"],
  ["computing", "compute", "computer", "computed"],
  ["performance", "perform", "performed", "performing"]


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

