'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Invalid left-hand side in assignment

  location: line 25 

  life cycle: execution

  the mistake: left side assignment 

  the fix(es): make it right side assignment 
*/

let isHappy = false;

isHappy = true;

console.log(isHappy);
