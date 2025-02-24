'use strict';

/*
  test cases:
    '' -> ''
    'a' -> 'a!'
    'hello' -> 'h!e!l!l!o!'
    ':)' -> ':!)!'

  experiment 1
    line: 25
    why: the words are not concatenated 
    trying: change the assignment operactor to addition assignment operactor

*/

let text = null;
while (!text) {
  text = prompt('enter some text, it will be excited');
}

let excited = '';
for (const character of text) {
  excited += character + '!';
}

alert(excited);
