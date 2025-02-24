import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  debugger;

  console.log('--- form data changed ---');

  // --- read the user's input ---

  // let userText = readString('to-mirror');
  // let userDelimiter = readString('delimiter');

  // --- mirror the text ---

  // the delimiter by default is vertical bar
//   let mirrored = ' | ';

//   // if there is a user delimiter then use it
//   if (userDelimiter) {
//     mirrored = ` ${userDelimiter} `;
//   }
//   for (let char of userText) {
//     mirrored = char.toUpperCase() + mirrored + char.toLowerCase();
//   }

//   // --- display the result ---

//   displayString('output', mirrored);
// });

/*  ===== Challenges =====

  - make the mirror image upper case
  - make the non-mirror image lower case
  - let the user decide which character goes in the middle
      for example, any of these should be possible:
        asdf * fdsa
        asdf & fdsa
        asdf - fdsa
        asdf o fdsa
        ...
      you will need to add an input to the HTML file

*/

  // --- read the user's input ---
  let userText = readString('to-mirror');
  let userDelimiter = readString('delimiter').trim(); // Trim to remove unwanted spaces

  // --- mirror the text ---

  // Default delimiter is "|", but user can choose anything
  let delimiter = userDelimiter || '|';
  let mirrored = ` ${delimiter} `;

  // Create mirrored text in uppercase
  for (let char of userText) {
    mirrored = char.toUpperCase() + mirrored + char.toUpperCase();
  }

  console.log(mirrored);

  // --- display the result ---
  displayString('output', mirrored);
});


