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

const firstName = prompt('Please enter your first name : ');
const lastName = prompt('Please enter your last name : ');

let message = '';

// if we have firstName and lastName
if (firstName && lastName) {
  message = `hello ${firstName} ${lastName}!`;
} else {
  message = 'hello anonymous.';
}

alert(message);
