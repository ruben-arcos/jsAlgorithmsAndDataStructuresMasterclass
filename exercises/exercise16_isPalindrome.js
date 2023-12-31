/**
    isPalindrome

        Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

        Examples:
            isPalindrome('awesome') // false
            isPalindrome('foobar') // false
            isPalindrome('tacocat') // true
            isPalindrome('amanaplanacanalpanama') // true
            isPalindrome('amanaplanacanalpandemonium') // false    
*/

function isPalindrome(str) {
    // Base case 1: if the string has one character, it's a palindrome
    if (str.length === 1) {
        return true
    }
    // Base case 2: if the string has two characters, check if they are equal
    if (str.length === 2) {
        return str[0] === str[1]
    }
    // Recursive case: check if the first and last characters are equal,
    // and recursively check the substring without those characters
    if (str[0] === str.slice(-1)) {
        return isPalindrome(str.slice(1, -1))
    }
     // If the first and last characters are not equal, it's not a palindrome
    return false
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false 

/**
    Step-by-Step Explanation:

    1. Base Case 1: One Character Palindrome
        * if (str.length === 1): If the length of the string is 1, it means the string is a palindrome. Return true.
        
    2. Base Case 2: Two Character Palindrome
        * if (str.length === 2): If the length of the string is 2, check if the first and last characters are equal. If they are, it's a palindrome. Return true.

    3. Recursive Case: General Case for Longer Strings
        * if (str[0] === str.slice(-1)): If the first and last characters of the string are equal, proceed to the recursive step.
        return isPalindrome(str.slice(1, -1)): Recursively call isPalindrome with the substring excluding the first and last characters. This checks the inner part of the string to determine if it's a palindrome.

    4. Final Check: If First and Last Characters Are Not Equal
        * If the first and last characters are not equal, it means the string is not a palindrome. Return false.

    Example:

    Let's use the string "racecar" as an example.

        * isPalindrome("racecar"):
            * First call: str[0] ("r") is equal to str.slice(-1) ("r"). Proceed to the recursive call with the substring "aceca".
            * Recursive call: isPalindrome("aceca"). Again, compare the first and last characters ("a") and proceed recursively.
            * Recursive call: isPalindrome("cec"). Continue this process until reaching the base case for one character.
            * The string "racecar" is a palindrome, and the function returns true.
*/

