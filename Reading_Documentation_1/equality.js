/* In your JavaScript console, execute the following two lines of code to check
// whether their return values differ and if so, how. Take a look at the MDN
// documentation on equality comparisons to read about how == and === differ. */

'8' == 8;   // true
'8' === 8;  // false

/* The difference between the two examples is the use of the Equality operator
// and the Strict Equality operator. The first coerces the operands into the
// same type prior to comparing, resulting in a comparison between two
// numbers, 8 and 8.
// The second example on `line 6` does not coerce either operand. Thus, the
// comparison evaluates to `false` because the operand on the left is a string
// and the operand on the right is a number. */