/**
    Factorial
        Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

        Examples:
            factorial(1) // 1
            factorial(2) // 2
            factorial(4) // 24
            factorial(7) // 5040
*/

function factorial(num){
    // Base case: if the number is 0, the factorial is 1
    if(num === 0) {
        return 1;
    }
     // Recursive case: multiply the current number by the factorial of (num-1)
    return num * factorial(num-1)
 }

 console.log(factorial(1))
 console.log(factorial(2))
 console.log(factorial(4))
 console.log(factorial(7))


// SOLUTION 2   

function factorial2(x){
    if (x < 0 ) return 0;
    if (x <= 1 ) return 1;
    return x * factorial(x-1);
 }

 console.log(factorial2(1))
 console.log(factorial2(2))
 console.log(factorial2(4))
 console.log(factorial2(7))