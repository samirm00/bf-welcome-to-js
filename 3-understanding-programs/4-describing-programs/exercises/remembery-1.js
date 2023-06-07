'use strict';

/* Guess a phrase 
- ask the first user for a phrase.
- ask the second user to guess the phrase if guess is correct got 3 points
- if the first guess was wrong, ask the second user to guess again if guess2 was correct 2 points
- if the first and the second guesses were wrong ask for the a 
  third guess if was correct got 1 point
- else 0 point
*/

alert(`Guess a phrase in 3 tries

  Player 1:
    enter a phrases

  Player 2:
    see the phrase then has 3 chances to guess it
    you start with 3 points
    each wrong guess will lose you a point
`);

alert('Player 2: go hide');

const phrase = prompt('Player 1, enter your first phrase:');

alert('Player 2, get back here');

alert('Player 2, remember this: \n"' + phrase + '"');

let points = 3;

const guess1 = prompt('Player 1, enter your first guess:');
if (guess1 !== phrase) {
  points = points - 1;

  const guess2 = prompt('Player 1, enter your second guess:');
  if (guess2 !== phrase) {
    points = points - 1;

    const guess3 = prompt('Player 1, enter your third guess:');
    if (guess3 !== phrase) {
      points = points - 1;
    }
  }
}

alert('your points: ' + points);
