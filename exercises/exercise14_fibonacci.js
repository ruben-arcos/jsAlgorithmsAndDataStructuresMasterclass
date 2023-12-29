/**
    Fibonacci

        Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

        Examples:
          fib(4) // 3
          fib(10) // 55
          fib(28) // 317811
          fib(35) // 9227465
*/

function fib(num) {
    // Base case: if num is 0, return num
  if (num === 0) {
    return 0;
  }
   // Base case: if num is 1, return 1
  if (num === 1) {
    return 1
  }
// Calculate the next Fibonacci number by recursively adding the last two numbers
  return fib(num - 1) + fib(num - 2)
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465

// Solution 2

function fib2(num) {
    // Base case: if num is less than or equal to 2, return 1
    if (num <= 2) {
        return 1
    }
    // Recursive step to calculate the next Fibonacci number
    return fib(num - 1) + fib(num - 2)
}

console.log(fib2(5)); // 5
console.log(fib2(11)); // 89
console.log(fib2(29)); // 514229
console.log(fib2(34)); // 5702887

// Solution 3

function fib3(num) {
    // Base case: if num is 0 or 1, return num
    if (num < 1) {
        return num
    }

    // Initialize an array to store Fibonacci values, starting with the base cases
    let fibValues = [0, 1] 

    // This loop starts from index 2 and calculates Fibonacci numbers up to the specified index num
    for (let i = 2; i <= num; i++) {
        // Calculate the next Fibonacci number by adding the last two numbers in the array
        fibValues[i] = fibValues[i - 1] + fibValues[i - 2]
    }
    // Return the Fibonacci value at the specified index num
    return fibValues[num]
}

console.log(fib3(6)); // 8
console.log(fib3(12)); // 144
console.log(fib3(25)); // 75025
console.log(fib3(30)); // 832040