'use strict';

/* -- 1. get an orange --

  - how many control flow structures are there in this goal? 3  only in while loop
  - describe the input a user needs to give to exit this loop. -> orange upper case or lower case
  - how many paths are there through this Input/Output (I/O) loop? 2 
*/

let theOrange = '';

while (theOrange === '') {
  /* -- 1.a gather user input -- */

  const input = prompt('give me an orange, lower or upper case');

  /* -- 1.b check if the user canceled --
    - which user action will pass this condition?
  */

  if (input === null) {
    continue;
  }

  /* -- 1.c check if the user's input is an orange --
    - what is the scope for `theOrange`? global scope
    - what is the scope for `input`? while loop scope
  */

  if (input.toLowerCase() === 'orange') {
    theOrange = input;
  }
}

/* -- 2. describe the orange --

  - how many comparisons are there in this goal? 2 
  - how many possible descriptions are there? 3 
  - how many paths are there through this conditional?  3 paths
  - which variables are used in this goal, where were they declared?
   theOrange -> global scope ,  description -> global scope
*/

let description = '';

if (theOrange === 'orange') {
  description = 'small';
} else if (theOrange === 'ORANGE') {
  description = 'big';
} else {
  description = 'small and big';
}

/* -- 3. alert the description for the user -- */

alert(theOrange + ' is a ' + description + ' orange');
