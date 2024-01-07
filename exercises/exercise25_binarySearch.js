/**
    Binary Search
        * Is a much faster form of search
        * rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
        * only works on sorted arrays
*/

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

console.log(states[25]);
console.log("Oregon");

/**
    Divide and Conquer
        Let's search for 15

        [1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19]
         left(1)          too small(11)          right(19)

        [12, 15, 16, 17, 18, 19]
        left(12)       too big(17)      right(19)

        [12, 15, 16]
        left(12)    15!     right(16)

    Only took three guesses with binary search instead of 9 in linear search
*/

// // write a function binarySearch that accepts a sorted array and a value
// function binarySearch(arr, val) {
//   // create a left pointer at the start of the array, and a right pointer at the end of the array
//   let left = 0;
//   let right = arr.length - 1;
//   let guess;
//   // while the left pointer comes before the right pointer:
//   while (left < right) {
//     // create a pointer in the middle
//     let sum = arr[left] + arr[right];

//     if (sum === val) {
//       // if you find the value you want, return the index
//       return [arr[left], arr[right]];
//       // if the value is too small, move the pointer up
//     } else if (sum < val) {
//       left++;
//     }
//     // if the value is too large, move the right pointer down
//     else {
//       right--;
//     }
//   }
// }

// console.log(binarySearch([1,2,3,4,5,6,7,8,9], 4))

function binarySearch(arr, elem) {
  // Initialize the pointers at the start and end of the array
  let start = 0;
  let end = arr.length - 1;

  // Continue the search until the pointers meet or cross
  while (start <= end) {
    // Find the middle index
    let middle = Math.floor((start + end) / 2);

    // Check if the element is at the middle index
    if (arr[middle] === elem) {
      // If found, return the middle index
      return middle;
      // If the value at the middle index is less than the target element,
    } else if (arr[middle] < elem) {
      // adjust the start pointer to search in the right half of the current range
      start++;
      // If the value at the middle index is greater than the target element,
    } else {
      // adjust the end pointer to search in the left half of the current range
      end--;
    }
  }
  // If the element is not in the array, return -1
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 12));

// solution 2

function binarySearch2(array, element) {
  // Start at the beginning of the array
  let start = 0;
  // End at the last element of the array
  let end = array.length - 1;
  // Find the middle index
  let middle = Math.floor((start + end) / 2);

  // Keep searching until the pointers meet or cross
  while (array[middle] !== element && start <= end) {
    // If the target element is less than the middle element, adjust the end pointer
    if (element < array[middle]) {
      end = middle - 1;
    } else {
      // If the target element is greater, adjust the start pointer
      start = middle + 1;
    }
    // Recalculate the middle index based on the new pointers
    middle = Math.floor((start + end) / 2);
  }
  // Check if the element was found at the current middle index
  if (array[middle] === element) {
    // If found, return the index
    return middle;
  }
  // If the element is not in the array, return -1
  return -1;
}

console.log(binarySearch2([2, 5, 6, 9, 13, 15, 28, 30], 15));
console.log(binarySearch2([2, 5, 6, 9, 13, 15, 28, 30], 50));
console.log(binarySearch2([2, 5, 6, 9, 13, 15, 28, 30], 30));

// shorter version of solution 2
function binarySearch3(array, element) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (array[middle] !== element && start <= end) {
    if (element < array[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return array[middle] === element ? middle : -1;
}

console.log(binarySearch3([2, 5, 6, 9, 13, 15, 28, 30], 400));
console.log(binarySearch3([2, 5, 6, 9, 13, 15, 28, 30], 6));
