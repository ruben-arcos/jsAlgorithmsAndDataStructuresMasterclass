/**
    pivot
        * Write
        * In order to implement merge sort, it's useful to first implement a function 
          responsible arranging elements in an array on etiher side of a pivot
        * Given an array, this helper function should designate an element as the pivot
        * It should the rearrange elements in the array so that all values less than the 
          pivot are moved to the left of the pivot, and all values greater than the pivot 
          are moved to the right of the pivot
        * The order of elements on either side of the pivot doesn't matter
        * The helper should do this in place, that is, it shoukd not create a new array
        * When complete, the helper should return the index of the pivot
    
    Picking a pivot
        * The runtime of quick sort depends in part on how one selects the pivot
        *  Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
        * For simplicity, we'll always choose the pivot to be the first element 
    
    Pivot pseudocode
       * Write a function pivot or partition. It will accept three arguments: an array, a start index, 
         and an end index (these can default to 0 and the array length minus 1, respectively)
       * Grab the pivot from start of the array
       *  Store the current pivot index in a variable (this will keep track of where the pivot should end up)
       * Loop through the array from the start until the end
            * If the pivot is greater than the current element, increment the pivot index variable and then
              swap the current element with the element at the pivot index 
       * Swap the starting element (i.e. the pivot) with the pivot index
       * Return the pivot index
        
*/

// My solution
function pivot(array, startIndex = 0, endIndex = array.length - 1) {
  // Select the pivot element as the one at the starting index
  let pivot = array[startIndex];
  // Initialize currentIndex to the starting index
  let currentIndex = startIndex;

  // Iterate through the array from startIndex + 1 to endIndex
  for (let i = startIndex + 1; i <= endIndex; i++) {
    // If the current element is less than the pivot
    if (array[i] < pivot) {
      // Increment currentIndex
      currentIndex++;

      // Swap the current element with the element at currentIndex
      let temp = array[i];
      array[i] = array[currentIndex];
      array[currentIndex] = temp;
    }

    // Swap the pivot (element at startIndex) with the element at currentIndex
    let temp = array[startIndex];
    array[startIndex] = array[currentIndex];
    array[currentIndex] = temp;
  }
  return currentIndex;
}

// Return the final position of the pivot in the rearranged array
console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

// Best solutions

// First version

function pivot2(arr, start = 0, end = arr.length + 1) {
  // Define a swap function to interchange elements at two indices in an array
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  // Select the pivot element as the one at the starting index
  let pivot = arr[start];
  // Initialize swapIdx to the starting index
  let swapIdx = start;

  // Iterate through the array from start + 1 to the end
  for (let i = start + 1; i < arr.length; i++) {
    // If the current element is less than the pivot
    if (pivot > arr[i]) {
      // Increment swapIdx
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

console.log(pivot2([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));

// Version with ES2015 Syntax
function pivot3(arr, start = 0, end = arr.length - 1) {
  // Define a function swap that takes 3 arguments: an array (arr), and two indices (idx1, idx2)
  const swap = (arr, idx1, idx2) => {
    // Swap the values at idx1 and idx2 in the array using destructuring assignment
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  // Select the pivot element as the one at the starting index
  let pivot = arr[start];
  // Initialize swapIdx to the starting index
  let swapIdx = start;

  // Iterate through the array from start + 1 to the end
  for (let i = start + 1; i <= end; i++) {
    // If the current element is less than the pivot
    if (pivot > arr[i]) {
      // Increment swapIdx
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

console.log(pivot3([9, 5, 3, 7, 2, 1, 8, 4, 6]));
