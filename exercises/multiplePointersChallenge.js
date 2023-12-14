/**
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
 *
 * P: create a function countUniqueValues, that accepts a sorted array, and counts the unique values in the array
 * R: return the number of unique values
 * E:
 *      countUniqueValues([1,1,1,1,1,2]) --> 2
 *      countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) --> 7
 *      countUniqueValues([]) --> 0
 *      countUniqueValues([-2,-1,-1,0,1]) --> 4
 * P:
 * */

function countUniqueValues(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let unique = true;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        unique = false;
      }
    }
    if (unique) {
      count++;
    }
  }
  return count;
}

console.log(countUniqueValues([]));
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));


// second solution

function countUniqueValues2(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
    console.log(i,j)
  }
  return i + 1;
}

console.log(countUniqueValues2([]));
console.log(countUniqueValues2([1,1,2,3,3,4,5,6,6,7]))
