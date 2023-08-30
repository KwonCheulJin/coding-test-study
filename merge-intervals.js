/**
 * @author Charles
 * @param {number[][]} intervals
 * @returns {number[][]}
 */
function merge(intervals) {
  if (intervals.length === 0) {
    return [];
  } else if (intervals.length === 1) {
    return intervals;
  }

  // 구간 시작시간 기준으로 정렬
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [intervals[0]];

  for (let interval of intervals) {
    let previous = result[result.length - 1];
    // 1. 이전구간의 끝시간 >= 다음구간의 시작시간 -> 병합
    if (previous[1] >= interval[0]) {
      //merge
      previous[1] = Math.max(previous[1], interval[1]);
    } else {
      // 2. 아닐경우 병합 x -> 결과 리스트에 추가
      result.push(interval);
    }
  }

  return result;
}

console.log(
  '🚀 ~ file: merge-intervals.js:37 ~ merge(intervals):',
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  '🚀 ~ file: merge-intervals.js:37 ~ merge(intervals):',
  merge([
    [1, 4],
    [4, 5],
  ])
);
