/**
 * Write code that does the reverse, starting from a nested array of pairs and
 * building an object.
 */

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let person = Object.fromEntries(nestedArray);

console.log(person);
// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }