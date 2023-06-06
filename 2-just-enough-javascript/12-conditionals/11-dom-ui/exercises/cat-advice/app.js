import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  console.log('--- form data changed ---');

  // --- read the user's input ---
  const likeCats = readBoolean('likes-cats');
  const isAllergic = readBoolean('is-allergic');
  const ownACat = readBoolean('owns-one');

  // --- generate good advice ---
  let advice = '';
  if (likeCats && isAllergic && ownACat) {
    advice = 'replace your cat with a stuffed animal';
  } else if (likeCats && isAllergic && !ownACat) {
    advice = 'make a friend who has a cat';
  } else if (likeCats && !isAllergic && !ownACat) {
    advice = 'get a cat';
  } else if (!likeCats && isAllergic && ownACat) {
    advice = 'rethink your life choices';
  } else if (!likeCats && isAllergic && !ownACat) {
    advice = 'you are doing great';
  } else if (!likeCats && !isAllergic && ownACat) {
    advice = 'you could be doing worse';
  } else {
    advice = 'you are doing great';
  }

  // --- display advice for the user ---
  displayString('custom-advice', advice);
});
