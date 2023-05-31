'use strict';

console.log('--- in execution phase ---');

/*
  environment:

  name: SyntaxError
  message: Unexpected token '{'

  location: line 27

  life cycle: execution

  the mistake: using else twice

  the fix(es): use else if instead of else
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}
