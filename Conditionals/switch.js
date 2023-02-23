/**
 * Take a look at the code below. Without running it, determine what it will
 * log to the console. If you're not sure, refer to the MDN documentation on
 * switch statements.
 */

let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

/**
 * Solution
 * The above code will log `'neigh'`, `'tweet tweet'`, and `'*cricket*'` to the
 * console. This is because there are no break statements used so the code
 * "falls through" to the other case qualifiers.
 */