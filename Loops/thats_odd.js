// Write a while loop that logs all odd natural numbers between 1 and 40.

let currentNum = 1;

// Solution 1
while (currentNum < 41) {
  if (currentNum % 2 !== 0) console.log(currentNum);
  currentNum += 1;
}

// Solution 2
while (currentNum <= 40) {
  console.log(currentNum);
  currentNum += 2;
}