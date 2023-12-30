/**
    Reverse
        
        Write a recursive function called reverse which accepts a string and returns a new string in reverse.

        Examples:
        reverse('awesome') // 'emosewa'
        reverse('rithmschool') // 'loohcsmhtir'


*/

function reverse(str) {
    // Base case: if the length of the string is 1, return the string as is
    if(str.length === 1) {
        return str
    }
    // Recursive step to reverse the string
    return str[str.length -1] + reverse(str.split(0, -1))
}

console.log(reverse('awesome'))  // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'

/**
 * Explanation of this line --> return str[str.length - 1] + reverse(str.slice(0, -1));
 
    * The use of square brackets ([]) and parentheses (()) in the return statement serves different purposes.

        1. str[str.length - 1] - Square Brackets ([]):
            * In this part, str[str.length - 1] is used to access the last character of the string (str). Strings in JavaScript are zero-indexed, so str.length - 1 represents the index of the last character. The square brackets are used for indexing to extract the last character of the string
            * For example, if str is "hello," then str[str.length - 1] would be equivalent to str[4], which is the last character "o."
        
        2. reverse(str.slice(0, -1)) - Parentheses (()):
            * In this part, parentheses are used to indicate a function call. The reverse function is called with the argument str.slice(0, -1). Let's break it down:
            * str.slice(0, -1): This expression creates a new string that is a slice of the original string str from index 0 to the second-to-last character (-1 represents the last character in reverse indexing).
            * reverse(...): This is a recursive call to the reverse function with the sliced string as an argument. The parentheses are used to enclose the argument passed to the function.
 
    * Putting it all together:
        The entire return statement concatenates the last character of the original string with the result of the recursive call to reverse on the string without the last character.
 */



