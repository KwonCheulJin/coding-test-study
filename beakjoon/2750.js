const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('./2750.txt') //'/dev/stdin'
  .toString()
  .trim()
  .split('\n');

let result = [];

for (let x of input) {
  result.push(+x);
}

console.log(result.sort((a, b) => a - b).join('\n'));
