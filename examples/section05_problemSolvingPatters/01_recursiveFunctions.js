// EXAMPLE ONE

// Recursive Version

// This line declares a function named countDown that takes one parameter num.
function countDown(num) {
  // This line checks if the value of num is less than or equal to 0.
  // If true, it prints "All done!" to the console and returns from the function, effectively ending the recursive calls.
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  // If the conditional check in the previous step is not met, it prints the current value of num to the console.
  console.log(num);
  //   Decrements the value of num by 1.
  num--;
  //   This line recursively calls the countDown function with the decremented value of num.
  countDown(num);
}

// This line calls the countDown function with the initial argument 3.
countDown(3);
/**
Now, let's see how the recursive calls unfold for countDown(3):

    * countDown(3) prints 3 to the console and calls countDown(2)
        * countDown(2) prints 2 to the console and calls countDown(1)
            * countDown(1) prints 1 to the console and calls countDown(0)
                * countDown(0) prints "All done!" and returns, ending the recursive calls.
                
So, when you run countDown(3), the output will be:
    3
    2
    1
    All done!
*/

// Iterative Version
function countDown2(num) {
  // This line initializes a variable i with the value of num.
  // The loop continues as long as i is greater than 0.
  // In each iteration, i is decremented by 1 (i--).
  for (let i = num; i > 0; i--) {
    // In each iteration of the loop, it prints the current value of i to the console.
    console.log(i);
  }
  // After the loop completes, it prints "All done!" to the console.
  console.log("All done!");
}

countDown2(3)

/**
Now, let's see how the loop unfolds for countDown(3):

    * Iteration 1: i = 3, prints 3 to the console.
    * Iteration 2: i = 2, prints 2 to the console.
    * Iteration 3: i = 1, prints 1 to the console.
    * Iteration 4: Loop condition (i > 0) is not met, exits the loop.
    * Prints "All done!" to the console.

So, when you run countDown(3), the output will be:
    3
    2
    1
    All done!
*/

// EXAMPLE TWO

// FUNCTION DECLARATION

// This line declares a function named sumRange that takes one parameter num.
function sumRange(num) {
  // CONDITIONAL STATEMENT

  // This line checks if the value of num is equal to 1.
  // If num is equal to 1, the function immediately returns 1.
  // This is the base case of the recursive function, providing a stopping condition.
  if (num === 1) return 1;

  // RECURSIVE CALL
  // If the base case is not met (i.e., num is not 1), this line recursively calls the sumRange function with the argument num-1.
  // The result of this recursive call is added to the current value of num.
  return num + sumRange(num - 1);
}

// FUNCTION CALL

// This line calls the sumRange function with the argument 4.
// The function will execute, and as it is a recursive function, it will continue to call itself with decreasing values of num until it reaches the base case (num === 1).
sumRange(4);

/**
Now, let's see how the recursive calls unfold for sumRange(4):

  * sumRange(4) calls sumRange(3)
        * sumRange(3) calls sumRange(2)
             * sumRange(2) calls sumRange(1)
                 * Base case is met (num === 1), so it returns 1.
            * sumRange(2) returns 2 + 1 = 3.
        * sumRange(3) returns 3 + 3 = 6.
  * sumRange(4) returns 4 + 6 = 10.

Therefore, the final result of sumRange(4) is 10.
*/
