const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('./9012.txt') //'/dev/stdin'
  .toString()
  .trim()
  .split('\n');

let result = [];

for (let x of input) {
  const value = x.split('');

  let stack = [];
  for (let v of value) {
    if (v === '(') {
      stack.push(v);
    } else {
      const last = stack.pop() || ')';
      if (last === ')') {
        stack.push(last);
      }
    }
  }
  result.push(stack.length === 0 ? 'YES' : 'NO');
}

console.log(result.join('\n'));
