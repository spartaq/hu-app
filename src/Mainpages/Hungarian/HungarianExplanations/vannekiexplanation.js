import React from 'react';

const VanNekiExplanation = () => {
  return (
    <div>
      <div className="grammar-display-grid">
        <div className="agendagrammar">
          <div className="grammartext">
          <h2>Grammar explanation</h2>
<p>In Hungarian, the concepts of <strong>“to be”</strong> and <strong>“to have”</strong> are expressed using two special verbs: <strong>van</strong> and <strong>neki van</strong>. These do not follow regular verb patterns and must be learned on their own.</p>

<h3>Van = to be (existence, identity, location)</h3>
<p>The verb <strong>van</strong> is used to say where someone or something is, or to describe someone's identity or state. It changes form depending on the subject.</p>

<table className="grammartable" border="1" cellpadding="5">
  <tr><th>Affirmative</th><th>Negative</th><th>Question</th></tr>
  <tr>
    <td>
      <ul>
        <li>Én <strong>vagyok</strong> tanár. (I am a teacher.)</li>
        <li>Te <strong>vagy</strong> otthon. (You are at home.)</li>
        <li>Ő <strong>van</strong> a boltban. (He/She is in the shop.)</li>
        <li>Mi <strong>vagyunk</strong> itt. (We are here.)</li>
        <li>Ti <strong>vagytok</strong> diákok. (You all are students.)</li>
        <li>Ők <strong>vannak</strong> az iskolában. (They are at school.)</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Én <strong>nem vagyok</strong> fáradt. (I am not tired.)</li>
        <li>Te <strong>nem vagy</strong> itt. (You are not here.)</li>
        <li>Ő <strong>nincs</strong> otthon. (He/She is not at home.)</li>
        <li>Mi <strong>nem vagyunk</strong> ott. (We are not there.)</li>
        <li>Ti <strong>nem vagytok</strong> tanárok. (You all are not teachers.)</li>
        <li>Ők <strong>nincsenek</strong> a házban. (They are not in the house.)</li>
      </ul>
    </td>
    <td>
      <ul>
        <li><strong>Vagyok</strong> tanár? (Am I a teacher?)</li>
        <li><strong>Vagy</strong> otthon? (Are you at home?)</li>
        <li><strong>Van</strong> a boltban? (Is he/she in the shop?)</li>
        <li><strong>Vagytok</strong> itt? (Are you all here?)</li>
        <li><strong>Vannak</strong> az iskolában? (Are they in the school?)</li>
      </ul>
    </td>
  </tr>
</table>

<h3>Neki van = to have</h3>
<p>Hungarian does not have a direct verb for “to have.” Instead, it uses a structure like “To him/her there is...” with the verb <strong>van</strong> and a personal possessive form.</p>

<table className="grammartable" border="1" cellpadding="5">
  <tr><th>Affirmative</th><th>Negative</th><th>Question</th></tr>
  <tr>
    <td>
      <ul>
        <li><strong>Nekem van</strong> autóm. (I have a car.)</li>
        <li><strong>Neked van</strong> könyved. (You have a book.)</li>
        <li><strong>Neki van</strong> macskája. (He/She has a cat.)</li>
        <li><strong>Nekünk van</strong> házunk. (We have a house.)</li>
        <li><strong>Nektek van</strong> tollatok. (You all have a pen.)</li>
        <li><strong>Nekik van</strong> kertjük. (They have a garden.)</li>
      </ul>
    </td>
    <td>
      <ul>
        <li><strong>Nekem nincs</strong> autóm. (I don’t have a car.)</li>
        <li><strong>Neked nincs</strong> könyved. (You don’t have a book.)</li>
        <li><strong>Neki nincs</strong> macskája. (He/She doesn’t have a cat.)</li>
        <li><strong>Nekünk nincs</strong> házunk. (We don’t have a house.)</li>
        <li><strong>Nektek nincs</strong> tollatok. (You all don’t have a pen.)</li>
        <li><strong>Nekik nincs</strong> kertjük. (They don’t have a garden.)</li>
      </ul>
    </td>
    <td>
      <ul>
        <li><strong>Van</strong> autód? (Do you have a car?)</li>
        <li><strong>Van</strong> könyve? (Does he/she have a book?)</li>
        <li><strong>Van</strong> házunk? (Do we have a house?)</li>
        <li><strong>Van</strong> macskájuk? (Do they have a cat?)</li>
      </ul>
    </td>
  </tr>
</table>

<h3>Important points</h3>
<ul>
  <li><strong>Van</strong> is irregular and essential for basic communication.</li>
  <li>For possession, Hungarian uses the <strong>nekem van</strong> structure — literally “to me, there is.”</li>
  <li>The word <strong>nincs</strong> means “there is not” and replaces both <strong>van</strong> and <strong>nem</strong>.</li>
  <li>In the third person, both singular and plural, van and vannak disappear in simple descriptive sentences:
    <ul>
      <li>Ő tanár. (He/She is a teacher.) — no <strong>van</strong></li>
      <li>Ők diákok. (They are students.) — no <strong>vannak</strong></li>
    </ul>
  </li>
</ul>

<h3>Examples</h3>
<ul>
  <li>Ő Budapesten <strong>van</strong>. (He/She is in Budapest.)</li>
  <li><strong>Neked van</strong> testvéred? (Do you have a sibling?)</li>
  <li>Mi <strong>nem vagyunk</strong> fáradtak. (We are not tired.)</li>
  <li><strong>Nekik nincs</strong> autójuk. (They don’t have a car.)</li>
  <li>Ti <strong>vagytok</strong> az új diákok? (Are you the new students?)</li>
</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VanNekiExplanation;
