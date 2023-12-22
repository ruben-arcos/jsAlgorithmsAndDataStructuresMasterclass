/**
Sliding Window - findLongestSubstring

    Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

    Examples:

        findLongestSubstring('') // 0
        findLongestSubstring('rithmschool') // 7
        findLongestSubstring('thisisawesome') // 6
        findLongestSubstring('thecatinthehat') // 7
        findLongestSubstring('bbbbbb') // 1
        findLongestSubstring('longestsubstring') // 8
        findLongestSubstring('thisishowwedoit') // 6

    Time Complexity - O(n)
*/

function findLongestSubstring(str) {

    // initialize variables

    // Length of the longest substring
    let longest = 0;
    // Object to store the last seen index of each character
    let seen = {};
    // Start index of the current substring
    let start = 0;

    // Iterate through the string
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        // If the character is already seen, update the start index
        if(seen[char]) {
            start = Math.max(start, seen[char]);
        }
         // Update the length of the longest substring
        // index - beginning of substrings + 1 (to include the current character in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1
    }
    // Return the length of the longest substring
    return longest
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6