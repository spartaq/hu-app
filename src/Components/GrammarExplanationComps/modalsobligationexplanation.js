import React from 'react';
import '../../CSS/grammarPage.css';
import { FaBookOpen, FaLightbulb } from 'react-icons/fa';

const ModalsobligationExplanation = () => {
  return (
    <div className="grammar-explanation">
      <h2><FaBookOpen /> Modals: Obligation, Permission, and Ability</h2>

      <p>
        Modal verbs like <strong>can, must, should</strong>, and others help us express ability, permission, advice, and different levels of obligation. Their meaning depends on both the verb and the context.
      </p>

      <div className="example-block">
        <h3>Permission, Possibility, and Ability</h3>
        <ul>
          <li><strong>Can</strong> – ability, permission, or possibility<br /><i>I can help. You can go.</i></li>
          <li><strong>Can't</strong> – prohibition or inability<br /><i>You can't enter. I can't fix it.</i></li>
          <li><strong>Could</strong> – past ability, polite request, or suggestion<br /><i>I could swim. Could you help?</i></li>
          <li><strong>May / Might</strong> – formal or less certain possibility<br /><i>It may/might rain later.</i></li>
        </ul>
      </div>

      <div className="example-block">
        <h3>Advice and Obligation</h3>
        <ul>
          <li><strong>Should / Ought to</strong> – advice or mild obligation<br /><i>You should save money. We ought to test it first.</i></li>
          <li><strong>Must / Have to</strong> – strong obligation<br /><i>You must follow the rules. I have to leave now.</i></li>
          <li><strong>Mustn't</strong> – strong prohibition<br /><i>You mustn't touch that switch.</i></li>
          <li><strong>Don't have to</strong> – no obligation<br /><i>You don’t have to stay if you’re tired.</i></li>
        </ul>
      </div>

      <div className="example-block">
        <h3>Formal and Strong Necessity</h3>
        <ul>
          <li><strong>Need to</strong> – necessity<br /><i>You need to update the software.</i></li>
          <li><strong>To be + mandatory</strong> – something required by rule or law<br /><i>Wearing a seatbelt is mandatory.</i></li>
          <li><strong>Obligatory / Required</strong> – formal necessity<br /><i>Reports are required by the end of the week.</i></li>
          <li><strong>Compulsory / Necessary / Essential</strong> – varying levels of importance<br /><i>Attendance is essential during training.</i></li>
        </ul>
      </div>

      <div className="grammar-explanation-text">
        <h3><FaLightbulb /> Tip</h3>
        <p>
          Modals change based on time and certainty. Use them carefully to express the correct level of necessity or possibility in both formal and informal situations.
        </p>
      </div>
    </div>
  );
};

export default ModalsobligationExplanation;
