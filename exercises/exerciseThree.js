/**
Frequency Counter - sameFrequency
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 * 
 * Your solution MUST have the following complexities:
        * Time: O(N)
        * Sample Input:
                * sameFrequency(182,281) // true
                * sameFrequency(34,14) // false
                * sameFrequency(3589578, 5879385) // true
                * sameFrequency(22,222) // false
 * 
 */

function sameFrequency(val1, val2){

    // Convert the integers to strings
    const str1 = val1.toString();
    const str2 = val2.toString();
    
    // Check if the string representations have different lengths
    if(str1.length !== str2.length) {
        return false;
    }
    
    // Create a frequency counter object
    const frequencyCounter = {};
    
    // Count the frequency of digits in the first number
    for (let i = 0; i < str1.length; i++) {
        let nums = str1[i];
                // If the digit is already in the frequencyCounter object, increment its count; otherwise, set its count to 1
        frequencyCounter[nums] ? frequencyCounter[nums] += 1 : frequencyCounter[nums] = 1;
    }
    
    // Check the frequency of digits in the second number
    for (let i = 0; i < str2.length; i++) {
        let nums = str2[i];
        // If the digit is not in the lookup object, return false; otherwise, decrement its count
        if(!frequencyCounter[nums]) {
            return false
        } else {
            frequencyCounter[nums] -= 1;
        }
    }
    // If all digits have the same frequency, return true
    return true;
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false

// solution 2 --> BEST SOLUTION

function sameFrequency2(num1, num2){

    // Convert the numbers to strings
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();

    // Check if the string representations have different lengths
    if(strNum1.length !== strNum2.length) return false;
    
    // Create frequency counters for each digit in both numbers
    let countNum1 = {};
    let countNum2 = {};
    
    // Count the frequency of digits in the first number
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    // Count the frequency of digits in the second number
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    // Compare the frequency counters for each digit
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   // If all digits have the same frequency, return true
    return true;
  }

  console.log(sameFrequency2(182,282)) // true
  console.log(sameFrequency2(14,14)) // false
  console.log(sameFrequency2(3559578, 5879385)) // true
  console.log(sameFrequency2(22,22)) // false