/**
 * 
    productOfArray

        Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

        Sample Outputs:

            productOfArray([1,2,3]) // 6
            productOfArray([1,2,3,10]) // 60
*/

function productOfArray(arr) {
    let result = 1;

   if (arr.length === 1) {
    return arr[0]
   }

   for (let i = 0; i < arr.length; i++) {
    result *= arr[i]
   }
   return result
}

console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60

// Solution 2:
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}