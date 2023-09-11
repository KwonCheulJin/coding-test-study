// @ts-nocheck
// 병합정렬(O(nLogn))
// 분할과 정복
let numbersArr = [5, 10, 66, 77, 54, 32, 11, 15];

// function mergeSort(arr) {
//   let length = arr.length;
//   if (length <= 1) {
//     return arr;
//   }

//   let middle = parseInt(length / 2);
//   let group1 = mergeSort(arr.slice(0, middle));
//   let group2 = mergeSort(arr.slice(middle));
//   return `group1: ${group1}, group2: ${group2}\n`;
// }

// console.log(
//   '🚀 ~ file: merg-sort.js:19 ~ mergeSort(arr):',
//   mergeSort(numbersArr)
// );

function mergeSort(arr) {
  let length = arr.length;
  let result = [];
  if (length <= 1) {
    return arr;
  }

  let middle = parseInt(length / 2);
  let group1 = mergeSort(arr.slice(0, middle));
  let group2 = mergeSort(arr.slice(middle));

  while (group1.length !== 0 && group2.length !== 0) {
    if (group1[0] < group2[0]) {
      result.push(group1.shift());
    } else {
      result.push(group2.shift());
    }
  }

  while (group1.length !== 0) {
    result.push(group1.shift());
  }

  while (group2.length !== 0) {
    result.push(group2.shift());
  }

  return result;
}

console.log(
  '🚀 ~ file: merg-sort.js:19 ~ mergeSort(arr):',
  mergeSort(numbersArr)
);
