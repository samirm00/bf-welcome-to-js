// #todo

'use strict';

/* Challenge: write this program using `break` and `continue`

  a user can input a non-empty string and only the letters will be turned into a mirror
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input is valid, the loop will exit and the mirrored letters will be displayed

  test cases:
    only letters:
      'abc' -> 'abc|cba'
      'hello' -> 'hello|olleh'
      'JavaScript' -> 'JavaScript|tpircSavaJ'
    only not-letters:
      '.(-).' -> '|'
      '-=>|<=-' -> '|'
      '. - ^ - .' -> '|'
    mixed letters and not-letters:
      'hello!' -> 'hello|olleh'
      'good bye?' -> 'goodbye|eybdoog'
      'let input = ""' -> 'letinput|tupnitel'

*/

console.log('--- begin program ---');

/* --- gather user input --- */

let input;
while (true) {
  const userInput = prompt('Please enter something to turn into mirror ');

  if (userInput) {
    input = userInput;
    break;
  } else {
    continue;
  }
}
console.log('input:', input);

/* --- declare initial output --- */

let output = '|';

/* --- create final output --- */

for (let char of input) {
  if (/^[a-zA-Z]+$/.test(char)) {
    output = char + output + char;
  }
}
const newOutput = output.split('|');
output = newOutput[1] + '|' + newOutput[0];
/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');

console.log('--- end program ---');

/*
  checklist:
    [ ] the code is formatted
    [ ] linting check passes
    [ ] variable names are clear and helpful
    [ ] each line of code is explained in a comment above that line
      - use full sentences and correct JS vocabulary
    [ ] the program runs
    [ ] the program has no errors
    [ ] all of the test cases work
    [ ] you tested strange inputs that could break your program (edge cases)
*/
