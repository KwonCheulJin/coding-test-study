const fs = require('fs');
const input = fs
  .readFileSync('./2480.txt') //'/dev/stdin'
  .toString()
  .trim()
  .split(' ')
  .map(value => +value);

const [a, b, c] = input.sort((a, b) => a - b);

if (a !== b && b !== c && c !== a) {
  const max = Math.max(...input);
  console.log(max * 100);
} else if (a === b && b !== c) {
  console.log(a * 100 + 1000);
} else if (a !== b && b === c) {
  console.log(c * 100 + 1000);
} else {
  console.log(a * 1000 + 10000);
}
