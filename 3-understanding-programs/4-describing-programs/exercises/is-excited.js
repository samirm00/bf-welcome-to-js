'use strict';

/* Check excited
ask the user to input some text
- if the text has "!", notify the user text is excited
- else notify the user text is not excited
- if the user cancel prompt him again
*/

let input = null;
while (input === null) {
  input = prompt('enter some text, the program will check if it is excited');
}

let isExcited = false;
for (const char of input) {
  if (char === '!') {
    isExcited = true;
    break;
  }
}

let message = '';
if (isExcited) {
  message = '"' + input + '" is excited';
} else {
  message = '"' + input + '" is not excited';
}

alert(message);
