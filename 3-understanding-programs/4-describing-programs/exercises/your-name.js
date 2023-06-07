'use strict';

/* Name
Ask the user for his/her name.
if cancel or empty string, show useful message and prompt again.
ask the user to confirm his/her name
if confirm, show a nice massage
else prompt gain
*/

let userInput = '';
while (true) {
  userInput = prompt('enter your name:');

  if (userInput === null || userInput === '') {
    alert('nothing is not a name');
    continue;
  }

  const userDidConfirm = confirm('is this your name: "' + userInput + '"');
  if (userDidConfirm) {
    break;
  }
}

alert('your name is: "' + userInput + '"');
