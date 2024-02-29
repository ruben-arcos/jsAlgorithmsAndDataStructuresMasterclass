/**
Frequency Counter / Multiple Pointers - areThereDuplicates
    *  Implement a function called, areThereDuplicates which accepts a variable number of
    arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern

 * Examples:
        * areThereDuplicates(1, 2, 3) // false
        * areThereDuplicates(1, 2, 2) // true 
        * areThereDuplicates('a', 'b', 'c', 'a') // true 

 * Restrictions:
    * Time - O(n)
    * Space - O(n)
    
 * Bonus:
    * Time - O(n log n)
    * Space - O(1)
    
 */

// Define a function called areThereDuplicates that accepts a variable number of arguments
function areThereDuplicates() {
    
    // Initialize an empty object to keep track of the frequency of each value
    let dupCounter = {};
    
    // Loop through each argument using the arguments object
    for (let i = 0; i < arguments.length; i++) {
        // Assign the current argument at index i to the variable val
        let val = arguments[i];
         // Check if the value already exists in dupCounter; if yes, increment, otherwise set to 1
        dupCounter[val] ? dupCounter[val] += 1 : dupCounter[val] = 1;
        
        // If the frequency of the current value is greater than 1, there are duplicates
        if (dupCounter[val] > 1) {
            // Return true indicating duplicates
            return true
        }
    }
    // If no duplicates are found, return false
    return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 


// Other solutions --> BEST SOLUTIONS

// areThereDuplicates Solution (Frequency Counter)
// Define a function called areThereDuplicates2 that accepts a variable number of arguments
// This solution uses the Frequency Counter pattern
function areThereDuplicates2() {

  // Initialize an empty object to keep track of the frequency of each value
  let collection = {}

  // Loop through each argument using the arguments object
  for(let val in arguments){
    // Assign the current argument value to the variable val
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  // Loop through the keys in the collection object
  for(let key in collection){
    // If the frequency of the current value is greater than 1, there are duplicates
    if(collection[key] > 1)  {
        // Return true indicating duplicates
        return true
    }
  }
 // If no duplicates are found, return false
  return false;
}

console.log(areThereDuplicates2(3, 4, 5)) // false
console.log(areThereDuplicates2(2, 7, 7)) // true 
console.log(areThereDuplicates2('l', 'm', 'r', 'm')) // true 


// areThereDuplicates Solution (Multiple Pointers)

// Define a function called areThereDuplicates3 that accepts a variable number of arguments
function areThereDuplicates3(...args) {

  // Sort the arguments array in ascending order
  args.sort((a, b) => {

    // Compare two elements a and b and return -1, 1, or 0 based on their relationship
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

 // Initialize pointers for comparison
  let start = 0;
  let next = 1;

  // Iterate through the sorted arguments array
  while (next < args.length) {
    // If the current and next elements are equal, there are duplicates
    if (args[start] === args[next]) {
      // Return true indicating duplicates
      return true;
    }
    // Move the pointers to the next pair of elements
    start++;
    next++;
  }
  // If no duplicates are found, return false
  return false;
}

console.log(areThereDuplicates3(6, 7, 8)) // false
console.log(areThereDuplicates3(6, 9, 9)) // true 
console.log(areThereDuplicates3('a', 't', 'a', 'h')) // true 


// areThereDuplicates One Liner Solution

// Define a function called areThereDuplicates4 that uses a one-liner solution
function areThereDuplicates4() {
  // Create a new Set from the arguments, which automatically removes duplicates
  // Compare the size of the Set to the length of the original arguments
  // If the sizes are different, it means there are duplicates
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates4(9, 4, 7)) // false
console.log(areThereDuplicates4(5, 1, 1)) // true 
console.log(areThereDuplicates4('u', 'v', 'e', 'v')) // true 