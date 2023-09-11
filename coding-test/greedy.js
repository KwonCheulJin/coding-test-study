/**
 * @author Charles
 * @param {number[]} meeting
 */
function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  let endTime = 0;
  for (let times of meeting) {
    if (times[0] >= endTime) {
      answer++;
      endTime = times[1];
    }
  }
  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
