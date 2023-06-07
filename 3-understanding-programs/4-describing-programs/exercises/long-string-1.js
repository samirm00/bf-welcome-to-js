'use strict';

/* Check characters
ask the user to input anything with 5 characters length
- if the user enter something with more than 5 characters it will notify him with a message and the number of charchters 
- else if the user enter something with 5 charactersor less , notify the user too short 
- if the user cancel show useful message and prompt gain
*/

let userInput = '';

let isTooShort = true;
while (isTooShort) {
  userInput = prompt('enter anything longer than 5 characters');

  if (userInput === null) {
    alert('there is no escape');
    continue;
  }

  isTooShort = userInput.length <= 5;
  if (isTooShort) {
    alert('too short');
  }
}

alert('"' + userInput + '" is ' + userInput.length + ' characters long');
