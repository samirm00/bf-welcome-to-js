// #todo

'use strict';

/* Has an "x"


  Data In: any text

  Data Out: a message tell the user if the entered text has 'x' or not.

  Test Cases:
  'text' -> 'has at least one "x"'
  'John' -> 'does not have a single "x"' 
  'XEN' -> 'has at least one "x"'

*/

/* ---  ?  --- */

// input <- null
// WHILE: input === null
// input <- prompt('enter something, the program will check if it has an "x"')
// :END WHILE

/* ---  ?  --- */

// IF: input.includes('x')
//  message <- message + 'has at least one "x"'
//  message <- message + 'does not have a single "x"'
// ELSE:
// :END IF

/* ---  ?  --- */

// alert(message)

let input = null;

while (input === null) {
  input = prompt('enter something, the program will check if it has an "x"');
}

let message = '';
// check if the input case insensitive has 'x'
const doesIncludesX = input.toLowerCase().includes('x');

if (doesIncludesX) {
  message += 'has at least one "x"';
} else {
  message += 'does not have a single "x"';
}

alert(message);
