'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: ReferenceError
  message: Cannot access 'isValidUserName' before initialization

  location: line 24

  life cycle: execution

  the mistake: assign un exist variable

  the fix(es): declare the variable before using it
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);
let isValidUserName;
if (userName.length > 3) {
  isValidUserName = true;
}

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
