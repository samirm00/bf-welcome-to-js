'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: ReferenceError
  message: welf is not defined

  location: line 20

  life cycle: execution

  the mistake: undeclared variable welf

  the fix(es): declare the variable welf using const
*/

const welf = 'ingrad';

console.log(welf);
