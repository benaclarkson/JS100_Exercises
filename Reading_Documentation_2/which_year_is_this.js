// The MDN page for Date lists two methods to get the year of a date.

let today = new Date();

today.getYear();
today.getFullYear();

/* What is the difference between the two methods and which one should you use?

// Solution
// `Date.prototype.getFullYear();` should be used because
// `Date.prototype.getYear()` is now deprecated.
// The difference between them is that `getFullYear()` returns full years
// whereas `getYear()` returns the full year, minus 1900.
*/