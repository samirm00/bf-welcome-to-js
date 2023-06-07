'use strict';

/* specific

  _a     -> charIndex:
  _b     -> finalMessage:
  _c     -> isCorrectIndex:
  _d     -> phrase:
*/

alert('you will need to enter strings with "e" in the right place');

let charIndex = 0;

let finalMessage = 'entries:';

let isCorrectIndex = true;
while (isCorrectIndex) {
  const phrase = prompt('phrase a string with "e" at i ' + i);

  if (phrase === null) {
    isCorrectIndex = !confirm('are you sure you want to exit?');
  } else if (phrase[charIndex] === 'e') {
    finalMessage = finalMessage + '\n' + charIndex + '. "' + phrase + '"';
    charIndex = charIndex + 1;
  } else {
    finalMessage = finalMessage + '\nx. "' + phrase + '"';
    isCorrectIndex = false;
  }
}

alert('your score: ' + charIndex + '\n\n' + finalMessage);
