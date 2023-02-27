/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

/**
 * Solution
 * The above code will log `{ firstName: 'Jane', lastName: 'Doe' }`. This
 * demonstrates how elements of an object may be changed, even when defined with
 * the `const` keyword. Therefore, when `myFunction()` is invoked on `line 15`,
 * the `firstName` element of the `a` object is mutated.
 */