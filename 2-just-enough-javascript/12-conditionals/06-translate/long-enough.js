'use strict';

/*
  Data In: any text

  Data Out:

  Test Cases:
  'test' -> 'too short'
  'JavaScript' -> 'ong enough'
  'React' -> 'exactly 5!'

*/

/* ---   ?   --- */

// input <- prompt('enter anything longer than 5 characters')

// IF: input !== null
//   IF: input.length < 5
/* ---   ?   --- */
//     message <- 'too short'
//   ELSE: IF: input.length > 5
/* ---   ?   --- */
//     message <- 'long enough'
//   ELSE:
/* ---   ?   --- */
//     message <- 'exactly 5!'
//   :END IF
// ELSE:
/* ---   ?   --- */
//   message <- 'you canceled :('
// :END IF

/* ---   ?   --- */

// alert(message)
const userInput = prompt('enter anything longer than 5 characters ');

let message = '';
if (userInput !== null) {
  if (userInput.length < 5) {
    message = 'too short';
  } else if (userInput.length > 5) {
    message = 'long enough';
  } else {
    message = 'exactly 5!';
  }
} else {
  message = 'you canceled :(';
}

alert(message);
