'use strict';

/*
  test cases:
    null -> ':('
    '' -> ':('
    'abcde' -> 'perfect!'
    'abcdef' -> 'too long'

  experiment 1
    line: 19
    why: it becomes null
    trying: change the assignment operator into strict equality operator

*/

let userInput = prompt('enter something 5 characters long');

if (!userInput) {
  alert(':(');
} else if (userInput.length < 5) {
  alert('too short');
} else if (userInput.length > 5) {
  alert('too long');
} else {
  alert('perfect!');
}
