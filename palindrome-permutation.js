/**
 * @description
 * @author Charles
 * @param {string} str
 * @returns {boolean}
 */
function checkPalinPerm(str) {
  let hashMap = new Map();
  let charCount = 0;
  str = str.toLowerCase();

  for (let char of str) {
    if (char === ' ') {
      continue;
    }
    if (hashMap.get(char)) {
      hashMap.delete(char);
    } else {
      hashMap.set(char, true);
    }

    charCount++;
  }

  if (charCount % 2 === 0) {
    return hashMap.size === 0;
  } else {
    return hashMap.size === 1;
  }
}

console.log(
  checkPalinPerm('Tact Coa'), //true
  checkPalinPerm('Tact Boa'), //false
  checkPalinPerm('aabbc'), //true
  checkPalinPerm('aabc') // false
);
