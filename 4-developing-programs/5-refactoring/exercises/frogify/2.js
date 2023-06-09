'use strict';

/*
  refactor this program so it uses a `while` loop instead of a `for-of` loop
*/

let toBeFrogged = null;

while (toBeFrogged === null) {
  toBeFrogged = prompt(
    'enter some text to frogify.\n' +
      '- "f" will be replaced with "frog"\n' +
      '- "F" will be replaced with "FROG"',
  );
}

let frogged = '';

while (true) {
  // Replace all 'f' with 'frog'
  frogged = toBeFrogged.replaceAll('f', 'frog');
  // Replace all 'F' with 'FROG'
  frogged = frogged.replaceAll('F', 'FROG');
  break;
}

alert(frogged);
