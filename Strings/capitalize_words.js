/**
 * Write code that capitalizes the words in the string
 * 'launch school tech & talk', so that you get the string
 * 'Launch School Tech & Talk'.
 */

// Solution
let str = 'launch school tech & talk';
let wordsArr = str.split(' ');
let result = [];

wordsArr.forEach((word, idx) => {
  result[idx] = `${word[0].toUpperCase()}${word.slice(1)}`
})

console.log(result.join(' '));