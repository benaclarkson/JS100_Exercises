/**
 * Implement a function repeat that repeats an input string a given number of
 * times, as shown in the example below; without using the pre-defined string
 * method String.prototype.repeat().
 */

// Solution
function repeat(times, string) {
  let result = ''
  
  for (let i = 1; i <= times; i += 1) {
    result = result.concat(string);
  }

  return result;
}

repeat(3, 'ha'); // 'hahaha'