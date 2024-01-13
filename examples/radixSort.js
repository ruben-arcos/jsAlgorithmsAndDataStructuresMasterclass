/**
    Radix Sort
        * Define a function that accepts list of numbers
        * Figure out how many digits the largest number has 
        * loop from k = 0 up to this largest number of digits
        * For each iteration of the loop:
                * Create buckets for each digit (0 to 9)
                * Place each number in the corresponding bucket 
                  based on its kth digit
        * Replace our existing array with values in our buckets, 
          starting with 0 and going up to 9
        * Return list at the end
*/

function getDigit(num, i) {
  // Example: getDigit(7323, 2)
  // 1. Take the absolute value: Math.abs(7323) => 7323
  // 2. Divide by 10 to the power of i: 7323 / 100 (10^2) => 73.23
  // 3. Floor it to remove decimals: Math.floor(73.23) => 73
  // 4. Get the last digit by taking % 10: 73 % 10 => 3
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  // Example: digitCount(7323)
  // 1. Take the absolute value: Math.abs(7323) => 7323
  // 2. Use Math.log10 to get the power of 10: Math.log10(7323) => 3.8633
  // 3. Add 1 to get the count of digits: Math.floor(3.8633) + 1 => 4
  return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;

  // Loop through each number in the array
  for (let i = 0; i < nums.length; i++) {
    // Update maxDigits with the maximum digit count
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  // Find the maximum number of digits in the array
  let maxDigitCount = mostDigits(nums);

  // Loop through each digit place (k)
  for (let k = 0; k < maxDigitCount; k++) {
    // Initialize buckets for each digit (0 to 9)
    let digitBuckets = Array.from({ length: 10 }, () => []);

    // Place each number in the corresponding bucket based on the kth digit
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }

    // Concatenate the buckets to get the partially sorted array
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([223, 1223, 12, 1, 45, 979, 3453]));

//   function radixSort(arr) {
//     const len = digitCount;
//     const max = mostDigits(arr)

//     for (let k = 0; k < mostDigits; k++) {
//         const buckets = Array[10].fill([])

//         for (let i = 0; i < digitCount; i++) {
//             buckets[getDigit(arr[i], k)].push(arr[i])
//         }
//         nums = [].concat(...buckets)
//     }
//     return arr
//   }
