'use strict';

/* Say hello

  Data In: 'hello'

  Data Out: 'hello to you too!'

  Test Cases:
  null, '' -> prompt again
  'hello' -> 'hello to you too!
*/

// input <- ''

// WHILE: input !== 'hello'
//   input <- prompt('say hello')
// :END WHILE

// alert('hello to you too!')

let input = '';

while (input !== 'hello') {
  input = prompt('say hello');
}

alert('hello to you too!');
