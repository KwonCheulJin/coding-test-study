/**
 * @description
 * @author Charles
 * @param {string} str
 * @return {number}
 */
function getLength(str) {
  if (str === '') {
    return 0;
  }
  return 1 + getLength(str.substring(1));
}

/**
 * @description
 * @author Charles
 * @param {number} num
 */
function getNumber(num) {
  if (num <= 0) {
    return;
  } else {
    getNumber(num - 1);
    console.log('🚀 ~ file: recursion.js:25 ~ getNumber ~ num:', num);
  }
}

// getNumber(3);

/**
 * @author Charles
 * @param {number} n
 * @param {number} m
 * @return {number[]}
 */
function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);

  /**
   * @author Charles
   * @param {number} l
   */
  function dfs(l) {
    if (l === m) {
      answer.push([...tmp]);
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[l] = i;
        dfs(l + 1);
      }
    }
  }
  dfs(0);
  return answer;
}

// console.log('🚀 ~ file: recursion.js:49 ~ solution(3, 2):', solution(3, 2));

/**
 * @author Charles
 * @param {number} n
 * @param {number} m
 * @return {number[]}
 */
function solution2(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);

  /**
   * @author Charles
   * @param {number} l
   * @param {number} s
   */
  function dfs(l, s) {
    if (l === m) {
      answer.push([...tmp]);
    } else {
      for (let i = s; i <= n; i++) {
        tmp[l] = i;
        dfs(l + 1, i + 1);
      }
    }
  }
  dfs(0, 1);
  return answer;
}

// console.log(
//   '🚀 ~ file: recursion.js:67 ~ solution2 ~ solution2(n, m):',
//   solution2(4, 2)
// );

function f(n) {
  if (n <= 1) {
    return 1;
  }
  // return n + f(n - 1);
  return n * f(n - 1);
}

console.log(`재귀함수: ${f(5)}`);

// 2진수 변환
let result = '';
let x = 11;

while (true) {
  if (x % 2 === 0) {
    result += '0';
    // result = '0' + result;
  } else {
    result += '1';
    // result = '1' + result;
  }
  x = Math.floor(x / 2);
  if (x === 1 || x === 0) {
    result += String(x);
    // result = String(x) + result;
    break;
  }
}

console.log(
  '🚀 ~ file: recursion.js:106 ~ result:',
  result.split('').reverse().join('')
);

function binary(n) {
  if (n === 1 || n === 0) {
    return String(n);
  }
  return binary(Math.floor(n / 2)) + String(n % 2);
}

console.log('🚀 ~ file: recursion.js:137 ~ binary(n):', binary(11));

// 문자열 뒤집기

let result2 = '';
/** @type {string} */
let x2 = 'charles';

// while (true) {
//   if (x2.length === 1) {
//     result2 += x2;
//     break;
//   }
//   let y = x2.split('');
//   console.log('🚀 ~ file: recursion.js:150 ~ y:', y);
//   result2 += y.pop();
//   x2 = y.join('');
//   console.log('🚀 ~ file: recursion.js:153 ~ x2:', x2);
// }

// console.log(result2);

function reverseString(str) {
  if (str.length === 1) {
    return str;
  }
  return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}

console.log(
  '🚀 ~ file: recursion.js:137 ~ binary(n):',
  reverseString('charles')
);

// 자릿수의 합

let result3 = 0;
let x3 = '123123';

while (true) {
  if (x3.length === 1) {
    result3 += parseInt(x3, 10);
    break;
  }
  let y = x3.split('');
  // @ts-ignore
  result3 += parseInt(y.pop(), 10);
  x3 = y.join('');
}

console.log(result3);

function recursionSum(str) {
  if (str.length === 1) {
    return parseInt(str, 10);
  }
  return (
    parseInt(str.slice(-1), 10) + recursionSum(str.slice(0, str.length - 1))
  );
}

console.log(
  '🚀 ~ file: recursion.js:191 ~ recursionSum ~ recursionSum(str):',
  recursionSum('123123')
);

function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log('🚀 ~ file: recursion.js:212 ~ fibonacci(n):', fibonacci(6));
