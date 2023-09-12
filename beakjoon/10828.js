const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('./10828.txt') //'/dev/stdin'
  .toString()
  .trim()
  .split('\n');

let stack = [];

for (let x of input) {
  const [key, value] = x.split(' ');
  console.log(key, value, stack);
  if (key === 'push') {
    stack.push(value);
  } else if (key === 'top') {
    console.log(stack[stack.length - 1] || -1);
  } else if (key === 'size') {
    console.log(stack.length);
  } else if (key === 'empty') {
    console.log(stack.length <= 0 ? 1 : 0);
  } else if (key === 'pop') {
    console.log(stack.pop() || -1);
  }
}
