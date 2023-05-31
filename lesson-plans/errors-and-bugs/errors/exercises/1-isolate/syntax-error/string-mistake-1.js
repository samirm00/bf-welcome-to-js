'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Invalid or unexpected token

  location: line 28 

  life cycle: execution

  the mistake: using ' ' to create nultlines string

  the fix(es): use ` instaed of ' 
*/

const a = `this is
two lines`;
