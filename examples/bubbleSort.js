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
    let temp;

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort2([5,85,6]))
console.log(bubbleSort2([5,85, -10,0,6]))

// ES2015 solution
function bubbleSort3(arr) {
    const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]] 
    };

    for ( let i = arr.length; i > -0; i-- ) {
        for ( let j = 0; j < i - 1; j++ ) {
            if (arr[ j ] > arr[ j+1 ]) {
                swap( arr, j, j+1)
            }
        }
    }
    return arr
}

console.log(bubbleSort3([8,12,29,-3,37,45,88]))
