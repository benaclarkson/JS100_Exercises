/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

/**
 * Solution
 * The above code will result in a `TypeError` because the code on `line 9` is
 * attempting to reassign a variable defined with the `const` keyword. When `a`
 * is passed in as an argument on `line 12`, it is simply ignored, since no
 * parameters are given when the function was declared on lines 8-10.
 */