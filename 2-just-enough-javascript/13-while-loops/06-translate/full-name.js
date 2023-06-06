// #todo

'use strict';

/* Full Name


  Data In: any text(names)

  Data Out: full name 

  Test Cases:
  'John', 'Doe' -> 'John Doe'
  'Jane', 'Doe' -> 'Jane Doe'

*/

/* ---  ?  --- */

// firstName <- null

// WHILE: firstName === null
//   firstName <- prompt('enter a first name')
// :END WHILE

/* ---  ?  --- */

// lastName <- null

// WHILE: lastName === null
//   lastName <- prompt('enter a last name')
// :END WHILE

/* ---  ?  --- */

// fullName <- firstName + ' ' + lastName

/* ---  ?  --- */

// alert(fullName)

let firstName = null;

while (firstName === null) {
  firstName = prompt('enter a first name');
}

let lastName = null;
while (lastName === null) {
  lastName = prompt('enter a last name');
}

const fullName = firstName + ' ' + lastName;

alert(fullName);
