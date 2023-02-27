/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

/**
 * Solution
 * The above code will result in a `ReferenceError` because the `console.log(a)`
 * invocation on `line 10` is attempting to use the `a` variable declared on
 * `line 11` as the argument. This is due to the inner scope taking precedence
 * with variables over outerscope--specifically when it comes to variable
 * shadowing. When a variable is defined using the `let` keyword, yet invoked
 * prior to the variable declaration, JavaScript reacts by giving a
 * `ReferenceError` because the variable is not yet defined.
 */