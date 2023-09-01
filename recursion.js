/**
 * @description
 * @author Charles
 * @param {string} str
 * @return {number}
 */
function getLength(str) {
  if (str === '') {
    return 0;
  }
  return 1 + getLength(str.substring(1));
}

/**
 * @description
 * @author Charles
 * @param {number} num
 */
function getNumber(num) {
  if (num <= 0) {
    return;
  } else {
    getNumber(num - 1);
    console.log('🚀 ~ file: recursion.js:25 ~ getNumber ~ num:', num);
  }
}

getNumber(3);
