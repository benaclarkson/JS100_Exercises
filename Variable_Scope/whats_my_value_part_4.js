/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

/**
 * Solution
 * The above code will log the number `1` to the console. This is because the
 * variable `a` declared on `line 7` has function block scope. Because of this,
 * the variable is still accessible within the `if` conditional declared on
 * `line 9-11`.
 */