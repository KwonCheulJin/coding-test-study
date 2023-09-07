// 선택정렬

let nums = [10, 11, 9, 2, 3, 6, 5, 4];
let sortArr = [];

for (let i = 0; i < 8; i++) {
  sortArr.push(Math.min(...nums));
  nums.splice(nums.indexOf(Math.min(...nums)), 1);
}

console.log(sortArr);
