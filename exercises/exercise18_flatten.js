/**
    flatten
        Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

        Examples:

            flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
            flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
            flatten([[1],[2],[3]]) // [1,2,3]
            flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
*/

function flatten(arr) {

    // This line declares a function named flatten that takes an array arr as a parameter.
    let flattenedArray = [];
    
    // Initialize an empty array called flattenedArray to store the flattened elements.
    for (let i = 0; i < arr.length; i++) {
    
    // Start a loop that iterates through each element in the input array arr.
    if (Array.isArray(arr[i])) {
    
    // Check if the current element at index i is an array.
    flattenedArray = flattenedArray.concat(flatten(arr[i]));
    
    // If the element is an array, recursively call the flatten function on that array (arr[i]).
    // Concatenate the flattened result to the existing flattenedArray.
    // This line is crucial for handling nested arrays and ensuring the function works recursively.
    } else {
    
    // If the current element is not an array (i.e., it's a single value),
    flattenedArray.push(arr[i]); // adds that element to the flattenedArray
    }
    
    // Close the if-else block.
    }
    
    // Close the for loop.
    return flattenedArray;
     // Return the final flattened array after processing all elements in the input array.
}
   

// Test cases
console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1, 2, 3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3]

