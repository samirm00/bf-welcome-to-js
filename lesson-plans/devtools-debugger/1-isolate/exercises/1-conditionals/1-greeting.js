'use strict';

let input = prompt('enter your name:');

let greeting = '';
if (input === null) {
  greeting = 'hello anonymous.';
} else {
  greeting = 'hello ' + input + '!';
}

alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/


const firstName = prompt('What is your first name : ');
const lastName = prompt('What is your last name : ');

let message = '';

if (firstName && lastName) {
  message = `hello ${firstName} ${lastName}!`;
} else {
  message = 'hello anonymous.';
}

alert(message);