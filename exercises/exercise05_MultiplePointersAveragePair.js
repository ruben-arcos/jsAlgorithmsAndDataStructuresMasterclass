/**
 Multiple Pointers - averagePair
    * Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

* Bonus Constraints:
        * Time: O(N)
        * Space: O(1)
    
* Sample Input:
        * averagePair([1,2,3],2.5) // true
        * averagePair([1,3,3,5,6,7,10,12,19],8) // true
        * averagePair([-1,0,3,4,5,6], 4.1) // false
        * averagePair([],4) // false
*/

// Function to check if there is a pair of numbers in the sorted array 'arr'
// whose average is equal to the given value 'val'.
function averagePair(arr, val) {
  // Initialize the starting index of the array.
  let start = 0;
  // Initialize the ending index of the array.
  let end = arr.length - 1;

  // Continue the loop until the starting index is less than the ending index.
  while (start < end) {
    // Calculate the average of the current pair of numbers.
    let avg = (arr[start] + arr[end]) / 2;
    // Check if the average is equal to the given value.
    if (avg === val) {
      // If true, return true, indicating the presence of such a pair.
      return true;
    }

    // If the average is less than the given value, move the starting index to the right.
    if (avg < val) {
      start++;
      // If the average is greater than the given value, move the ending index to the left.
    } else {
      end--;
    }
  }
  // If no such pair is found, return false.
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
