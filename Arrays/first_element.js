/**
 * Write a function that returns the first element of an input array. For
 * example:
 */

// Solution, pt 1
function first(arr) {
  return arr[0];
}

console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth';
console.log(first([]));                        // undefined

/**
 * What would you return if the input array was empty?
 * 
 * Solution, pt 2
 * If the input array was empty, `undefined` would be returned by the function
 * I wrote above.
 */