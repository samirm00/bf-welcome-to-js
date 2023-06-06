'use strict';

/*

  Data In: ant text with length 4 or less

  Data Out: show the text

  Test Cases:

*/

/* ---   ?   --- */

// input <- ''

// WHILE: true
//   input <- prompt('enter something shorter than 5 characters')
//   IF: input === null
//     alert('there is no escape')
//   ELSE: IF: input.length > 4
//     alert('your input is too long')
//   ELSE:
//     BREAK
//   :END IF
// :END WHILE

/* ---   ?   --- */

// alert(input)

let input = '';

while (true) {
  input = prompt('enter something shorter than 5 characters');

  if (input === null) {
    alert('there is no escape');
    continue;
  } else if (input.length > 4) {
    alert('your input is too long');
    continue;
  } else {
    break;
  }
}

alert(input);
