'use strict';

/*
  environment:

  name: ReferenceError
  message: welf is not defined

  callstack:  at <anonymous>:20:6
    at evaller.onload (study-with.js:63:34)

  life cycle: execution phase 

  the mistake: undeclared variable 

  the fix(es): declare it variable const
*/

const welf = 'ingrad';

console.log(welf);
