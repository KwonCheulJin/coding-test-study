/**
 * @author Charles
 * @param {number} n
 * @return {boolean}
 */
const isPrime = n => {
  if (n === 0 || n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
