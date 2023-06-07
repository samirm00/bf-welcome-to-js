'use strict';

/* Check characters
ask the user to input anything with 5 characters length
- if the user enter something with more than 5 characters 
  it will notify him with a message and the number of characters 
- else if the user enter something with 5 characters less , notify the user too short 
- if the user cancel show useful message and prompt gain
*/

let anything = '';

while (true) {
  anything = prompt('enter anything longer than 5 characters');

  if (anything === null) {
    alert('there is no escape');
    continue;
  }

  if (anything.length <= 5) {
    alert('too short');
    continue;
  }

  break;
}

alert('"' + anything + '" is ' + anything.length + ' characters long');
