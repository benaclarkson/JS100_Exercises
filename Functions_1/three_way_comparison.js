/**
 * Write a function that compares the length of two strings. It should return -1
 * if the first string is shorter, 1 if the second string is shorter, and 0 if
 * they're of equal length, as in the following example:
 */

// Solution
function compareByLength(str1, str2) {
  let length1 = str1.length;
  let length2 = str2.length;
  
  if (length1 < length2) {
    return -1;
  } else if (length1 > length2) {
    return 1;
  } else {
    return 0;
  }
}

compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0