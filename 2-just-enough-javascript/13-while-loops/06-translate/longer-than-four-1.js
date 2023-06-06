'use strict';

/*

  Data In: any text with more than 4 characters

  Data Out: alert the text

  Test Cases:

  'he' -> prompt again
  'JavaScript' -> 'JavaScript'

*/

// input <- ''

// WHILE: input !== null && input.length <= 4
//   input <- prompt('enter something longer than 4 characters')
// :END WHILE

// alert(input)

let input = '';

while (input === null || input.length <= 4) {
  input = prompt('enter something longer than 4 characters');
}

alert(input);
