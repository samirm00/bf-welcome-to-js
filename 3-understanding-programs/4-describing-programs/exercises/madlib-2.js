'use strict';

/* Madlib:
- ask the user for adjective, if the user cancel prompt him again
- ask the user for noun, if the user cancel prompt him again
- ask the user for verb, if the user cancel prompt him again

notify the user with fun message

*/

let adjective = null;
while (adjective === null) {
  adjective = prompt('enter an adjective');
}

let noun = null;
while (noun === null) {
  noun = prompt('enter a noun');
}

let verb = null;
while (verb === null) {
  verb = prompt('enter a verb');
}

let phrase = 'the ';
phrase = phrase + adjective + ' ';
phrase = phrase + noun + ' likes to ';
phrase = phrase + verb;

alert(phrase);
