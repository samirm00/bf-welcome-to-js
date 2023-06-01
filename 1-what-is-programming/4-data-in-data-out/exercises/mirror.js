'use strict';

/* Mirror
 this program will show the reversed text and the original text separated by |
  Data In: any text

  Data Out: the reversed text | the text

  Test Cases:
  'a' -> 'a | a'
  'a' -> 'ba | ab'
  'JavaScript' -> 'tpircSavaJ | JavaScript'

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to mirror');
  console.log(input);
}

/* --- create mirrored text --- */

let mirrored = ' | ';
for (let character of input) {
  mirrored = character + mirrored + character;
  console.log(mirrored);
}

/* --- display mirrored text to the user --- */

alert(mirrored);
