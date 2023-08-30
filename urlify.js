/**
 * @author Charles
 * @param {string} str
 * @param {number} n
 * @return {string}
 */
function urlifyV1(str, n) {
  return str.trim().split(' ').join('%20');
}

console.log(urlifyV1('  Mr John Smith   ', 13));

// javascript built in method 사용 불가 시

// s = " a b c ", n = 5

// 아는 부분
// 1. 문자열의 실제 길이 = n
// 2. 문자열 내부의 공백 갯수 = s.length - n

// 모르는 부분
// 1. 문자열 앞에 있는 공백의 갯수
// 2. 문자열 뒤에 있는 공백의 갯수

// Logic
// 1. 문자열 앞공백 처리
// 2. 문자열 사이 공백 -> %20 바꿔주기
// 3. 문자열 뒷공백 처리하기

/**
 * @author Charles
 * @param {string} str
 * @param {number} n
 * @return {string}
 */
function urlifyV2(str, n) {
  let output = '';
  let whitespace = str.length - n;
  let actualStartIndex = 0;

  let flag = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ' && !flag) {
      actualStartIndex++;
    } else {
      flag = true;
    }
  }

  for (
    let i = actualStartIndex;
    i < str.length - (whitespace - actualStartIndex);
    i++
  ) {
    output += str[i] === ' ' ? '%20' : str[i];
  }

  return output;
}

console.log(urlifyV2('  Mr John Smith   ', 13));
