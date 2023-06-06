'use strict';

/* Repeat a string

  Data In: any text

  Data Out: text repeated text length times

  Test Cases:
  null -> prompt again
  "" -> nothing
  'test' - >  test
              test
              test
              test

*/

/* ---   ?   --- */

// input <- null

// WHILE: input === null
//   input <- prompt('enter some text')
// :END WHILE

/* ---   ?   --- */

// repeated <- ''

// i <- 0

// WHILE: i < input.length
//   repeated <- repeated + '\n' + input
//   i <- i + 1
// :END WHILE

/* ---   ?   --- */

// alert(repeated)

let input = null;

// ask for input
while (input === null) {
  input = prompt('enter some text');
}

let repeated = '';
let i = 0;

while (i < input.length) {
  repeated += '\n' + input;
  i++;
}

alert(repeated);
