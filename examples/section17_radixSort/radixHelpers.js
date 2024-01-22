/**
    Radix Sort Helpers
        * In order to implement radix sort, it's helpful 
          to build a few helper functions first:

        getDigit(num, place) - returns the digit in num at 
        the given place value

        console.log(getDigit(12345, 0)) // 5
        console.log(getDigit(12345, 1)) // 4
        console.log(getDigit(12345, 2)) // 3
        console.log(getDigit(12345, 3)) // 2
        console.log(getDigit(12345, 4)) // 1
        console.log(getDigit(12345, 5)) // 0
*/

// Helper function to get the digit at the given place value

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log(getDigit(7323, 2)); // 3

/* 
    getDigit(7323, 2)
                   1. 300, so in the context of this is 300
                   2. We are gonna divide it by 100, because
                   Math.pow(10, 2) returns 100, because
                   10² = 10 * 10 = 100
                   3. 7323 / 100 = 73.23
                   4. Next we floor it to grt rid of decimal so we 
                       get 73.
                   5. 73 % 3 = 3, because 73/7 = 7, and the
                       remainder is 3

    * Math.abs() function in JavaScript is used to return the 
      absolute (non-negative) value of a number. If the 
      number is positive or zero, it remains unchanged. If 
      the number is negative, it returns the positive 
      equivalent

    * For example:
        * Math.abs(-5); // Returns 5
        * Math.abs(3);  // Returns 3
        * Math.abs(0);  // Returns 0

    * The Math.pow() function in JavaScript is used to raise a 
       base number to the power of an exponent. It returns the 
       result of the base raised to the power of the exponent.
    
    For example:
        * Math.pow(2, 3); // Returns 8, because 2^3 = 2 * 2 * 2 = 8
        * Math.pow(10, 2); // Returns 100, because 10^2 = 10 * 10 = 100
*/

// Helper function to find how many digits are in a number

// 1. Digit count for a single number

function digitCount(num) {
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(0)); // 1
console.log(digitCount(1)); // 1
console.log(digitCount(25)); // 2
console.log(digitCount(314)); // 3

/*************************************************************************************
    digitCount(num) - returns the number of digits in num
     * Math.log10 = 10 to what power give us a number
         * EXAMPLE 1: 
            - Math.log10(423) = 2.626340367375043, taking 
              the floor gives us 2.
            - Since the floor of Math.log10 gives us the integer 
              part of the logarithm, it effectively indicates the 
              count of digits minus 1.
            - Adding 1 to the result (2 + 1) gives us the correct 
              count of digits, which is 3.

         * EXAMPLE 2:
            - Math.log10(21388) = 4.330170175428303,
              floor it, we get 4
            - add 1 = 5 digits
    * If we do Math.log10(0) = negative infinity, so it is
      imperative to add this special case  
            if (num === 0) {
                return 1
            }
*/

// 2. Given an array of numbers, returns the numbers of digits in the largest numbers in the list

function mostDigits(nums) {
    let maxDigits = 0;

    for (let i = 0; i < nums.length; i++) {
        // Getting maxDigits to equal the maximum between the current value of max digits and digit count of nums i
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}

console.log(mostDigits([1234, 56, 78])); // 4
console.log(mostDigits([1, 1, 11111, 1])); // 5
console.log(mostDigits([12, 34, 56, 78])); // 2

/**
    * Math.max 
        * Pass in 2 numbers ex. Math.max(0, 12), it will always give you the
          largest number
 */