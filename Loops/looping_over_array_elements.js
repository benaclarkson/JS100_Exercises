/**
 * Using the code below as a starting point, write a while loop that logs the
 * elements of array at each index, and terminates after logging the last
 * element of the array.
*/

let array = [1, 2, 3, 4];
let index = 0;

// Solution
while (index < array.length) {
  console.log(array[index]);
  index += 1;
}

/**
 * Further Exploration
 * What would the code output if array was empty? Why is that?
 * 
 * Solution
 * If `array` was empty, nothing would be logged to the console because the
 * conditional upon which the `while` loop is contingent would not evaluate
 * to true at any point.
 */