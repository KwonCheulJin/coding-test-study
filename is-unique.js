/**
 * @author Charles
 * @param {string} str
 * @return {boolean}
 */
function isUnique(str) {
  if (str.length === 0) {
    return true;
  }

  let hashMap = new Map();

  for (let char of str) {
    if (hashMap.has(char)) {
      return false;
    }
    hashMap.set(char, true);
  }
  return true;
}

console.log('🚀 ~ file: is-unique.js:19 ~ isUnique(str):', isUnique(''));
console.log('🚀 ~ file: is-unique.js:19 ~ isUnique(str):', isUnique('abcd'));
console.log('🚀 ~ file: is-unique.js:19 ~ isUnique(str):', isUnique('abccd'));
console.log('🚀 ~ file: is-unique.js:19 ~ isUnique(str):', isUnique('bhjjb'));
console.log('🚀 ~ file: is-unique.js:19 ~ isUnique(str):', isUnique('mdjq'));
console.log('🚀 ~ file: is-unique.js:19 ~ isUnique(str):', isUnique('geez'));

/**
 * @description
 * @author Charles
 * @param {string[]} participant
 * @param {string[]} completion
 * @returns {string}
 */
function notFinishPerson(participant, completion) {
  let map = new Map();
  let answer = '';
  for (let person of completion) {
    map.set(person, true);
  }

  for (let person of participant) {
    if (!map.has(person)) {
      answer = person;
    }
  }
  return answer;
}

console.log(
  '🚀 ~ file: is-unique.js:53 ~ notFinishPerson:',
  notFinishPerson(['leo', 'kiki', 'eden'], ['kiki', 'eden'])
);
