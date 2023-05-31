'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Unexpected number

  location: line 25

  life cycle: execution

  the mistake: starting the name of a variable using a number

  the fix(es):start with characters
*/

const num3 = 'three';

console.log(num3);
