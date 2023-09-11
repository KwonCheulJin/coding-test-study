// 유저가 주문한 음식
// 유저가 주문한 음식 데이터를 이용해 음식을 가장 다양하게 주문한 유저는 누구인지 알아보려 합니다. 유저는 주문 한 번당 음식 여러 종류를 주문하며, 같은 음식을 여러 번 주문할 수도 있습니다.

// 예를 들어 음식 주문 데이터가 다음과 같은 경우

// ["alex pizza pasta", "alex pizza pizza", "alex noodle", "bob pasta", "bob noodle sandwich pasta", "bob steak noodle"]

// "alex"는 "pizza", "pasta", "noodle"을 주문했습니다.
// "bob"은 "pasta", "noodle", "sandwich", "steak"를 주문했습니다.
// 따라서 "bob"이 주문한 음식이 총 네 종류로 가장 많습니다.

// 유저 ID와 각 유저가 주문한 음식이 문자열 형태로 들어있는 배열 orders가 매개변수로 주어질 때, 가장 많은 종류의 음식을 주문한 유저의 아이디를 배열에 담아 return 하도록 solution 함수를 완성해주세요. 만약, 그런 유저가 여러 명이면 해당 유저들을 오름차순으로 정렬해 return 하면 됩니다.

// 제한사항
// 1 ≤ orders의 길이 ≤ 200,000
// orders의 원소는 음식 주문 데이터가 "유저ID 음식1 음식2 ..." 순서로 들어있습니다.
// 유저는 한 번에 최대 5개까지 음식을 주문합니다.
// 유저 ID와 음식 이름은 공백(스페이스 바) 하나로 구분해서 주어집니다.
// 음식과 음식도 공백(스페이스 바) 하나로 구분해서 주어집니다.
// 유저 ID와 음식 이름은 길이가 1 이상 10 이하인 문자열이며, 알파벳 소문자로만 이루어져 있습니다.
// 입출력 예
// orders result
// ["alex pizza pasta", "alex pizza pizza", "alex noodle", "bob pasta", "bob noodle sandwich pasta", "bob steak noodle"]["bob"]
// ["alex pizza pasta steak", "bob noodle sandwich pasta", "choi pizza sandwich pizza", "alex pizza pasta steak"]["alex", "bob"]
// 입출력 예 설명
// 입출력 예 #1
// 문제 예시와 같습니다.

// 입출력 예 #2

// "alex"와 "bob"은 음식 세 종류를 주문했으며, "choi"는 두 종류를 주문했습니다. 따라서 오름차순 정렬하여 ["alex", "bob"]을 return하면 됩니다.

function solution(orders) {
  let arr = [],
    user = {};

  orders.forEach(order => {
    const temp = order.split(' ');
    user[temp[0]] == undefined
      ? (user[temp[0]] = [...temp])
      : (user[temp[0]] = [...user[temp[0]], ...temp]);
  });

  for (let key in user) {
    user[key] = [...new Set(user[key])];
    arr.push(user[key]);
  }

  let max = Math.max.apply(
    null,
    arr.map(el => el.length)
  );

  return arr
    .filter(_ => _.length === max)
    .reduce((acc, _) => {
      acc.push(_[0]);
      return acc;
    }, []);
}
console.log(
  solution([
    'alex pizza pasta',
    'alex pizza pizza',
    'alex noodle',
    'bob pasta',
    'bob noodle sandwich pasta',
    'bob steak noodle',
  ])
);

// 예산에 맞는 물건 구매
// 문제설명
// 두 가지 물품을 구매할 수 있도록 예산을 배정받았습니다, 첫 번째 물품의 가격은 a원, 두 번째 물품의 가격은 b원 입니다. 각 물품은 여러 개 구매할 수 있으며, 구매하지 않아도 괜찮습니다.
// 물품을 구매하는 여러 가지 방법 중, 예산을 남기지 않고 물품을 구매하는 방법의 수를 구하려 합니다. 예를 들어 예산이 23000원이고, 첫 번째 물품의 가격 a = 3000원, 두 번째 물품의 가격 b = 5000원인 경우, 예산에 딱 맞게 물건을 구매하는 방법은 다음과 같이 두 가지 방법이 있습니다.

