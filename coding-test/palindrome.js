// #1. 추가 문자열 활용

/**
 * @author Charles
 * @param {string} str
 * @return {boolean}
 */
function checkPalindrome(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed === str;
}

/**
 * @author Charles
 * @param {string} str
 * @return {boolean}
 */
function checkPalindromeV2(str) {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}

console.log(
  '🚀 ~ file: palindrome.js:13 ~ checkPalindrome:',
  checkPalindrome('level')
);
console.log(
  '🚀 ~ file: palindrome.js:13 ~ checkPalindromeV2:',
  checkPalindromeV2('level')
);

console.log(
  '🚀 ~ file: palindrome.js:13 ~ checkPalindrome:',
  checkPalindrome('david')
);
console.log(
  '🚀 ~ file: palindrome.js:13 ~ checkPalindromeV2:',
  checkPalindromeV2('david')
);

// #2. Two Pointer 활용

/**
 * @author Charles
 * @param {string} str
 * @return {boolean}
 */
function checkPalindromeTwoPointer(str) {
  const length = str.length;
  const middle = Math.floor(length / 2);
  for (let i = 0; i < middle; i++) {
    if (str.charAt(i) !== str.charAt(length - 1 - i)) {
      return false;
    }
  }
  return true;
}

console.log(
  '🚀 ~ file: palindrome.js:51 ~ checkPalindromeTwoPointer ~ checkPalindromeTwoPointer:',
  checkPalindromeTwoPointer('level')
);
console.log(
  '🚀 ~ file: palindrome.js:51 ~ checkPalindromeTwoPointer ~ checkPalindromeTwoPointer:',
  checkPalindromeTwoPointer('david')
);
