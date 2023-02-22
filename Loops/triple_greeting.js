// Write a loop that logs greeting three times.

let greeting = 'Aloha!';

// Solution 1
let count = 0;

do {
  console.log(greeting);
  count += 1;
} while (count < 3);

// Solution 2
for (let idx = 0; idx < 3; idx += 1) {
  console.log(greeting);
}

// Solution 3
let idx = 0;

while (idx < 3) {
  console.log(greeting);
  idx += 1;
}