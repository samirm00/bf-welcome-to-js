'use strict';

/* Search
Ask the user for a phrase, if cancel prompt again
ask the user to confirm his phrase, if no confirm prompt again
ask th user if case sensitive should be considered.
Ask the user for a query, if cancel prompt again
ask the user to confirm his query, if no confirm prompt again
notify the user if query existed in a phrase or not.
*/
let phrase = '';

let userConfirmedPhrase = false;
while (!userConfirmedPhrase) {
  phrase = prompt('enter a phrase to search');
  if (phrase === null) {
    continue;
  }

  userConfirmedPhrase = confirm('is this correct: "' + phrase + '"');
}

const caseSensitive = confirm('do you want a case-sensitive search?');

let query = '';

let userConfirmedQuery = false;
while (!userConfirmedQuery) {
  query = prompt(
    'enter a search query, this program will check if it exists in your phrase',
  );
  if (query === null) {
    continue;
  }

  userConfirmedQuery = confirm('is this correct: "' + query + '"');
}

let phraseIncludesQuery;
if (caseSensitive) {
  phraseIncludesQuery = phrase.includes(query);
} else {
  const lowerCasePhrase = phrase.toLowerCase();
  const lowerCaseQuery = query.toLowerCase();
  phraseIncludesQuery = lowerCasePhrase.includes(lowerCaseQuery);
}

let doesOrNot = '';
if (phraseIncludesQuery) {
  doesOrNot = 'does';
} else {
  doesOrNot = 'does not';
}

alert(
  '"' +
    phrase +
    '" ' +
    doesOrNot +
    ' include "' +
    query +
    '"\n\n' +
    'case sensitive: ' +
    caseSensitive,
);
