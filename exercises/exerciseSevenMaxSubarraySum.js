/**
    Sliding Window - maxSubarraySum

    Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

    *** Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
    
    Examples
        * maxSubarraySum([100,200,300,400], 2) // 700
        * maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
        * maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
        * maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
        *  maxSubarraySum([2,3], 3) // null
    
    Constraints:
        * Time Complexity - O(N)
        * Space Complexity - O(1)
*/

function maxSubarraySum(arr, num) {
  // Initialize variables to track the maximum sum and a temporary sum.
  let maxSum = 0;
  let tempSum = 0;

  // Check if the array length is less than the specified number.
  if (arr.length < num) {
    // If so, it's not possible to find a subarray of the given size
    return null;
  }
  // Calculate the sum of the first 'num' elements in the array.
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  // Set the temporary sum to the initial maxSum value.
  tempSum = maxSum;

  // Iterate through the array starting from index 'num'.
  for (let i = num; i < arr.length; i++) {
    // Update the temporary sum by subtracting the first element of the previous subarray
    // and adding the next element (sliding window technique).
    tempSum = tempSum - arr[i - num] + arr[i];
    // Update the maximum sum by choosing the maximum value between maxSum and tempSum.
    maxSum = Math.max(maxSum, tempSum);
  }
  // Return the maximum sum found in any subarray of size 'num'.
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
