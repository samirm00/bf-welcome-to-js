'use strict';

let input = prompt('enter something with "ear" in it');

let message;
if (!input) {
  message = 'you entered nothing!';
} else {
  if (input.includes('ear')) {
    message = 'eary! :)';
  } else {
    message = 'not eary :(';
  }
}

alert(message);
