/**
  DIVIDE AND CONQUER 

    * This algorithmic paradigm involves dividing a problem into subproblems of the same type, solving them independently, and then combining their solutions to solve the original problem.
    * Binary search is an example of the Divide and Conquer approach where the data set is divided into smaller chunks, specifically in half, and the process is repeated on a subset of the data.
    * This pattern can tremendously decrease time complexity
 */    

// A naive solution
// Linear search
// Time complexity O(N)

// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

function search(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

console.log(search([1,2,3,4,5,6], 4))
console.log(search([1,2,3,4,5,6], 6))
console.log(search([1,2,3,4,5,6], 11))

// Refactor
// Time complexity - Log(N) - Binary search

function search2(array, val) {
    let min =0;
    let max = array.length -1;

    while (min <= max) {
        let middle = Math.floor((min + max) /2);
        let currentElement = array[middle];

        if (array[middle] < val) {
            min = middle + 1;
        } else if (array[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

console.log(search2([1,2,3,4,5,6], 4))
console.log(search2([1,2,3,4,5,6], 6))
console.log(search2([1,2,3,4,5,6], 11))