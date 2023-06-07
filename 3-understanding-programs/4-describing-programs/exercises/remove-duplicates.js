'use strict';

/* Remove duplicates
Ask the user to enter something with duplicates characters
the duplicates characters  will be removed.
- if user cancel, prompt again.
*/

let phrase = null;
while (phrase === null) {
  phrase = prompt(
    'enter something with duplicated characters , they will be removed',
  );
}

let previous = '';

let noRepetitions = '';
for (const next of phrase) {
  if (next !== previous) {
    noRepetitions = noRepetitions + next;
  }
  previous = next;
}

alert(noRepetitions);
