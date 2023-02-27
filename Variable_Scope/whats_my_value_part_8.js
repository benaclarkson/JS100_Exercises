/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

/**
 * Solution
 * The above code will log `2` to the console. This is because function
 * parameters are local variables with block scope.
 */