// Set 활용
const numsArr1 = [1, 2, 3, 4, 6, 6, 7, 2, 2, 8, 9];

const newNumsArr1 = [...new Set(numsArr1)];
console.log('🚀 ~ file: remove-duplicate-array.js:8 ~ newNums:', newNumsArr1);

// indexOf 활용
const numsArr2 = [1, 2, 3, 4, 6, 6, 7, 2, 2, 8, 9];

const newNumsArr2 = numsArr2.filter(
  (item, position) => numsArr2.indexOf(item) === position
);
console.log(
  '🚀 ~ file: remove-duplicate-array.js:11 ~ newNumsArr2:',
  newNumsArr2
);

// caching / frequency map
const numsArr3 = [1, 2, 3, 4, 6, 6, 7, 2, 2, 8, 9];

function uniqueNums(arr) {
  const uniqueElements = {};
  const result = [];

  for (const element of arr) {
    if (!uniqueElements[element]) {
      result.push(element);
    }
    uniqueElements[element] = element;
  }
  return result;
}

console.log(
  '🚀 ~ file: remove-duplicate-array.ts:22 ~ uniqueNums ~ uniqueNums:',
  uniqueNums(numsArr3)
);
