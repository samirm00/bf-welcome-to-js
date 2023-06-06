'use strict';

/* -- get an orange -- */

let theOrange = '';
while (theOrange === '') {
  const input = prompt('give me an orange, lower or upper case');

  if (input === null) {
    continue;
  }

  if (input.toLowerCase() === 'orange') {
    theOrange = input;
  }
}

/* -- describe the orange -- */

let description = '';
if (theOrange === 'orange') {
  description = 'small';
} else if (theOrange === 'ORANGE') {
  description = 'big';
} else {
  description = 'lumpy';
}

/* --- display the description for the user --- */

alert(theOrange + ' is a ' + description + ' orange');
