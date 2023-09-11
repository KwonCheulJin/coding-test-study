/**
 * @description
 * @author Charles
 * @param {string[]} arr
 * @return {string[][]}
 */
function permutation(arr) {
  const result = [];

  //DFS
  /**
   * @author Charles
   * @param {number} i
   * @param {string[]} arr
   */
  const dfs = (i, arr) => {
    console.log(
      '🚀 ~ file: permutations.js:17 ~ dfs ~ i, arr:',
      i,
      arr,
      arr.length
    );
    if (i === arr.length) {
      return result.push([...arr]);
    }

    for (let j = i; j < arr.length; j++) {
      //swap
      [arr[i], arr[j]] = [arr[j], arr[i]];
      //dfs
      console.log('🚀 ~ file: permutations.js:32 ~ dfs ~ arr:', arr);
      dfs(i + 1, arr);
      //swap back
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };
  dfs(0, arr);
  return result;
}

console.log(
  '🚀 ~ file: permutations.js:30 ~ permutation:',
  permutation(['a', 'b', 'c'])
);

/**
 * @author Charles
 * @param {string} strA
 * @param {string} strB
 * @return {boolean}
 */
function checkPermutation(strA, strB) {
  if (strA === '' || strB === '' || strA.length !== strB.length) {
    return false;
  }

  return strA.split('').sort().join('') === strB.split('').sort().join('');
}

console.log(
  '🚀 ~ file: permutations.js:61 ~ checkPermutation(strA, strB):',
  checkPermutation('', 'aab')
);
console.log(
  '🚀 ~ file: permutations.js:61 ~ checkPermutation(strA, strB):',
  checkPermutation('a', '')
);
console.log(
  '🚀 ~ file: permutations.js:61 ~ checkPermutation(strA, strB):',
  checkPermutation('a', 'aab')
);
console.log(
  '🚀 ~ file: permutations.js:61 ~ checkPermutation(strA, strB):',
  checkPermutation('aba', 'abb')
);
console.log(
  '🚀 ~ file: permutations.js:61 ~ checkPermutation(strA, strB):',
  checkPermutation('hooh', 'oohh')
);
console.log(
  '🚀 ~ file: permutations.js:61 ~ checkPermutation(strA, strB):',
  checkPermutation('aaabbbccc', 'abcabcabc')
);
console.log(
  '🚀 ~ file: permutations.js:61 ~ checkPermutation(strA, strB):',
  checkPermutation('abaa', 'abba')
);

// hash map 방법
// strA의 문자열 각각의 출현빈도를 저장
// strB -> 반복문 -> 출현빈도값을 해쉬맵과 비교
// 현재 글자가 해쉬맵에 존재하고, 값이 0이 아닐경우 -1 해주기
/**
 * @author Charles
 * @param {string} strA
 * @param {string} strB
 * @return {boolean}
 */
function checkPermutationHashMap(strA, strB) {
  if (strA === '' || strB === '' || strA.length !== strB.length) {
    return false;
  }

  let counts = new Map();

  for (let char of strA) {
    counts.set(char, counts.has(char) ? counts.get(char) + 1 : 1);
  }

  for (let char of strB) {
    if (counts.get(char) && counts.get(char) !== 0) {
      counts.set(char, counts.get(char) - 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(
  '🚀 ~ file: permutations.js:61 ~ checkPermutationHashMap(strA, strB):',
  checkPermutationHashMap('', 'aab')
);
console.log(
  '🚀 ~ file: permutations.js:61 ~ checkPermutationHashMap(strA, strB):',
  checkPermutationHashMap('a', '')
);
console.log(
  '🚀 ~ file: permutations.js:61 ~ checkPermutationHashMap(strA, strB):',
  checkPermutationHashMap('a', 'aab')
);
console.log(
  '🚀 ~ file: permutations.js:61 ~ checkPermutationHashMap(strA, strB):',
  checkPermutationHashMap('aba', 'abb')
);
console.log(
  '🚀 ~ file: permutations.js:61 ~ checkPermutationHashMap(strA, strB):',
  checkPermutationHashMap('hooh', 'oohh')
);
console.log(
  '🚀 ~ file: permutations.js:61 ~ checkPermutationHashMap(strA, strB):',
  checkPermutationHashMap('aaabbbccc', 'abcabcabc')
);
console.log(
  '🚀 ~ file: permutations.js:61 ~ checkPermutationHashMap(strA, strB):',
  checkPermutationHashMap('abaa', 'abba')
);
