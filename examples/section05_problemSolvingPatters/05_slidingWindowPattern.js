// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array

function maxSubarraySum(arr, num) {
  if ( num > arr.length){
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i ++){
    temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    console.log(temp,max)
  }
  return max;
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))
console.log(maxSubarraySum([2, 6, 9, 2, 1, 2, 6, 9, 2, 1, 8, 5, 6, 3, 8, 5, 6, 3, 5,2], 20));

//  Refactor with the sliding window pattern

function maxSubarraySum2(arr, num){
  // Initialize variables to store the maximum sum and the current sum of the subarray
  let maxSum = 0;
  let tempSum = 0;

  // Check if the array is smaller than the specified subarray length
  if (arr.length < num) {
    // If it is, return null as it's not possible to find a subarray
    return null;
  }

  // Calculate the sum of the first subarray of length 'num'
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // Set the temporary sum to the calculated maximum sum
  tempSum = maxSum;
  // Iterate through the array starting from the position 'num'
  for (let i = num; i < arr.length; i++) {
    // Update the temporary sum by subtracting the first element of the previous subarray
    // and adding the next element from the current position
    tempSum = tempSum - arr[i - num] + arr[i];

    // Update the maximum sum by choosing the maximum value between the current maximum sum
    // and the newly calculated temporary sum
    maxSum = Math.max(maxSum, tempSum);
  }
  // Return the maximum sum found
  return maxSum;
}

console.log(maxSubarraySum2([2,6,9,2,1,8,5,6,3],3))
console.log(maxSubarraySum2([2, 6, 9, 2, 1, 2, 6, 9, 2, 1, 8, 5, 6, 3, 8, 5, 6, 3, 5,2], 5));