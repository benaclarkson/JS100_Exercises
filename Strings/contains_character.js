/**
 * Write code that checks whether the string byteSequence contains the
 * character x.
 */

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

// Solution 1
console.log(byteSequence.includes('x')); // true

// Solution 2
console.log(byteSequence.search(/x/));   // 26

// Solution 3
console.log(byteSequence.indexOf('x'));  // 26

// Further Exploration
function diyIncludes(string, searchChar) {
  return string.split('')
               .some(char => char === searchChar);
}

console.log(diyIncludes(byteSequence, 'x'));