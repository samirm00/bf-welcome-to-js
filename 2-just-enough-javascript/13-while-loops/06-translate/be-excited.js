'use strict';

/* Be Excited

  Data In: ant text

  Data Out: curious text

  Test Cases:
  '' -> '!'
  'test' -> "test!"

*/

/* ---  ?  --- */

// input <- null
// WHILE: input === null
//   input <- prompt('enter something, it will become excited')
// :END WHILE

/* ---  ?  --- */

// output <- input
// IF: input[input.length - 1] !== '!'
//   output <- output + '!'
// :END IF

/* ---  ?  --- */

// alert(output)

let input = null;
while (input === null) {
  input = prompt('enter something, it will become excited');
}

let output = '';
if (input[input.length - 1] !== '!') {
  output = input + '!';
} else {
  output = input;
}
alert(output);
