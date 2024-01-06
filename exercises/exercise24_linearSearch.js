/**
    Linear Search

        How do we search?
            Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want

        JavaScript has search!
            There are many different search methods on arrays in JavaScript:
                * indexOf
                * includes
                * find
                * findIndex
            
            How do they work?

            O(1) --> best, find what we're looking for
            O(n) --> average
            O(n) --> worst, look through the entire thing

        Space Complexity is a measure of how much additional memory an algorithm uses based on the size of the input.

            In your linearSearch function:

                1. There are a few variables used: arr (the input array), val (the value to search for), i (the loop variable), and the return value.

                2. These variables occupy a fixed amount of memory, regardless of the size of the input array. Whether your array has 10 elements or 1,000 elements, the memory used by these variables doesn't increase proportionally.

                3. Because the amount of memory used by the function remains constant, we say that the space complexity is O(1), where O(1) means constant time.

            In simple terms, the function's memory usage doesn't grow as your array gets larger. So, we consider it to have constant space complexity, denoted as O(1).
*/

let usernames = ["tommy", "monkeygurl", "dinesh123", "dinesh1234", "patrick33", "cats4lyfe", "timothy", "tom", "tommy1", "tomm_y", "tom_my", "i_hate_cats", "pickle_luvr", "pickle_hater", "dog_guy", "q", "juan987"]

console.log(usernames.indexOf("q"))
console.log(usernames.indexOf("abc"))
console.log(usernames.includes("tom"))
console.log(usernames.includes("toms"))

// let arr = [5, 8, 1, 100, 12, 3, 12]

// this function accepts an array and a value
function linearSearch(arr, val) {

// loop through the array and check if the current array element is equal to the value
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            // if it is, return the index at which the element is found
            return i;
        }
    }
    // if the value is never found, return -1
    return -1
}

console.log(linearSearch([34, 56, 1, 2 ], 1))
// console.log(linearSearch(arr, 12))

/**
    
*/

const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia",  "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", 
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", 
    "South Dakota", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

function linearSearchOfUsStates (states, val) {
    for(let i = 0; i < states.length; i++) {
        if (states[i] === val) {
            return i
        }
    }
    return `${-1} (state not found)`
}

console.log(linearSearchOfUsStates(states, "Texas"))
console.log(linearSearchOfUsStates(states, "Puerto Rico"))