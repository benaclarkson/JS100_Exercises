/**
 * Use JavaScript's string methods on the string 'Captain Ruby' to produce the
 * string 'Captain JavaScript'.
 * 
 * Solution
 * For my solution, I used the `String.prototype.replace()` method. Because
 * primitive values, such as strings are immutable, I store the return value
 * of calling the `.replace()` method on the original string in a new variable,
 * which I then log to the console. 
*/

let str = 'Captain Ruby';

let newStr = str.replace('Ruby', 'JavaScript');

console.log(newStr);