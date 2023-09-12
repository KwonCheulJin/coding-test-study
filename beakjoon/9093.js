const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('./9093.txt') //'/dev/stdin'
  .toString()
  .trim()
  .split('\n');

console.log(input);
let result = [];
for (let p of input) {
  const str = p.split(' ');
  let temp = [];
  for (let s of str) {
    const values = s.split('');
    temp.push(values.reverse().join(''));
  }
  result.push(temp.join(' '));
}

console.log(result.join('\n'));
