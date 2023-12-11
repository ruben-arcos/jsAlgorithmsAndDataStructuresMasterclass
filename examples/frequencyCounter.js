/**
 * FREQUENCY COUNTERS
    * This pattern uses objects or sets to collect values/frequencies of values
        * Useful in algorithms and challenges when you have multiple pieces of data, multiple inputs, and you need to compare them to see if they consist of similar values
        * If they are anagrams of one another
        * if a value is contained inside of another value
    * This can often avoid the need for nested loops or O(N^2) operations with arrays/strings
 * 
 */

// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// NAIVE SOLUTION

// Function to check if two arrays are the same when each element in the first array is squared
function same(arr1, arr2){
    // Check if the arrays have different lengths
    // If the two arrays have different lengths, return false
    if(arr1.length !== arr2.length){
        return false;
    }
    // Iterate through each element in the first array
    for(let i = 0; i < arr1.length; i++){
        // Find the index of the squared element in the second array
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        // If the squared element is not found in the second array, arrays are not the same
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        // Remove the found element from the second array
        arr2.splice(correctIndex,1)
    }
    // If all elements are squared and found in the second array, arrays are the same
    return true;
}

console.log(same([1,2,3,2], [9,1,4,4])) // true
console.log(same([1,2,3], [1,9])) // false
console.log(same([1,2,1], [4,4, 1])) // false (must be the same frequency)


// REFRACTORED SOLUTION --> best solution

function same2(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

console.log(same2([1,2,3,2,5], [9,1,4,4,11]))
