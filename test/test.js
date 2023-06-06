'use strict';

let array1 = ['10', '20', '30', '40', '50'];
let array2 = ['5', '50', '11', '33', '10'];
let commonNumbers = [];

array1.forEach((num1) => {
  array2.forEach((num2) => {
    if (num1 === num2) {
      commonNumbers.push(num1);
    }
  });
});

console.log('The common values are: ' + commonNumbers);
