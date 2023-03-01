/**
 * Create a function removeLastChar that takes a string as an argument, and
 * returns the string without the last character.
 */

function removeLastChar(str) {
  return str.substring(0, (str.length - 1));
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'