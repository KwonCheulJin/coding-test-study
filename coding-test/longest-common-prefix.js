/**
 * @author Charles
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  let prefix = '';

  if (strs === null || strs.length === 0) {
    return prefix;
  }

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    console.log(
      '🚀 ~ file: longest-common-prefix.js:15 ~ longestCommonPrefix ~ char:',
      char
    );

    for (let j = 1; j < strs.length; j++) {
      console.log(
        '🚀 ~ file: longest-common-prefix.js:18 ~ longestCommonPrefix ~ strs[j][i]:',
        strs[j][i]
      );
      if (strs[j][i] !== char) {
        return prefix;
      }
    }
    // build prefix
    prefix = prefix + char;
  }
  return prefix;
}

console.log(
  '🚀 ~ file: longest-common-prefix.js:7 ~ longestCommonPrefix ~ longestCommonPrefix(strs):',
  longestCommonPrefix(['flower', 'flow', 'flight'])
);
console.log(
  '🚀 ~ file: longest-common-prefix.js:7 ~ longestCommonPrefix ~ longestCommonPrefix(strs):',
  longestCommonPrefix(['dog', 'racecar', 'car'])
);
