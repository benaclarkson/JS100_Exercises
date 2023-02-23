/**
 * Without running the below code, determine what will be logged to the console.
 */

let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);

/**
 * Solution
 * The string `'$3.99'` will be logged to the console because, although the
 * variable `sale` is set to `true` on `line 5`, when the value of `sale` is
 * evaluated in the ternary operator on `line 6`, the Not operator (`!`) is
 * used, changing the value of `sale` to `false`. Because of that change, the
 * ternary operator returns `3.99`, which is then stored in the `admissionPrice`
 * variable. The `admissionPrice` variable is then coerced into a string by the
 * `+` operator on `line 8` when concatenated to the `'$'` string. Finally,
 * that concatenated string is then logged to the console.
 */