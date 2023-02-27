/**
 * What will the following code log to the console and why? Don't run it until
 * you have tried to answer.
 */

console.log(greeting);

let greeting = 'Hello world!';

/**
 * Solution
 * The above code will cause an error when it is executed. This is because
 * hoisting does not occur when it comes to variables defined with the `let`
 * keyword. Therefore, the `log()` method is attempting to call a variable that
 * has yet to be defined.
 */