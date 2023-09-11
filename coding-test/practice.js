// @ts-nocheck
const arr = [10, 20, 40, 50, 1, 2, 4];

console.log(Math.max(...arr));
console.log(Math.min(...arr));

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

function isPrime(n) {
  console.log('🚀 ~ file: practice.js:11 ~ isPrime ~ n:', n);
  if (n === 0 || n === 1) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
let numbers = [32, 55, 62, 20, 250, 370, 200, 30, 100];
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let sum = 0;
    while (x) {
      sum = sum * 10 + (x % 10);
      x = parseInt(x / 10);
    }
    console.log(
      '🚀 ~ file: practice.js:28 ~ solution ~ isPrime(sum):',
      isPrime(sum)
    );
    if (isPrime(sum)) {
      answer.push(sum);
    }
  }

  return answer;
}

console.log(
  '🚀 ~ file: practice.js:40 ~ solution(numbers):',
  solution(numbers)
);

const getPer = str => {
  const answer = [];
  const n = str.length;
  let ch = Array.from({ length: n }, () => 0);

  const dfs = curStr => {
    console.log(curStr);
    answer.push(+curStr);
    for (let i = 0; i < n; i++) {
      if (ch[i] === 0) {
        console.log(ch[i], i, str[i]);
        ch[i] = 1;
        dfs(curStr + str[i]);
        ch[i] = 0;
      }
    }
  };
  dfs('');
  answer.shift();
  return answer;
};

console.log(getPer('17'));

let answer = [];
const getPermutation = (arr, fixed) => {
  console.log(
    '🚀 ~ file: practice.js:70 ~ getPermutation ~ arr, fixed:',
    arr,
    fixed
  );
  if (arr.length >= 1) {
    for (let i = 0; i < arr.length; i++) {
      const newNum = fixed + arr[i];
      console.log(
        '🚀 ~ file: practice.js:73 ~ getPermutation ~ newNum:',
        newNum
      );
      const copyArr = [...arr];
      console.log(
        '🚀 ~ file: practice.js:75 ~ getPermutation ~ copyArr:',
        copyArr
      );
      copyArr.splice(i, 1);
      if (!answer.includes(+newNum) && isPrime(+newNum)) {
        answer.push(+newNum);
      }
      getPermutation(copyArr, newNum);
    }
  }
};

getPermutation('011'.split(''), '');

console.log(answer);

console.log([].length > 0);
console.log('one4seveneight'.replace('one', '1'));
