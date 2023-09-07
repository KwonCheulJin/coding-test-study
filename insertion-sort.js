// 삽입정렬
let numsArr = [5, 10, 66, 77, 54, 32, 11, 15];
let sortedArr = [];
let arrlength = numsArr.length;

function getIndex(arr, value) {
  for (const key in arr) {
    if (value < arr[key]) {
      return key;
    }
  }
  return arr.length;
}
for (let i = 0; i < arrlength; i++) {
  let insertValue = numsArr.shift();
  let index = getIndex(sortedArr, insertValue);
  sortedArr.splice(index, 0, insertValue);

  console.log('🚀 ~ file: insertion-sort.js:9 ~ index:', index);
  console.log('🚀 ~ file: insertion-sort.js:10 ~ sortedArr:', sortedArr);
}
