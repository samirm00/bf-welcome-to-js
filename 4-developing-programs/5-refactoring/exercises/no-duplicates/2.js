'use strict';

/*
  refactor this program so the I/O loop DOES NOT accept strings with duplicate characters
  hints:
    - one strategy is moving the `for-of` loop inside the I/O loop
    - you might want to try using a boolean flag for the I/O loop (or true/break/continue)

*/

while (true) {
  const mayHaveDuplicates = prompt(
    'enter something with no duplicate characters',
  );

  if (!mayHaveDuplicates) {
    continue;
  }

  let hasNoDuplicates = '';
  for (let char of mayHaveDuplicates) {
    let isDuplicate = hasNoDuplicates.includes(char);
    if (isDuplicate) {
      alert('too bad, try again');
      break;
    }
    hasNoDuplicates += char;
  }

  if (hasNoDuplicates === mayHaveDuplicates) {
    alert('well done.');
    break;
  } else {
    break;
  }
}
