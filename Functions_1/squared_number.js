/**
 * Write a function that accepts a single argument, a number, and returns the
 * result of multiplying its argument by an exponent of 2 (also known as
 * squaring the number).
 */

// Solution 1
function squaredNumber(num) {
  return num ** 2;
}

// Solution 2
// Uses implicit return of single line arrow function
// let squaredNumber = (num) => num ** 2;

squaredNumber(3); // 9