'use strict';

/* Repeat or remove special characters
ask the user to enter a phrase, if the user cancel prompt again.
ask the user if he want to keep only letters "ok", or want to duplicate each character
- if the user click "ok" it will keep only letters
- else if he click cancel it will duplicate each character
*/
let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');
}

const keepLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character',
);

let newPhrase = '';
if (keepLetters) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  for (const character of phrase) {
    if (letters.includes(character.toLowerCase())) {
      newPhrase = newPhrase + character;
    }
  }
} else {
  for (const character of phrase) {
    newPhrase = newPhrase + character + character;
  }
}

alert(newPhrase);
