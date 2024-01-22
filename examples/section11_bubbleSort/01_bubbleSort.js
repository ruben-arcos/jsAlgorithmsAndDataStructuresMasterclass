/**
 * start looping from with a variable called i the end of the array towards the beginning
 * Start an inner loop with a variable called j from the beginnng until i -1
 * if arr[j] is greater than[j + 1], swap those two values
 * return the sorted array
*/

// solution 1
const bubbleSort = (arr) => {
    for ( let i = arr.length - 1; i > 0; i-- ) {
        for ( let j = 0; j < i; j++ ) {
            console.log(arr, arr[j], arr[j+1])
            if ( arr[ j ] > arr[ j + 1 ] ) {
                let temp = arr[ j ];
                arr[ j ] = arr[ j + 1 ]
                arr[ j + 1 ] = temp
            }
        }
        console.log("one pass complete")
    }
    return arr
}

console.log(bubbleSort([37,45,29,8]))

// solution 2
function bubbleSort2 (arr) {
    // Temporary variable for swapping
    let temp;

    // Outer loop - iterates from the end of the array towards the beginning
    for (let i = arr.length; i > 0; i--) {
        // Inner loop - iterates from the beginning up to i (exclusive)
        for (let j = 0; j < i - 1; j++) {
            // Compare adjacent elements in the array
            if (arr[j] > arr[j+1]) {
                 // Store the value at arr[j] in the temporary variable temp
                temp = arr[j]
                // Assign the value at arr[j + 1] to arr[j]
                arr[j] = arr[j+1]
                // Assign the value stored in temp to arr[j + 1]
                arr[j+1] = temp
                // Swap the elements at indices j and j + 1
            }
        }
    }
    // Return the sorted array
    return arr
}

console.log(bubbleSort2([5,85,6]))
console.log(bubbleSort2([5,85, -10,0,6]))

// ES2015 solution
function bubbleSort3(arr) {
    // Helper function to swap elements at given indices in the array
    const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]] 
    };

    // Outer loop - iterates from the end of the array towards the beginning
    for ( let i = arr.length; i > -0; i-- ) {
         // Inner loop - iterates from the beginning up to i (exclusive)
        for ( let j = 0; j < i - 1; j++ ) {
            // Compare adjacent elements in the array
            if (arr[ j ] > arr[ j+1 ]) {
                // If the current element is greater than the next one, perform a swap
                swap( arr, j, j+1)
            }
        }
    }
    // Return the sorted array
    return arr
}

console.log(bubbleSort3([8,12,29,-3,37,45,88]))

// Bubble sort optimization with no swaps
function bubbleSortOptimized(arr) {
    // Variable to track whether any swaps occurred in the inner loop
    let noSwaps;

    // Outer loop - iterates from the end of the array towards the beginning
    for (let i = arr.length; i > 0; i--) {
        // Assume no swaps have occurred at the beginning of each pass
        noSwaps = true;
        // Inner loop - iterates from the beginning up to i (exclusive)
        for (let j = 0; j < i - 1; j++) {
            // Compare adjacent elements in the array
            if(arr[j] > arr[j+ 1]) {
                // If the current element is greater than the next one, perform a swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                // Since a swap occurred, set noSwaps to false
                noSwaps = false;
            }
        }
         // If no swaps occurred in the entire inner loop, the array is already sorted
        if(noSwaps) break;
    }
    // Return the sorted array
    return arr
}

console.log(bubbleSortOptimized([8,1,2,3,4,5,6,7]))
