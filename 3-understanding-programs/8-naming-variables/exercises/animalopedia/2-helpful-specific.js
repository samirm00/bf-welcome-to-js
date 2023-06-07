'use strict';

/* specific

  _a -> animal:
  _b -> infoAboutAnimal
  _c -> isAnimalIncluded

*/

alert(
  'this is a two-player game:\n\n' +
    '- player 1: enters an animal\n' +
    '- player 2: says something cool about it',
);

let animal = null;
while (animal === null) {
  animal = prompt('enter an animal');
}

let infoAboutAnimal = '';

let isAnimalIncluded = false;
while (!isAnimalIncluded) {
  infoAboutAnimal = prompt('tell me something about ' + animal);

  if (infoAboutAnimal === '' || infoAboutAnimal === null) {
    alert('that is not something');
  } else if (infoAboutAnimal.toLowerCase().includes(animal.toLowerCase())) {
    isAnimalIncluded = true;
  } else {
    alert('nope, not about ' + animal + '.  try again.');
  }
}

alert(
  'i just learned something cool about ' +
    animal +
    '!\n\n- "' +
    infoAboutAnimal +
    '"',
);
