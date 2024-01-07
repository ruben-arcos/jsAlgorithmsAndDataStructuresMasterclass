function findTheMatch(strOne, strTwo) {
    let count = 0;
  
    // loop over the longer string
    for (let i = 0; i < strOne.length; i++) {
      // loop over the shorter string
      for (let j = 0; j < strTwo.length; j++) {
        // if the characters dont match, break out of the inner loop
        if (strOne[i] !== strTwo[j]) {
          break;
          // if the characters do match, keep going
        } else if (strOne[i] === strTwo[j]) {
          // if you complete the inner loop and find a match, increment the count of matches
          count++;
        }
      }
    }
    // return the count
    return count;
  }
  
  console.log(findTheMatch("wowomgzomg", "omg"));
