'use strict';

/* Frogopedia 
ask the user for anything about frogs
  1- if the input doesn't includes "frog" then show useful message and prompt again.
  2- if the user cancel or enter an empty string prompt again
  3- if the input includes "frog" then show a nice message
*/

const animalName = 'frog';

let coolThing = '';

while (true) {
  coolThing = prompt('tell me something about ' + animalName + 's');

  if (coolThing === '' || coolThing === null) {
    alert('that is not something');
    continue;
  }

  if (coolThing.toLowerCase().includes(animalName)) {
    break;
  }

  alert('nope, not about frogs.  try again.');
}

alert('i just learned something cool about frogs!\n\n- "' + coolThing + '"');
