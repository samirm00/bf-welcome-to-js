'use strict';

/* Keep word(s)

- the program will ask the user for a sentence with at least 3 characters  and one space
then it will ask the user if he want to keep the first and second words 
if yes, it will alert both words else 
it will remove the unwanted  word(s), if the user chose to 
unwanted both words it will alert a empty string.

-if the user click cancel or empty string it will alert a useful message and prompt him again
- if no space in the sentence it will alert a useful message and prompt again


*/
let sentence = '';

let isValid = false;
while (!isValid) {
  sentence = prompt('enter a sentence with at least 2 words');

  if (sentence === null) {
    alert('there is no escape');
  } else if (sentence.length < 3) {
    alert('"' + sentence + '" is too short to have two words');
  } else if (!sentence.includes(' ')) {
    alert('there is no space');
  } else {
    isValid = true;
  }
}

sentence = sentence + ' ';

let newSentence = '';

let nextWord = '';
for (const character of sentence) {
  if (character === ' ') {
    const keep = confirm('do you want to keep this word:\n\n- ' + nextWord);
    if (keep) {
      newSentence = newSentence + character + nextWord;
    }
    nextWord = '';
  } else {
    nextWord = nextWord + character;
  }
}

alert(newSentence);
