'use strict';

/*

  Data In: any text

  Data Out: a message tell the user if input text has vowel(s) or not

  Test Cases:
  'test' -> '"test" has at least one vowel'
  'wrfgggg' -> '"wrfgggg" does not have any vowels'
*/

/* ---   ?   --- */

// text <- null

// WHILE: text === null
//   text <- prompt('enter some text')
// :END WHILE

/* ---   ?   --- */

// hasAVowel <- false

// FOR: letter OF text
//   IF: 'aeiouAEIOU'.includes(letter)
//     hasAVowel <- true
//     BREAK
//   :END IF
// :END FOR-OF

/* ---   ?   --- */

// message <- ''

// IF: hasAVowel
//   message <- '"' + text + '" has at least one vowel'
// ELSE:
//   message <- '"' + text + '" does not have any vowels'
// :END IF

/* ---   ?   --- */

// alert(message)

let text = null;
while (text === null) {
  text = prompt('enter some text');
}

let hasAVowel = false;

for (const letter of text) {
  if ('aeiouAEIOU'.includes(letter)) {
    hasAVowel = true;
    break;
  }
}

let message = '';

if (hasAVowel) {
  message = '"' + text + '" has at least one vowel';
} else {
  message = '"' + text + '" does not have any vowels';
}

alert(message);
