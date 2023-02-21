/* Look up the MDN documentation for the typeof operator. What is its return
// value? Determine what the following statements will return: 

// Solution
// The return value of calling the `typeof` operator on an object is a string
// indicating the type of the operand's value.
*/

typeof 23.5;                // "number"
typeof 'Call me Ishmael.';  // "string"
typeof false;               // "boolean"
typeof 0;                   // "number"
typeof null;                // "object"
typeof undefined;           // "undefined"