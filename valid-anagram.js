const stringA = 'listenn';
const stringB = 'silentn';

// #1 split(), sort(), join()

function isAnagramA(strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }
  return strA.split('').sort().join() === strB.split('').sort().join();
}

console.log(
  '🚀 ~ file: valid-anagram.js:7 ~ isAnagram ~ isAnagram:',
  isAnagramA(stringA, stringB)
);

// # hashMap

function isAnagramB(strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }
  const hashMap = {};
  for (const char of strA) {
    hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
  }
  for (const char of strB) {
    if (!hashMap[char]) {
      return false;
    }
    hashMap[char]--;
  }
  return true;
}

console.log(
  '🚀 ~ file: valid-anagram.js:7 ~ isAnagram ~ isAnagram:',
  isAnagramB(stringA, stringB)
);
