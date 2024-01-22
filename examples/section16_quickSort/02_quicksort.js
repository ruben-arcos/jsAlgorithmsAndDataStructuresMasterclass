/**
    Quicksort
        * Call the pivot helper on the array
        * When the helper returns to you the updated 
          pivot index, recursively call the pivot helper on 
          the subarray to the left of that index, and the
          subarray to the right of that index
        * Your base case occurs when you consider a 
          subarray with less than 2 elements
*/

// Version with ES2015 Syntax
function pivot(arr, start = 0, end = arr.length - 1) {
  // Define a function swap that takes 3 arguments: an array (arr), and two indices (idx1, idx2)
  const swap = (arr, idx1, idx2) => {
    // Swap the values at idx1 and idx2 in the array using destructuring assignment
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // Select the pivot element as the one at the starting index
  let pivot = arr[start];
  // Initialize a variable to keep track of where smaller elements should go
  let swapIdx = start;

  // Loop through the array starting from the second element
  for (let i = start + 1; i <= end; i++) {
    // If the current element is smaller than the pivot
    if (pivot > arr[i]) {
      // Increment swapIdx (move the swap index to the right)
      swapIdx++;

      // Swap the current element with the element at swapIdx
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot (element at start) with the element at swapIdx
  swap(arr, start, swapIdx);
  // Return the final position of the pivot in the rearranged array
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  // If there are elements to sort
  if (left < right) {
    // Find the position where the array should be split into two parts
    let pivotIndex = pivot(arr, left, right);

    // Sort the left side of the array
    quickSort(arr, left, pivotIndex - 1);
    // Sort the right side of the array
    quickSort(arr, pivotIndex + 1, right);
  }
  // Return the sorted array
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));

/**

    1. Initial Call:
   1.1. quickSort([4, 6, 9, 1, 2, 5, 3], left=0, right=6)
   1.2. Checks the base case: left < right, so it continues with the recursive calls.
   1.3. Calculates the pivotIndex using the pivot function.

   Left Subarray:
   1.4. Calls quickSort on the left side: quickSort([4, 1, 2, 3], left=0, right=2)
       1.4.1. Checks the base case: left < right, so it continues with the recursive calls.
       1.4.2. Calculates the pivotIndex using the pivot function.
       1.4.3. Calls quickSort on the left side: quickSort([1, 2, 3], left=0, right=1)
           * Checks the base case: left < right, so it continues with the recursive calls.
           * Calculates the pivotIndex using the pivot function.
           * Calls quickSort on the left side: quickSort([1], left=0, right=0)
               * Base Case: left == right, so returns [1].
           * Calls quickSort on the right side: quickSort([], left=2, right=1)
               * Base Case: left > right, so no recursive calls.
       1.4.4. Calls quickSort on the right side: quickSort([4], left=2, right=2)
           * Base Case: left == right, so returns [4].
       1.4.5. Merges [1], [2, 3], and [4] => [1, 2, 3, 4]

   Right Subarray:
   1.5. Calls quickSort on the right side: quickSort([6, 9, 5], left=4, right=6)
       1.5.1. Checks the base case: left < right, so it continues with the recursive calls.
       1.5.2. Calculates the pivotIndex using the pivot function.
       1.5.3. Calls quickSort on the left side: quickSort([5], left=4, right=4)
           * Base Case: left == right, so returns [5].
       1.5.4. Calls quickSort on the right side: quickSort([6, 9], left=6, right=6)
           * Base Case: left == right, so returns [6, 9].
       1.5.5. Merges [5], [6, 9], and [] => [5, 6, 9]

   1.6. Merges [1, 2, 3, 4], [5, 6, 9], and [] => [1, 2, 3, 4, 5, 6, 9]
*/
