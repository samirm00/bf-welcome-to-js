'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Identifier 'tree' has already been declared

  location: line 22

  life cycle: execution

  the mistake: declare the same variable twice

  the fix(es): declare it once
*/

let tree = 'oak';

tree = 'birch';

console.log(tree);
