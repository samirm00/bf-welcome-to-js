'use strict';

/* title : palindrome reverse 

  description : the user will enter a palindrome word 
  if it is palindrome it will reverse it 
  if not it will notif the user the word is not a palindrome

  test cases
  'test' -> 'your input is not a palindrome, try again'
  'madam' -> 'madam'

*/

let phrase = '';

while (true) {
  let input = prompt('enter a palindrome, this program will reverse it');

  if (input) {
    const phraseLowerCase = input.toLowerCase();
    const phraseReversed = phraseLowerCase.split('').reverse().join('');
    if (phraseLowerCase === phraseReversed) {
      phrase = input;
      break;
    } else {
      alert('your input is not a palindrome, try again');
      continue;
    }
  } else {
    continue;
  }
}

alert(`here is your reversed palindrome:\n\n - ${phrase}`);
