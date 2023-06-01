'use strict';

/* Reverse
 this program will reverse any text
  Data In: any text
  Data Out: text reversed
  Test Cases:
  'ab' -> 'ba'
  'test' -> 'tset'
  'JavaScript' -> 'tpircSavaJ'

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to reverse');
  console.log(input);
}

/* --- reverse the input text --- */

let reversed = '';
for (let character of input) {
  reversed = character + reversed;
  console.log(reversed);
}

/* --- create a final message --- */

let message = input + ' -> ' + reversed;
console.log(message);

/* --- display message to the user --- */

alert(message);
