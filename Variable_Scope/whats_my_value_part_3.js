/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

if (true) {
  let myValue = 20;
}

console.log(myValue);

/**
 * Solution
 * The above code will cause an error when it is executed. This is because
 * the variable `myValue` defined on `line 7` has block scope and is not
 * accessible by the `console.log()` method call on `line 10`.
 */