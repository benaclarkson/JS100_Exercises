/**
 * What is the difference between the following two code snippets? Check the
 * MDN documentation on while and do...while.
 * 
 * Solution
 * The main difference between the two code examples is that the `do...while`
 * loop executes at least once.
*/

// let counter = 0;

// while (counter > 0) {
//   console.log('Woooot!');
//   counter -= 1;
// }

// ----------------------

let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);