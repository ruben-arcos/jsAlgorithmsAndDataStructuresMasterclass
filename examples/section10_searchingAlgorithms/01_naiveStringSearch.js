function naiveSearch(strOne, strTwo) {
  let count = 0;

  // loop over the longer string
  for (let i = 0; i < strOne.length; i++) {
    // loop over the shorter string
    for (let j = 0; j < strTwo.length; j++) {
      // if the characters dont match, break out of the inner loop
      if (strOne[i + j] !== strTwo[j]) {
        break;
      }
      // if you complete the inner loop and find a match, increment the count of matches
      if (j === strTwo.length - 1) {
        count++;
      }
    }
  }
  // return the count
  return count;
}

console.log(naiveSearch("wowomgzomg", "omg"));
console.log(naiveSearch("wowomgzomg", "pop"));

function naiveSearch2(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        console.log("BREAK!");
        break;
      }
      if (j === short.length - 1) {
        console.log("FOUND ONE!");
        count++;
      }
    }
  }
  return count;
}

console.log(naiveSearch2("lorie loled", "lol"));

// short solution

function naiveSearch3(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch3("lorie loled", "cat"));
