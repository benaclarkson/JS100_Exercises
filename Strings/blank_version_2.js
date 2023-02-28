/**
 * Change your isBlank function from the previous exercise to return true if
 * the string is empty or only contains whitespace. For example:
 */

function isBlank(str) {
  return !(!!(str.trim()));
}

isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true