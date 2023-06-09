'use strict';

/* title

  description

  user story + acceptance criteria

  test cases

*/

let phrase = '';

while (true) {
  const input = prompt('enter a long phrase (at least 10 characters)');

  if (input === null) {
    continue;
  } else if (input.length < 10) {
    alert('not long enough');
    continue;
  } else {
    const isCorrectPhrase = confirm(`is this phrase correct: "${input}"`);

    if (isCorrectPhrase) {
      phrase = input;
      break;
    } else {
      continue;
    }
  }
}

let query = '';

while (true) {
  const input = prompt(
    'enter a search query, this program will check if it exists in your phrase',
  );

  if (input === null) {
    continue;
  } else {
    const isCorrectQuery = confirm(`is this query correct: "${input}"`);

    if (isCorrectQuery) {
      query = input;
      break;
    } else {
      continue;
    }
  }
}

let message = '';
const isIncludeQuery = phrase.toLowerCase().includes(query.toLowerCase());
if (isIncludeQuery) {
  message = `"${phrase}" does include "${query}"`;
} else {
  message = `"${phrase}" does not include "${query}"`;
}

alert(message);
