'use strict';

// let input = null;
// while (input === null || input.length !== 5) {
//   input = prompt('enter something with 5 characters:');
// }

// let message = 'thank you for "' + input + '"!';

// alert(message);

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/

let userInput;

while (!userInput || userInput.length !== 10) {
  const partOne = prompt('type "every"');
  const partTwo = prompt('type "thing"');

  // Make sure the user enter something to partOne and partTwo
  if (partOne && partTwo) {
    userInput = partOne + partTwo;
  } else {
    alert(
      `You need to enter the exact words to both prompts`,
    );
  }
}

alert('Thank you for ' + userInput + '!');
