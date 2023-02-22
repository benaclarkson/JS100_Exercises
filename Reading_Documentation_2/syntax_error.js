/* The below code raises a SyntaxError. If you run the code, you'll see the
// following error message:

SyntaxError: Unexpected token &&

Find and read the documentation about this error on MDN. Then, fix the code. */

let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}

/* Solution
// The error occurs because the initial conditional statement is not properly
// wrapped in parentheses. When the `&&` statement is encountered, an opening
// curly brace is expected. */