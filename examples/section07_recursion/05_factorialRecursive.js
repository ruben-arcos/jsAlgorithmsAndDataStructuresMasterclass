// WRITING FACTORIAL RECURSIVELY

    // This line declares a function named factorial2 that takes one parameter num
    function factorial2(num){
        // This checks if num is equal to 1.
        // If true, it immediately returns 1.
        // This is the base case of the recursive function, providing a stopping condition.
        if(num === 1) {
            return 1;
        } 
        // RECURSIVE CALL

        // If the base case is not met, this line recursively calls the factorial2 function with the argument num-1.
        // The result of this recursive call is multiplied by the current value of num.
        return num * factorial(num-1);
    }

    // This line calls the factorial2 function with the initial argument 5 and prints the result to the console.
    console.log(factorial2(5))

    /**
        Now, let's see how the recursive calls unfold for factorial2(5):
    
            * factorial2(5) calls factorial2(4)
                    * factorial2(4) calls factorial2(3)
                            * factorial2(3) calls factorial2(2)
                                    * factorial2(2) calls factorial2(1)
                                            * Base case is met (num === 1), so it returns 1.
                                    * factorial2(2) returns 2 * 1 = 2.
                            * factorial2(3) returns 3 * 2 = 6.
                    * factorial2(4) returns 4 * 6 = 24.
            * factorial2(5) returns 5 * 24 = 120.
    
        Therefore, when you run console.log(factorial2(5)), the output will be 120.
    */

        