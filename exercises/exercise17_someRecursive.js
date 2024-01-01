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

const isOdd = val => val % 2 !== 0;

// Write a recursive function called someRecursive which accepts an array and a callback
function someRecursive(arr, callback) {
    // Base case: return false if array is empty
    if (arr.length === 0) {
        return false
    }
    // The function returns true if a single value in the array returns true when passed to the callback
    if(callback(arr.pop())) {
        return true
    }
    // Recursevely 
    return someRecursive(arr, callback)
}

console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOfalsedd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)); // false

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