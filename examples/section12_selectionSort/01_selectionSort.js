/**
selectionSort

    * Time complexity O(n^2), not too efficient 
    * As the length of the array grows, the number of comparisons grows roughly at the rate of n times n and squared
    * The first time through we make six comparisons, then five, then four and then three and so on
    * Where selection sort potentially is better than something like bubble sort is if you want to minimize the number of swaps that you're making
    * On selection sort, we iterate, we compare, but we only make one swap at the end of each loop.
*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // store the first element as the smallest value you've seen so far
    let lowest = i;

    // compare this item to the next item in the array until you find a smaller number
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        // if a smaller number is found, designate that smaller number to be then new 'minimum' and continue until the end or the aarray
        lowest = j;
      }
      // if the 'minimum' is not the value (index) you initially began with, swap the two values
    }
    if (i !== lowest) {
      console.log("*********************************");
      console.log(arr);
      console.log("SWAPPING TO:");
      // Swap the values at indices i and lowest
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;

      console.log(arr);
      console.log("*********************************");
    }
    // Repeat this with the next element until the array is sorted
  }
  return arr;
}

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));

// ES2015 solution

function selectionSort2(arr) {
    // Define a swap function that takes an array and two indices, and swaps the elements at those indices
    const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])

    // Iterate through each element in the array for sorting
    for (let i = 0; i < arr.length; i++) {
        // Assume the current index is the lowest (for now)
        let lowest = i;

        // Iterate through the rest of the array to find the index of the smallest element
        for (let j = i + 1; j < arr.length; j++) {
            // If a smaller element is found, update the lowest index
            if(arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        // If the current index is not the same as the found lowest index, perform a swap
        if (i !== lowest) swap(arr, i, lowest)
    
    }
    // Return the sorted array
    return arr
}

console.log(selectionSort2([0, 1, 12, 34, 22, 10, 19, 17]));
