//퀵 정렬(worst - O(nLog2n), best - O(n**2)

let insertArr = [66, 77, 54, 32, 10, 5, 11, 15];

function quickSort(arr) {
  let length = arr.length;
  if (length <= 1) {
    return arr;
  }

  let pivot = [arr.shift()];
  let group1 = [];
  let group2 = [];

  for (const key in arr) {
    if (arr[key] < pivot) {
      group1.push(arr[key]);
    } else {
      group2.push(arr[key]);
    }
  }
  console.log(`group1: ${group1}\n group2: ${group2}\n pivot: ${pivot}`);
  return quickSort(group1).concat(pivot, quickSort(group2));
}

console.log(
  '🚀 ~ file: quick-sort.js:6 ~ quickSort ~ quickSort(arr):',
  quickSort(insertArr)
);
