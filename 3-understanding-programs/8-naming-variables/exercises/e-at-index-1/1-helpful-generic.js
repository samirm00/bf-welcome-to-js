'use strict';

/* generic

  _a     -> i:
  _b     -> output:
  _c     -> isTrue:
  _d     -> input:
*/

alert('you will need to enter strings with "e" in the right place');

let i = 0;

let output = 'entries:';

let isTrue = true;
while (isTrue) {
  const input = prompt('input a string with "e" at i ' + i);

  if (input === null) {
    isTrue = !confirm('are you sure you want to exit?');
  } else if (input[i] === 'e') {
    output = output + '\n' + i + '. "' + input + '"';
    i = i + 1;
  } else {
    output = output + '\nx. "' + input + '"';
    isTrue = false;
  }
}

alert('your score: ' + i + '\n\n' + output);
