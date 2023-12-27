/**
    Power
        Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

    // power(2,0) // 1
    // power(2,2) // 4
    // power(2,4) // 16
*/

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  let result = base;
  for (let i = 1; i < exponent; i++) {
    result *= base;
  }
  return result;
}

console.log(power(2,0))
console.log(power(2,2))
console.log(power(2,4))

// SOLUTION 2

function power2(base, exponent) {
  if (exponent === 0) return 1;
  return base * power2(base, exponent - 1);
}

console.log(power2(3, 0));
console.log(power2(3, 2));
console.log(power2(3, 4));
