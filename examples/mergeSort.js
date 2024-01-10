/**
 * mergeSort
 * Break up the array into halves until you have arrays that are empty or have one element
 * Onve you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
 * Once the array has been merged back together, return the merged (and sorted) array
 */

// Merges two sorted arrays, arr1 and arr2, into a single sorted array
function merge(arr1, arr2) {
  // Initialize an empty array to store the merged result
  let results = [];
  // Initialize pointers for arr1 and arr2
  let i = 0;
  let j = 0;

  // Compare elements at the current indices of arr1 and arr2
  while (i < arr1.length && j < arr2.length) {
    // If the element in arr2 is greater, push arr1's element and increment i
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
      // If the element in arr1 is greater, push arr2's element and increment j
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  // Handle remaining elements in arr1 (if any)
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  // Handle remaining elements in arr2 (if any)
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  // Return the merged and sorted array
  return results;
}

// Recursively sorts and merges the elements of the input array
function mergeSort(array) {
  // Base case: if the array has one or fewer elements, return the array
  if (array.length <= 1) {
    return array;
  }

  // Calculate the midpoint of the array
  let midPoint = Math.floor(array.length / 2);
  // Recursively sort the left and right halves of the array
  let leftSide = mergeSort(array.slice(0, midPoint));
  let rigthSide = mergeSort(array.slice(midPoint));

  // Merge the sorted left and right halves
  return merge(leftSide, rigthSide);
}

console.log(mergeSort([10, 24, 76, 72, 1, 9]));



