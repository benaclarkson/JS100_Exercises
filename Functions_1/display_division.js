/**
 * Determine the output that the following code will log to the console.
 */

function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree;

/**
 * Solution
 * There will be no output because the `multiplesOfThree` function is not
 * actually being invoked on `line 14`.
 */