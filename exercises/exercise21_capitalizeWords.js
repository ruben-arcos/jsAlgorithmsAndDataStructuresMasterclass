/**
        capitalizeWords

            Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

            Examples:
                // let words = ['i', 'am', 'learning', 'recursion'];
                // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
*/

function capitalizeWords(wordsArray) {
  // Initialize an empty array to store the capitalized words
  let wordsInUpperCase = [];

  // Use a for loop to iterate through each word in the input array
  for (let i = 0; i < wordsArray.length; i++) {
    // Retrieve the current word from the input array
    let currentWord = wordsArray[i];

    // Check if the current word has a length greater than 0 (i.e., it is not an empty string)
    if (currentWord.length > 0) {
      // Convert the current word to uppercase
      let UpperCaseWord = currentWord.toUpperCase();
      // Add the capitalized word to the wordsInUpperCase array
      wordsInUpperCase.push(UpperCaseWord);
    }
  }
  // Return the array containing the capitalized words
  return wordsInUpperCase;
}

console.log(capitalizeWords(["i", "am", "learning", "recursion"]));

// solution 2

function capitalizeWords2(array) {
  // Base case: If the array has only one element, capitalize it and return a new array
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }

  // Recursive case:
  // Call capitalizeWords2 function with the array excluding the last element
  let res = capitalizeWords2(array.slice(0, -1));
  // Capitalize the last element of the original array and push it to the result array
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  // Return the result array
  return res;
}

console.log(capitalizeWords2(["i", "am", "learning", "recursion","and", "loving", "it!!!"]));
console.log(capitalizeWords2(["hello", "world", "of", "programming"]));
