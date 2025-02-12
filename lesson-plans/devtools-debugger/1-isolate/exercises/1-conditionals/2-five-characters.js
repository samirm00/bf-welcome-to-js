'use strict';

/*  ===== Challenges =====
  - Give "input" a default value before asking for the user input.
  - Change input's value after asking for the user input so that we always show "thank you!".
  - Add one more conditional so that we never show ":(" and don't always show "thank you!".
*/

let input = '';
input = prompt('enter a word with 5 characters: ')
let message = '';

if (input > 5) {
  message = 'too long, try again';
} else if (input.length < 5){
  message = 'too short, try again';
} else if (input.length === 5 ) {
  message = 'perfect, thank you';
} else {
  message = ':(';
}

alert(message);

