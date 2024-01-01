/**
    someRecursive

        Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

        Examples:

        const isOdd = val => val % 2 !== 0;

        someRecursive([1,2,3,4], isOdd) // true
        someRecursive([4,6,8,9], isOfalsedd) // true
        someRecursive([4,6,8], isOdd) // false
        someRecursive([4,6,8], val => val > 10); // false

*/

const isOdd = (val) => val % 2 !== 0;

// Write a recursive function called someRecursive which accepts an array and a callback
function someRecursive(arr, callback) {
  // Base case: return false if array is empty
  if (arr.length === 0) {
    return false;
  }
  // The function returns true if a single value in the array returns true when passed to the callback
  if (callback(arr.pop())) {
    return true;
  }
  // Recursevely
  return someRecursive(arr, callback);
}

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOfalsedd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false

/**
     * The behavior of .pop() is as follows:

        First Call:

            Array: [1, 2, 3]
            .pop() removes the last element (3) and returns it.
            Truthiness check: 3 is truthy, so the condition evaluates to true.
            Second Call:

            Array: [1, 2] (after the first call)
            .pop() removes the last element (2) and returns it.
            Truthiness check: 2 is truthy, so the condition evaluates to true.
            Third Call:

            Array: [1] (after the second call)
            .pop() removes the last element (1) and returns it.
            Truthiness check: 1 is truthy, so the condition evaluates to true.
            However, it's important to note that the behavior of .pop() is to modify the original array by removing its last element. If you run .pop() three times consecutively, the original array will be empty after the third call, and .pop() will return undefined.
*/

// Solution 2

function someRecursive(array, callback) {
  // Base case: if the array is empty, return false
  if (array.length === 0) {
    return false;
  }

  // Check if the first element satisfies the condition specified by the callback
  if (callback(array[0])) {
    // If it does, return true
    return true;
  }

  // Recursive case: call someRecursive with the remaining array and the same callback
  return someRecursive(array.slice(1), callback);
}

/**
    First Iteration:
        * Array: [2, 4, 6, 7, 8]
        * Checks if 2 satisfies the condition specified by callback. Since it doesn't, it moves to the recursive call.
        * The recursive call is made with the array [4, 6, 7, 8], effectively excluding the first element 2.

    Second Iteration:       
        * Array: [4, 6, 7, 8]
        * Checks if 4 satisfies the condition. Since it doesn't, it moves to the next recursive call.
        * The recursive call is made with the array [6, 7, 8], excluding the first element 4.

    Third Iteration:
        * Array: [6, 7, 8]
       *  Checks if 6 satisfies the condition. Since it doesn't, it moves to the next recursive call.
        * The recursive call is made with the array [7, 8], excluding the first element 6.

    Fourth Iteration:
        * Array: [7, 8]
        * Checks if 7 satisfies the condition. Since it does (7 is odd), it returns true immediately.
    
    Each iteration reduces the size of the array by excluding the first element and checks if the first element of the current array satisfies the condition. If it does, the function returns true; otherwise, it continues with the recursive call on a smaller array. This process repeats until it finds a satisfying element, reaches the base case (empty array), or exhausts the array without finding a satisfying element.
*/
