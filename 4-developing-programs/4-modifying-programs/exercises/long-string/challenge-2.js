'use strict';

/*
  modify this program so it checks that user input is SHORTER than a specific limit.

  you can do this with 1 change in the logic, and some changes in the prompt/alert text
*/

let phrase = '';

let longEnough = false;
while (!longEnough) {
  // Ask the user for limit
  let limit = prompt('enter the limit of characters ');

  // if no limit, the default will be 5
  if (!limit) {
    limit = 5;
  }
  phrase = prompt('enter anything longer than ' + limit + ' characters');

  if (phrase === null) {
    alert('there is no escape');
  } else if (phrase.length < limit) {
    alert('too short');
  } else {
    longEnough = true;
  }
}

alert('"' + phrase + '" is ' + phrase.length + ' characters long');
