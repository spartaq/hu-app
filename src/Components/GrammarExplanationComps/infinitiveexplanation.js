import React from 'react';


const InfinitiveExplanation = () => {

    return (
        <div>

<div>
                            <div className="agendagrammar">
                            
<p><strong>Verb to do - want, promise, etc. </strong></p>
<hr></hr>
<p><strong>Want to do</strong></p>
<table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center", border: "1px solid black" }}>
  <tbody>
    {[
  ["agree", "decide"],
  ["choose", "expect"],
  ["hope", "intend"],
  ["manage", "offer"],
  ["fail", "help"],
  ["plan", "promise"],
  ["refuse", "seem"],
  ["threaten", "arrange"],
  ["attempt", "learn"],
  ["like", "love"],
  ["hate", "prefer"],
  ["forget", "remember"],
  ["want", "would like/love"],
  ["mean", "tend"],
  ["try", ""]
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

export default InfinitiveExplanation;