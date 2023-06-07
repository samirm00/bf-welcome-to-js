'use strict';

// declare a variable toBeFrogged and initialize it to the value null
let toBeFrogged = null;

// read the variable toBeFrogged
while (toBeFrogged === null) {
  // assign the variable toBeFrogged
  toBeFrogged = prompt(
    'enter some text to frogify.\n' +
      '- "f" will be replaced with "frog"\n' +
      '- "F" will be replaced with "FROG"',
  );
}
// declare a variable frogged and initialize it the value ''
let frogged = '';

for (const character of toBeFrogged) {
  if (character === 'f') {
    // read the variable frogged
    // assign the variable frogged
    frogged = frogged + 'frog';
    continue;
  }
  if (character === 'F') {
    // read the variable frogged
    // assign the variable frogged
    frogged = frogged + 'FROG';
    continue;
  }
  // read the variable frogged
  // assign the variable frogged
  frogged = frogged + character;
}

// read the variable frogged
alert(frogged);
