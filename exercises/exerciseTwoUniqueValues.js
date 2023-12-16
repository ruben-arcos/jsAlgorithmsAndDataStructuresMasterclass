/**
Multiple Pointers - countUniqueValues
    * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
 * 
 * Sample input
        * countUniqueValues([1,1,1,1,1,2]) // 2
        * countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
        * countUniqueValues([]) // 0
        * countUniqueValues([-2,-1,-1,0,1]) // 4
        
 * Time Complexity - O(n)
 * Space Complexity - O(n)

 * Bonus
    * You must do this with constant or O(1) space and O(n) time.
*/

// Function to count the number of unique values in an array
function countUniqueValues(arr) {

    // Initialize a count variable to keep track of unique values
    let count = 0;
  
    // Loop through the array with the first pointer (i)
    for (let i = 0; i < arr.length; i++) {
      // Assume the current value is unique until proven otherwise
      let unique = true;
  
      // Loop through the array with the second pointer (j) starting from i + 1
      for (let j = i + 1; j < arr.length; j++) {
        // Check if the value at index i is equal to the value at index j
        if (arr[i] === arr[j]) {
         // If equal, the value is not unique
          unique = false;
        }
      }
      // If the value is unique, increment the count
      if (unique) {
        count++;
      }
    }
    // Return the count of unique values
    return count;
  }
  
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));


// Other Solution --> Best approach

// Function to count the number of unique values in an array
function countUniqueValues2(arr){

    // Check if the array is empty, in which case there are no unique values
    if(arr.length === 0) return 0;

    // Initialize a pointer i to keep track of unique values
    var i = 0;

    // Loop through the array starting from index 1 with another pointer j
    for(var j = 1; j < arr.length; j++){
        // Check if the current value at index i is not equal to the value at index j
        if(arr[i] !== arr[j]){
            // Move the pointer i to the next position
            i++;
            // Update the value at the new position i with the value at index j
            arr[i] = arr[j]
        }
    }

    // Return the count of unique values, which is the value of i plus 1
    return i + 1;
}

console.log(countUniqueValues2([1,2,2,5,7,7,99]))
