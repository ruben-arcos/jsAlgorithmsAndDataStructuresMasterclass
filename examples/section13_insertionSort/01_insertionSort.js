/**
    InsertionSort
        * Start by picking the second element in the array
        * Now we compare it to the one before it and swap it if necessary 
        * Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
        * Repeat until the array is sorted
*/

// solution 1

function insertionSort(arr) {
  // Iterate through the array, starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // Store the current value to be compared and inserted
    let currentVal = arr[i];

    // Work backwards to find the correct position for currentVal
    // Make another loop to iterate from i - 1 to 0
    // For example, if we want to compare [1,2,9,76,4] with i(4), (76) will be at i - 1
    // The condition j >= 0 ensures we iterate until index 0, or it can also be written as j > -1
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // Shift elements to the right to make space for currentVal
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    // Place currentVal in its correct sorted position
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 7]));

// solution 2

// Function to perform Insertion Sort on an array
function insertionSort2(arr) {
  // Start iterating through the array, starting from the second element (index 1)
  for (let i = 1; i < arr.length; i++) {
    // Store the current value for comparison and insertion
    let currentVal = arr[i];
    // Initialize j to be one less than i
    let j = i - 1;

    // Iterate backwards as long as j is not negative and the element at arr[j] is greater than currentVal
    while (j >= 0 && arr[j] > currentVal) {
      // Shift elements to the right to make space for currentVal
      arr[j + 1] = arr[j];
      // Move to the previous index for the next comparison
      j--;
    }
    // Place currentVal in its correct sorted position in the array
    arr[j + 1] = currentVal;
  }
  // Return the sorted array
  return arr;
}

console.log(insertionSort2([9, 3, 45, 0, 18, 2, 36, 1, 27]));
