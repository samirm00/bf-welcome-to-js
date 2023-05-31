'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Unexpected string

  location: line 23

  life cycle: execution

  the mistake: using ' to surrounded by  a a string  with '

  the fix(es): using " instead of '
*/

const quotesInQuotes = "yourself ''i can do this!'' at least once a day";

console.log(quotesInQuotes);
