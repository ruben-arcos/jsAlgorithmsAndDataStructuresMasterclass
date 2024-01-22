/**
    mergeSort
        * Create an empty array, take a look at the smallest values in each input array
        * While there are still values we haven't looked at..
            * If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
            * If the value in the fist array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array 
*/

// Define a function named mergeSort that takes two arrays as parameters
function mergeArrays(array1, array2) {
  // Initialize an empty array to store the sorted result
  let sortedArray = [];
  // Initialize indices for array1 and array2
  let i = 0;
  let j = 0;

  // Use a while loop to iterate through both arrays until one is exhausted
  while (i < array1.length && j < array2.length) {
    // Compare elements at the current indices of array1 and array2
    // Push the smaller element into sortedArray
    // Increment the respective index
    if (array1[i] < array2[j]) {
      sortedArray.push(array1[i]);
      i++;
    } else {
      sortedArray.push(array2[j]);
      j++;
    }
  }

  // Handle remaining elements in array1 (if any)
  while (i < array1.length) {
    // Push the remaining elements from array1 into sortedArray
    // Increment the index
    sortedArray.push(array1[i]);
    i++;
  }

  // Handle remaining elements in array2 (if any)
  while (j < array2.length) {
    // Push the remaining elements from array2 into sortedArray
    // Increment the index
    sortedArray.push(array2[j]);
    j++;
  }
  // Return the final sortedArray
  return sortedArray;
}

// Call the mergeSort function
console.log(mergeArrays([1, 10, 50], [2, 14, 99, 100]));
