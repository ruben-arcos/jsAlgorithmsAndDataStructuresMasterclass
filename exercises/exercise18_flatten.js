/**
    flatten
        Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

        Examples:

            flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
            flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
            flatten([[1],[2],[3]]) // [1,2,3]
            flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
*/

function flatten(arr){
    if (arr.length === 0) {
        return false;
    }
    if (arr.pop()) {
        return true
    }
    return flatten(arr)
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3