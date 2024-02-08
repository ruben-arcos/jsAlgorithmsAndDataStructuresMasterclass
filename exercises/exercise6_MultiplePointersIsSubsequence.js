/**
Multiple Pointers - isSubsequence

Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/

function isSubsequence(sub, word) {
  // Initialize pointers for the first and second strings.
  let firstStr = 0;
  let secondStr = 0;

  // Continue looping until we reach the end of either the 'sub' or 'word' string.
  while (firstStr < sub.length && secondStr < word.length) {
    // Check if the current character in 'sub' is equal to the current character in 'word'.
    if (sub[firstStr] === word[secondStr]) {
      // If they match, move the pointer for the 'sub' string to the next character.
      firstStr++;
    }
    // Move the pointer for the 'word' string to the next character in any case.
    secondStr++;
  }
  // Check if we reached the end of the 'sub' string, meaning all characters were found in order.
  return firstStr === sub.length;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)

// BEST SOLUTIONS

// isSubsequence Solution - Iterative
function isSubsequence2(str1, str2) {
  // Initialize pointers for the first and second strings.
  var i = 0;
  var j = 0;

  // If str1 is an empty string, it is considered a subsequence of any string.
  if (!str1) {
    return true;
  }
  // Iterate through str2 until the end is reached.
  while (j < str2.length) {
    // Check if the current character in str2 matches the current character in str1.
    if (str2[j] === str1[i]) {
      // If there's a match, move the pointer for str1 to the next character.
      i++;
    }
    // Check if all characters in str1 have been found in order.
    if (i === str1.length) {
      // If so, str1 is a subsequence of str2.
      return true;
    }
    // Move the pointer for str2 to the next character.
    j++;
  }
  // If we reach this point, str1 is not a subsequence of str2.
  return false;
}

console.log(isSubsequence2("", "hello world")); // true
console.log(isSubsequence2("remembered", "remembrance")); // false
console.log(isSubsequence2("def", "deifying")); // true
console.log(isSubsequence2("abc", "acb")); // false (order matters)
console.log(isSubsequence2("t", "")); // false

// isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence3(str1, str2) {
  // Base case: if str1 is an empty string, it is considered a subsequence.
  if (str1.length === 0) return true;
  // Base case: if str2 is an empty string and str1 is not, str1 is not a subsequence.
  if (str2.length === 0) return false;
  // Check if the current characters in str1 and str2 match.
  if (str2[0] === str1[0]) {
    // If there's a match, recursively call isSubsequence with the remaining substrings.
    return isSubsequence(str1.slice(1), str2.slice(1));
  }
  // If the current characters don't match, recursively call isSubsequence with str2 excluding the current character.
  return isSubsequence(str1, str2.slice(1));
}

console.log(isSubsequence3("", "love and peace")); // true
console.log(isSubsequence3("palm", "psalm")); // true
console.log(isSubsequence3("caracas", "carcas")); // false
console.log(isSubsequence3("cat", "act")); // false (order matters)
console.log(isSubsequence3("t", "")); // false (order matters)