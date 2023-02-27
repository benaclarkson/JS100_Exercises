/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

/**
 * Solution
 * The above code will log `false` to the console. This is because the block
 * scope in which the variable `b` is defined on `line 10`. Because of that
 * inner scope, the `b` defined on `line 10` is inaccessible to any code outside
 * of that block scope and the `b` variable declared on `line 7` is the variable
 * used as the argument in the `console.log(b)` invocation on `line 13`.
 */