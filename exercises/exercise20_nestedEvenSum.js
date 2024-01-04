/**
        nestedEvenSum

            Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

            examples:
*/

function nestedEvenSum(obj, sum = 0) {
  // Iterate through each key in the object
  for (var key in obj) {
    // Check if the value associated with the key is an object
    if (typeof obj[key] === "object") {
      // If the value associated with the key is an object, recursively call the function
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      // If the value associated with the key is a number and it's even, add it to the sum
      sum += obj[key];
    }
  }
  // Return the total sum of even numbers found in the nested structure
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
