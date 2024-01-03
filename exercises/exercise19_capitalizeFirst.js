/**
    capitalizeFirst

        Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

        Examples:
        capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
*/

function capitalizeFirst(words) {
  // Initialize an empty array to store the capitalized words
  let capitalizedWords = [];

  // Iterate over each word in the input array
  for (let i = 0; i < words.length; i++) {
    // Retrieve the current word at index i
    let word = words[i];
    // Check if the current word is not an empty string
    if (word.length > 0) {
      // Capitalize the first letter of the word and concatenate it with the rest of the word
      let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      // Add the capitalized word to the array
      capitalizedWords.push(capitalizedWord);
    }
  }
  // Return the array containing the capitalized words
  return capitalizedWords;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car', 'Taco', 'Banana']
console.log(capitalizeFirst(["rome", "t", "cairo"])); // ['rome', 't', 'cairo']
console.log(capitalizeFirst(["kylie", "britney", "jennifer"])); // ['kylie', 'britney', 'jennifer']
