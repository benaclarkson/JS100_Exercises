/**
 * The code provided below will randomly initialize randomNumber to either 0 or
 * 1 each time it is executed.
 * 
 * Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if
 * randomNumber is 0.
 */

let randomNumber = Math.round(Math.random());

// Solution 1
switch (randomNumber) {
  case 1:
    console.log('Yes!');
    break;
  case 0:
    console.log('No.');
    break;
  default:
    break;
}

// Solution 2
if (randomNumber) {
  console.log('Yes!');
} else {
  console.log('No.');
}