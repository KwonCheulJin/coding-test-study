const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('./2675.txt') //'/dev/stdin'
  .toString()
  .trim()
  .split('\n');

let result = [];
for (let str of input) {
  const [num, string] = str.split(' ');
  let temp = '';
  for (let i = 0; i < string.length; i++) {
    temp += string[i].repeat(+num);
  }
  result.push(temp);
}

console.log(result.join('\n'));
