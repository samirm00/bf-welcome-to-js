'use strict';

let text = null;
while (text === null) {
  text = prompt('enter some text, each character will be doubled:');
}

// let doubled = '';
// for (let nextChar of text) {
//   doubled = doubled + nextChar + nextChar;
// }

// alert(doubled);

/*  ===== Challenges =====
  - Add an hyphen after each character.
  - Add an hyphen only between the characters.
*/

let hyphenAfter = '';
for (const char of text) {
  hyphenAfter += char + '-';
}

alert(hyphenAfter);

let hyphenBetween = '';
for (const char of text) {
  hyphenBetween += char + '-';
}

// we need to get red of the last hyphen
// substring(start index, end index), the end index is not included
hyphenBetween = hyphenBetween.substring(0, hyphenBetween.length - 1);

alert(hyphenBetween);
