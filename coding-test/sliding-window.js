/**
 * @author Charles
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function maxSumOfSubArray(arr, k) {
  let windowSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];
    if (i >= k - 1) {
      maxSum = Math.max(windowSum, maxSum);
      console.log(
        '🚀 ~ file: sliding-window.js:16 ~ maxSumOfSubArray ~ arr[i - (k - 1)]:',
        arr[i - (k - 1)]
      );
      windowSum -= arr[i - (k - 1)];
    }
  }
  return maxSum;
}

console.log(
  '🚀 ~ file: sliding-window.js:8 ~ maxSumOfSubArray ~ maxSumOfSubArray(arr, k):',
  maxSumOfSubArray([5, 7, -1, 14, 3, 12, 1, 4], 3)
);

'moon'.slice(1).concat('moon'[0]);
console.log(
  '🚀 ~ file: sliding-window.js:27 ~',
  'moon'.slice(1).concat('moon'[0])
);
console.log('🚀 ~ file: sliding-window.js:27 ~', 'moon'.slice(1));
