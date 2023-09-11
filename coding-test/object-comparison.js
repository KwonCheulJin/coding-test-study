const obj1 = {
  a: 'a',
  b: 1,
  c: ['a', 'b', 'c'],
  d: {
    e: null,
    f: -1,
  },
};
const obj2 = {
  a: 'a',
  b: 1,
  c: ['a', 'b', 'c'],
  d: {
    e: null,
    f: -1,
  },
};

/**
 * @author Charles
 * @param {object} objA
 * @param {object} objB
 * @return {boolean}
 */
function isEqualV1(objA, objB) {
  let a = JSON.stringify(objA);
  let b = JSON.stringify(objB);

  return a.split('').sort().join('') === b.split('').sort().join('');
}

console.log(
  '🚀 ~ file: object-comparison.js:27 ~ isEqualV1 ~ isEqualV1:',
  isEqualV1(obj1, obj2)
);

/**
 * @author Charles
 * @param {object} objA
 * @param {object} objB
 * @return {boolean}
 */
function isEqualV2(objA, objB) {
  const checkObjects =
    objA && objB && typeof objA === 'object' && typeof objB === 'object';
  if (checkObjects && Object.keys(objA).length === Object.keys(objB).length) {
    return Object.keys(objA).reduce((equal, key) => {
      return equal && isEqualV2(objA[key], objB[key]);
    }, true);
  } else {
    return objA === objB;
  }
}

console.log(
  '🚀 ~ file: object-comparison.js:27 ~ isEqualV2 ~ isEqualV2:',
  isEqualV2(obj1, obj2)
);
