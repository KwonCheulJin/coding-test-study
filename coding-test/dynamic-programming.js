// DP

//1. dp 배열 만들기
//2. 1계단, 2계단 미리 저장
//3. 반복문 -> dp테이블 채워주기
//4. formula(공식) 적용시키기
//5. 최종결과값 리턴하기

/**
 * @author Charles
 * @param {number} n
 * @return {number}
 */
function climbingStairs(n) {
  if (n === 0) {
    return 0;
  }
  let dp = new Array(n + 1);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log(
  '🚀 ~ file: dynamic-programming.js:10 ~ climbingStairs ~ climbingStairs(n):',
  climbingStairs(3)
);
console.log(
  '🚀 ~ file: dynamic-programming.js:10 ~ climbingStairs ~ climbingStairs(n):',
  climbingStairs(4)
);
console.log(
  '🚀 ~ file: dynamic-programming.js:10 ~ climbingStairs ~ climbingStairs(n):',
  climbingStairs(5)
);
console.log(
  '🚀 ~ file: dynamic-programming.js:10 ~ climbingStairs ~ climbingStairs(n):',
  climbingStairs(6)
);
console.log(
  '🚀 ~ file: dynamic-programming.js:10 ~ climbingStairs ~ climbingStairs(n):',
  climbingStairs(7)
);
