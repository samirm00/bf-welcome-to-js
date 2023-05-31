'use strict';

// let input = null;
// while (input === null) {
//   input = prompt('input something:');
// }

// alert('thank you!');

/*  ===== Challenges =====
  - Try to create an infinite loop so the user gets stuck inside your prompt.
*/

let userInput;
while (true) {
  userInput = prompt('input something:');
  console.log(userInput);
}

// Note this will never executed because we have infinite loop
alert('thank you!');
