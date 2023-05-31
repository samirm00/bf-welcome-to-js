'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

// declare a new variable a and initialize it to the value 'y'
// declare a new variable b and initialize it to the value 'x'
// declare a new variable t and initialize it to the value ''
let a = 'y';
let b = 'x';
let t = '';

// read the variables a, b, t
console.log(a, b, t);

// assign the variable t to 'y'
// assign the variable a to 'x'
// assign the variable b to 'y'
t = a;
a = b;
b = t;

// read the variables a, b, t
console.log(a, b, t);

// what did you do in this program?  swap the value of the variables a, b
// what are the final values of `a` and `b`? a = 'x', b = 'y'
// how are they changed from the initial values? a 'y' => 'x' , b 'x' => 'y' , t '' => 'y'

// is it possible to swap a and b without using t? in some cases yes ,but it is much
// easier to use a third variable
