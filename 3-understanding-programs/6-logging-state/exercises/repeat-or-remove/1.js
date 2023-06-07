'use strict';

/*
  log the user's input
  log the user's choice (keep or remove)
  log the final output
*/

let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');

  // log user input
  console.log(phrase);
}

const keepLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character',
);

// log user choice
console.log(keepLetters);

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

// log the final input
console.log(newPhrase);

alert(newPhrase);
