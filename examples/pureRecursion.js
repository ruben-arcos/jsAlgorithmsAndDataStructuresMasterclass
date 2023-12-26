// PURE RECURSION

/**
 * Pure Recursion Tips
        * For arrays, use methods like SLICE, the SPREAD operator, and CONCAT that makes copies or arrays so you don't mutate them 
        * Remember that strings are immutable so you will nees to use methods like SLICE, SUBSTR, or SUBSTRING to make copies of strings
        * To make copies of objects use OBJECT.ASSIGN, or the SPREAD OPERATOR
 */

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));
