'use strict';

/*

  Data In: any text

  Data Out: notify the user if text has consonants or not

  Test Cases:

*/

/* ---   ?   --- */

// letters <- null

// WHILE: letters === null
//   letters <- prompt('enter some letters')
// :END WHILE

/* ---   ?   --- */

// noConsonants <- true

// FOR: letter OF letters
//   lowerCaseLetter <- letter.toLowerCase()
//   IF: 'bcdfghjklmnpqrstvwxyz'.includes(lowerCaseLetter)
//     noConsonants <- false
//     BREAK
//   :END IF
// :END FOR-OF

/* ---   ?   --- */

// message <- ''

// IF: noConsonants
//   message <- '"' + letters + '" has no consonants'
// ELSE:
//   message <- '"' + letters + '" has at least one consonant'
// :END IF

/* ---   ?   --- */

// alert(message)

let letters = null;
while (letters === null) {
  letters = prompt('enter some letters');
}

let noConsonants = true;

for (const letter of letters) {
  const lowerCaseLetter = letter.toLowerCase();
  if ('bcdfghjklmnpqrstvwxyz'.includes(lowerCaseLetter)) {
    noConsonants = false;
    break;
  }
}

let message = '';

if (noConsonants) {
  message = '"' + letters + '" has no consonants';
} else {
  message = '"' + letters + '" has at least one consonant';
}

alert(message);