// 첫 번째 물품을 1개(3000원), 두 번째 물품을 4개(20000원) 구매합니다.
// 첫 번째 물품을 6개(18000원), 두 번째 물품을 1개(5000원) 구매합니다.
// 위 두 가지 방법 외에 예산을 남기지 않고 물품을 구매할 수 있는 방법은 없습니다.
// 첫 번째 물품의 가격 a, 두 번째 물품의 가격 b, 예산 budget이 매개변수로 주어질 때, 예산을 남기지 않고 물품을 구매하는 방법의 가짓수를 return 하도록 solution 함수를 완성해주세요.
// 제한사항

// a는 1 이상 10,000 이하의 자연수입니다.
// b는 1 이상 10,000 이하의 자연수입니다.
// budget은 1 이상 1,000,000 이하의 자연수입니다.

// function solution(a, b, budget) {
//   // 3000 , 5000, 23000
//   let answer = 0;

//   for (let i = 0; i * a < budget; i++) {
//     for (let j = 0; j * b < budget; j++) {
//       if (budget - (i * a + j * b) === 0) answer++;
//     }
//   }

//   return answer;
// }

// 문제
// 유지비는 매달 k일에 청구됩니다. 그 날이 주말(토요일 & 일요일)이라면, 유지비는 제일 가까운 주말에 청구됩니다. 1월(매 연도의 첫 달)의 첫째 주 첫 날의 요일이 day로 주어지며, k는 매달 유지비를 지불해야 하는 날짜일 때 이러한 파라미터를 받아 1월부터 12월까지 k가 주말이면 0, 아니라면 1을 반환하는 배열을 반환하는 solution 함수를 작성하세요.

// 제약
// 1월 첫째주의 날짜는 다음과 같이 주어집니다.
// 월요일: 0, 화요일: 1, 수요일: 2, 목요일: 3, 금요일: 4, 토요일 5, 일요일 6
// k는 1과 28 사이의 자연수입니다.
// 각 달의 일수는 [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] 입니다. 윤년 및 휴일은 고려하지 않습니다.

// 테스트 케이스
// #1 -> day = 6, k = 1, result = [1,0,0,1,0,0,1,0,0,1,0,0]
// #2 -> day = 6, k = 25, result = [0,1,1,0,0,1,0,0,0,0,1,0]

// 예제 #1
// 첫 번째 day는 일요일(6)이며, 유지비는 매월 1일(k)에 청구되어야 합니다. 1월의 1일이 주말이므로, result의 첫 번째 요소의 값은 1입니다. 1월부터 12월까지 매 달의 1일의 요일은 다음과 같습니다.

// 1월 – 일요일
// 2월 – 수요일
// 3월 – 수요일
// 4월 – 토요일
// 5월 – 월요일
// 6월 – 목요일
// 7월 – 토요일
// 8월 – 화요일
// 9월 – 금요일
// 10월 – 일요일
// 11월 – 수요일
// 12월 – 금요일
// 따라서 반환 배열은 [1,0,0,1,0,0,1,0,0,1,0,0] 입니다.

// 예제 #2
// 첫 번째 day는 일요일(6)이며, 유지비는 매월 25일(k)에 청구되어야 합니다. 1월의 25일이 주말이 아니므로, result의 첫 번째 요소의 값은 0입니다. 1월부터 12월까지 매 달의 25일은 수, 토, 토, 화, 목, 일, 화, 금, 월, 수, 토, 일입니다. 따라서 반환 배열은 [0,1,1,0,0,1,0,0,0,0,1,0] 입니다.

// function solution(day, k) {
//   let answer = [];

//   const MONTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//   // month 증가시 일수 누적
//   let sumOfDay = 0;

//   // 1월부터 12월까지 순회
//   for (let i = 0, len = MONTHS.length; i < len; i++) {
//     // 1월인 경우(else) day + k 더한 값에 1 빼기 -> 나머지를 통해 요일을 구하기 위함
//     // 예: day = 6(일요일), k = 1인 경우 6 + 1 - 1 = 6
//     // 예: day = 6(일요일), k = 1인 경우 6 + 25 - 1 = 30
//     if (i != 0) sumOfDay += MONTHS[i - 1];
//     else sumOfDay = day + k - 1;

//     // 누적 일수를 7로 나눈 나머지가 해당 달 지급일의 요일
//     let currentDay = sumOfDay % 7;

//     // 토, 일이면 1 push, 아니면 0 push
//     if (currentDay == 5 || currentDay == 6) answer.push(1);
//     else answer.push(0);
//   }

//   return answer;
// }
