/**
    recursiveRange

        Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 
        
        SAMPLE INPUT/OUTPUT
                recursiveRange(6) // 21
                recursiveRange(10) // 55 

*/

function recursiveRange(num) {
  if (num === 1) {
    return 1;
  }
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6)); //21
console.log(recursiveRange(10)); // 55

// Solution 2:
function recursiveRange2(x) {
  if (x === 0) return 0;
  return x + recursiveRange2(x - 1);
}

console.log(recursiveRange2(5)); //15
console.log(recursiveRange2(20)); // 210
