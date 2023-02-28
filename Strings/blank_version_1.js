/**
 * Write a function that checks whether a string is empty or not. For example:
 */

function isBlank(str) {
  return !(!!str);
}

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true