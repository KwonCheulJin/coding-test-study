// @ts-nocheck
const fs = require('fs');
const [str, n, ...input] = fs
  .readFileSync('./1406.txt') //'/dev/stdin'
  .toString()
  .trim()
  .split('\n');

//NOTE: 메모리 초과
// let result = str.split('');
// let cursor = str.length;

// for (let v of input) {
//   const [key, value] = v.split(' ');
//   if (key === 'P') {
//     if (cursor < result.length) {
//       let temp = result.splice(cursor);
//       result[cursor] = value;
//       result = [...result, ...temp];
//     } else {
//       result[cursor] = value;
//       cursor++;
//     }
//   } else if (key === 'L') {
//     if (cursor <= 0) {
//       cursor = 0;
//     } else {
//       cursor--;
//     }
//   } else if (key === 'D') {
//     if (cursor >= result.length) {
//       cursor = result.length;
//     } else {
//       cursor++;
//     }
//   } else if (key === 'B') {
//     if (cursor <= 0) {
//       cursor = 0;
//     } else {
//       result.splice(cursor - 1, 1);
//       cursor--;
//     }
//   }
// }
// console.log(result.join(''));

//TODO: 배열 두개를 활용해서 문제 풀이 다시
