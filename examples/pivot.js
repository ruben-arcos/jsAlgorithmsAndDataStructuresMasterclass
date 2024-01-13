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
