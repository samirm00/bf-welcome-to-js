'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: ReferenceError
  message: Cannot access 'tomatoes' before initialization

  location: line 20

  life cycle: execution

  the mistake: reading the variable tomatoes before declare it

  the fix(es): declare the variable then reading it
*/

let tomatoes = 'fresh';

console.log(tomatoes);
