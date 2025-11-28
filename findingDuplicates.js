const numbers = [1, 4, 2, 4, 66, 2, 6, 77, 8, 77, 66, 4, 8, 3, 5, 4, 5];

function displayDuplicates(numArray) {
  const duplicates = [];

  for (let i = 0; i < numArray.length; i++) {
    let count = 0;

    for (let j = 0; j < numArray.length; j++) {
      if (numArray[i] === numArray[j]) {
        count++;
      }
    }

    if (count > 1 && !duplicates.includes(numArray[i])) {
      duplicates.push(numArray[i]);
    }
  }

  return duplicates;
}
