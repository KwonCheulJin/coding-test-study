/**
 * @author Charles
 * @param {number[]} array
 * @return {number}
 */
function solution(array) {
  const counts = new Map();
  let maxCount = 0;
  let modes = [];

  for (let i = 0; i < array.length; i++) {
    let count;
    if (counts.get(array[i])) {
      count = counts.get(array[i]) + 1;
    } else {
      count = 1;
    }
    counts.set(array[i], count);

    if (count > maxCount) {
      maxCount = count;
      modes = [array[i]];
    } else if (count === maxCount) {
      modes.push(array[i]);
    }
  }
  console.log(modes);
  return modes.length === 1 ? modes[0] : -1;
}

console.log(
  '🚀 ~ file: mode.js:7 ~ solution ~ solution1:',
  solution([1, 2, 3, 3, 3, 4])
);
console.log(
  '🚀 ~ file: mode.js:7 ~ solution ~ solution2:',
  solution([1, 1, 2, 2])
);
console.log('🚀 ~ file: mode.js:7 ~ solution ~ solution3:', solution([1]));

console.log(
  [...Array(10)].map((_, index) => index + 1).filter(nums => nums % 2 !== 0)
);

/**
 * @author Charles
 * @param {number} a
 * @param {number} b
 */
const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

console.log(gcd(6, 10));
