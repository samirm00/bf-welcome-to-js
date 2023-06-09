'use strict';

/* title remove a word

  description : 
  - ask the user for something he/she doesn't like
    if the user cancel or add an epmty string prompt again
  - ask the user for text if the first input will be removed form the text
  test cases
enter some text, the program will remove "scasa"
*/

let phrase = '';

while (true) {
  const input = prompt("enter something you don't like");

  if (input) {
    phrase = input;
    break;
  } else {
    continue;
  }
}

let text = '';
while (true) {
  const input = prompt(`enter some text, the program will remove "${phrase}"`);

  if (input) {
    text = input;
    break;
  } else {
    continue;
  }
}

// replace phrase with empty string
const newText = text.replaceAll(phrase, '');

const message = `before : ${text}\n\nremoved : ${phrase}\n\nafter : ${newText}`;
alert(message);
