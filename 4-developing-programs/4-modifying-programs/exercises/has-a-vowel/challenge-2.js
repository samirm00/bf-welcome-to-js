// #todo

'use strict';

/*
  modify this program so it only checks for consonants

  you can do this by changing one string, renaming a variable and the user's instructions
*/

let characters = null;
while (characters === null) {
  characters = prompt('enter some characters');
}

const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHIJKLMNPQRSTVWXYZ';

let hasAConsonants = false;
for (const char of characters) {
  if (consonants.includes(char)) {
    hasAConsonants = true;
    break;
  }
}

if (hasAConsonants) {
  alert('"' + characters + '" has at least one consonants');
} else {
  alert('"' + characters + '" has no consonant');
}
