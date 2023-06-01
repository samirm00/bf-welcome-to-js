'use strict';

/* Bouncify

  A user can enter some text to bouncify it.
    - given a non-empty string
      every other letter is converted to UPPER CASE
      every other letter is converted to lower case
      all other characters are ignored without changing the pattern

  test cases:
    has only letters:
      'a'           -> 'A'
      'Hello'       -> 'HeLlO'
      'HELLO'       -> 'HeLlO'
      'cheese'      -> 'ChEeSe'
    has spaces and letters:
      'good bye'      -> 'GoOd ByE'
      ' row a boat '  -> ' RoW a BoAt '
    has everything:
      '12 Good Byes!'     -> '12 GoOd ByEs!'
      'h1! Hoe gaat het?' -> 'H1! hOe GaAt HeT?'
      '0 . x . 0'         -> '0 . X . 0'

*/

let message = '';
while (true) {
  // ask the user for input
  let userInput = prompt('please enter something: ');

  // if userInput exists
  if (userInput) {
    message = userInput;
    break;
  } else {
    // Null or empty string
    alert('no escape , you need to enter something.');
  }
}

// specials character
const specials = '0123456789!?$#@&. ';
let newMessage = '';
let isUpperCase = true;

// loop through message
for (const char of message) {
  if (specials.indexOf(char) === -1) {
    if (isUpperCase) {
      newMessage += char.toUpperCase();
    } else {
      newMessage += char.toLowerCase();
    }
    isUpperCase = !isUpperCase;
  } else {
    newMessage += char;
  }
}

alert(newMessage);
