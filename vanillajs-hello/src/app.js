import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
	document.querySelector('#butane').addEventListener("click", () => {
  document.querySelector('#excuse').innerHTML = excuseMaker();
	});
  console.log('Hello Ace from the console!');
};

let excuseMaker = () => {

    let pronoun = ['A', 'My', 'The', 'That'];
    let subject = ['aunt', 'car', 'cat', 'mailman', 'president', 'friend'];
    let action = ['destroyed', 'scratched', 'barfed over', 'spilled', 'trampled'];
    let possesion = ['keys', 'clothes', 'sister', 'medicine', 'calculator'];
    let where = ['house', 'office', 'apartment', 'store'];

    let proIndx = Math.floor(Math.random() * pronoun.length);
    let subIndx = Math.floor(Math.random() * subject.length);
    let actIndx = Math.floor(Math.random() * action.length);
    let posIndx = Math.floor(Math.random() * possesion.length);
    let whrIndx = Math.floor(Math.random() * where.length);

    return pronoun[proIndx] + ' ' + subject[subIndx] + ' ' +action[actIndx] + ' ' + possesion[posIndx] + ' ' +where[whrIndx];
};