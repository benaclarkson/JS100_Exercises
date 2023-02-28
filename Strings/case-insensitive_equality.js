/**
 * Given strings like the following, how can you check whether they're equal
 * irrespective of whether the characters they contain are upper or lower case?
 */

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

/**
 * Solution
 * To compare if strings are equal, irrespective of whether the characters they
 * contain are upper or lower case, we can call the `toLowerCase()` method on
 * each string prior to invoking a comparison operator.
 */
console.log(string1.toLowerCase() === string2.toLowerCase());