'use strict';

/*
  log the user's phrase
  log which type of search they wanted
  log their search query
  log whether or not the query was found in their phrase
*/

let phrase = '';

let userConfirmedPhrase = false;
while (!userConfirmedPhrase) {
  phrase = prompt('enter a phrase to search');
  if (phrase === null) {
    continue;
  }

  userConfirmedPhrase = confirm('is this correct: "' + phrase + '"');

  // log the user phrase
  console.log(phrase);
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

  // log query
  console.log(query);
}

let phraseIncludesQuery;
if (caseSensitive) {
  phraseIncludesQuery = phrase.includes(query);

  // log search type
  console.log('case sensitive');
} else {
  const lowerCasePhrase = phrase.toLowerCase();
  const lowerCaseQuery = query.toLowerCase();
  phraseIncludesQuery = lowerCasePhrase.includes(lowerCaseQuery);

  // log search type
  console.log('case insensitive');
}

let doesOrNot = '';
if (phraseIncludesQuery) {
  doesOrNot = 'does';
} else {
  doesOrNot = 'does not';
}

// log query found or not
console.log('Query ' + doesOrNot + ' found');
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
