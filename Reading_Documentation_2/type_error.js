// Run the following code.

let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}

/* You'll see that it raises an error:

// TypeError: tweet.length is not a function

// Check the documentation of both TypeError and length, in order to find out
// what causes the error. 

// Solution
// The above code results in a TypeError due to the fact that `length` is, in
// fact, a property and not a method, though it was used as one would use a
// method. By removing the parentheses following `length`, we can fix the code.
*/