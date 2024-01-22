// FACTORIALS
/**
    A factorial is a mathematical operation that represents the product of all positive integers up to a given number. It is denoted by the exclamation mark (!). For example, the factorial of 5 is written as "5!" and is calculated as:

        5! = 5 × 4 × 3 × 2 × 1 = 120
    
    Factorials are not defined for negative integers. For example, (−5)! is not a valid mathematical expression using the standard factorial definition. Factorials are a concept of counting and arranging objects, and it doesn't make sense to arrange a negative number of objects.

    WHERE THINGS CAN GO WRONG
        1. No base case
        2. Forgetting to return or returning the wrong thing!
            * Example --> leads to infinite loop
                     function factorial(num) {
                        if(num === 1) {
                            return 1
                        }
                        // the issue here is that the recursive call does not decrease the value of num, leading to an infinite loop.
                        return num * factorial(num)
                    }
                    factorial(2)
            * Now, let's see how the recursive calls unfold for factorial(2):
                    factorial(2) calls factorial(2)
                        factorial(2) calls factorial(2)
                            And so on, leading to an infinite loop.
        3. Stack overflow -> occurs when a program's call stack, which is a region of memory used for managing function calls and local variables, runs out of space. In other words, the call stack becomes so deep that it exceeds the available memory.

                    Here's a simplified explanation:

                        Call Stack: When a function is called, a new frame is added to the call stack, containing information about the function call and local variables.

                        Recursive Functions: In recursive functions, a function calls itself. Each recursive call adds a new frame to the stack.

                        Infinite Recursion: If there's a mistake in the recursive logic, and the base case (the condition that should stop the recursion) is never met, the function keeps calling itself indefinitely.

                        Stack Overflow: The call stack has a limited size. If it becomes too deep due to infinite recursion, it eventually exceeds the available memory, leading to a stack overflow. This results in a runtime error and may crash the program.

                        In programming, a common cause of stack overflow is an error in the termination condition of a recursive function, causing it to recurse endlessly. It's essential to ensure that recursive functions have a base case that will eventually be satisfied to stop the recursion.

*/


// WRITING FACTORIAL ITERATIVE

    // This line declares a function named factorial that takes one parameter num.
    function factorial(num) {
    // Initializes a variable total with the value 1.
    // This variable will be used to accumulate the factorial value.
    let total = 1;

    // Initializes a variable i with the value of num.
    // The loop continues as long as i is greater than 1.
    // In each iteration, i is decremented by 1 (i--).
    for (let i = num; i > 1; i--) {
        // In each iteration of the loop, multiplies the current value of total by the current value of i and updates the total variable.
        total *= i;
    }
    // After the loop completes, the function returns the final calculated factorial stored in the total variable.
    return total;
    }

    factorial(4)

    /**
    Now, let's see how the loop unfolds for factorial(4) (as an example):

            * Iteration 1: i = 4, total *= 4 (4 * 1) = 4
            * Iteration 2: i = 3, total *= 3 (3 * 4) = 12
            * Iteration 3: i = 2, total *= 2 (2 * 12) = 24
            * Iteration 4: Loop condition (i > 1) is not met, exits the loop.

    So, when you call factorial(4), the function returns 24.

    EXPLANATION simplified even more
    1. Imagine you want to find the factorial of 4 (written as 4!).
    2. Start with a total value of 1.
    3. Use a loop that starts from 4 and goes down to 2 (inclusive).
    4. Multiply the total by the current number in each iteration.
            * Iteration 1: total = 1 * 4 (since 4 is the first number), so total becomes 4.
            * Iteration 2: total = 4 * 3, so total becomes 12.
            * Iteration 3: total = 12 * 2, so total becomes 24.
    5. The loop stops because it only runs while the current number is greater than 1.
    6. The final result is 24, which is the factorial of 4 (4!).

    So, when you call factorial(4), it's like saying "give me the factorial of 4," and the function calculates and returns 24.
*/
