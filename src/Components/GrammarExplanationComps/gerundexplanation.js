import React from 'react';


const GerundExplanation = () => {

    return (
        <div>

<div>
                            <div className="agendagrammar">
                            
<p><strong>like doing - love, hate, avoid etc.</strong> are verbs that take a noun or gerund after them.</p>
<hr></hr>
<p><strong>Like doing</strong></p>
<table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center", border: "1px solid black" }}>
  <tbody>
    {[
      ["avoid", "be used to"],
      ["can't help", "can't stand"],
      ["consider", "discuss"],
      ["don’t like", "end up"],
      ["enjoy", "feel like"],
      ["finish", "get used to"],
      ["give up", "go on"],
      ["have difficulty", "have problems"],
      ["have trouble", "imagine"],
      ["it's no use", "it's worthwhile"],
      ["keep", "look forward to"],
      ["mention", "mind"],
      ["miss", "recommend"],
      ["quit", "spend time"],
      ["stop", "suggest"],
      ["waste time", ""]
    ].map((row, index) => (
      <tr key={index}>
        {row.map((word, idx) => (
          <td key={idx} style={{ border: "1px solid black", padding: "10px" }}>
            <p>{word}</p>
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>




                                     </div>
                                    
                                </div>

        
        
        
        </div>
);
};

export default GerundExplanation;