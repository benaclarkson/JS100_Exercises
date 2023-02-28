/**
 * Predict the output of the below code. When you run the code, do you see what
 * you expected? Why or why not?
 */

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

/**
 * Solution
 * The code logs `false` to the console because, although the array objects
 * contain the same elements/primitive values, they are different objects
 * and, therefore, not equal when compared with the strict equality operator.
 */