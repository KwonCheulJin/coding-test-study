let numbers = [0, 1, 0, 3, 12];

function moveZeros(nums) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      //swap
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++;
    }
  }
}

moveZeros(numbers);

console.log('🚀 ~ file: move-zeros.js:2 ~ numbers:', numbers);
