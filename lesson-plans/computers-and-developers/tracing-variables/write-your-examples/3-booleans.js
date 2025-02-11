'use strict';

/* Booleans

TODO: create a few variables(boolean):
- you need to add comments to show where the variable been
declared, initialized, read , reassigned,...
*/


let isYoung = true; // declare and initialize

let isBeautiful = false; // declare and initialize

let canMarry = isYoung && isBeautiful; // read isBeautiful, read isYoung, declare and initialize canMarry

console.log(canMarry); // log

isBeautiful = true; // read and reassign

canMarry = isYoung && isBeautiful; // read isBeautiful, read isYoung, reassign canMarry

console.log(canMarry); // log 