function collectOddValues(arr) {
    // Initialize an empty array to store odd values
    let result = [];

    // Define a helper function that takes an array as input
    function helper(helperInput) {
        // Base case: if the input array is empty, return (stopping further recursion)
        if (helperInput.length === 0) {
            return;
        }

        // Check if the first element of the input array is odd
        if (helperInput[0] % 2 !== 0) {
            // If it's odd, push it to the result array
            result.push(helperInput[0]);
        }

        // Make a recursive call with the remaining elements of the input array (excluding the first element).
        helper(helperInput.slice(1));
    }

    // Call the helper function with the input array
    helper(arr);

    // Return the resulting array containing odd values
    return result;
}

// Call the collectOddValues function with an example array
console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));


/**
    Let's use an example to illustrate:

    Suppose the original array is [3, 7, 2, 8].

        1. The initial call to helper is with the array [3, 7, 2, 8].
        2. Inside helper, it checks if the first element (3) is odd and pushes it to the result array.
        3. It then makes a recursive call with the array [7, 2, 8], which is a new array created by excluding the first element (3).
        4. In this new call, the process continues with the array [7, 2, 8].
        5. Another recursive call is made with the array [2, 8].
        6. Further calls continue until the base case is reached with an empty array.
        
    At each step, the slice(1) method creates a new array without modifying the original array. So, 7 doesn't become [0]; rather, it is part of a new array [7, 2, 8]. The original array remains unchanged.
 */