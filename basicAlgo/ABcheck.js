// Using the JavaScript language, have the function `ABCheck(str)` take the str parameter being passed and return the true if the characters a and b are separated by exactly 3 places anywhere in the string at least once Otherwise return the false.
// (`ABCheck(str)` 함수를 작성하세요. 문자열(str)이 주어졌을때, `ABCheck(str)` 주어진 문자열에서 함수는 문자 a 와 b 사이가 문자열 안에서 한번이라도 정확히 3글자 떨어져 있으면 true를 반환하고 그렇지 않은 경우는 모두 false 를 반환합니다.)

// For example, `lane Borrowed` would result in true because there is exactly three characters between `a` and `B`
// (예를들어, `lane Borrowed` 문자열은 `a` 와 `B` 사이가 정확히 3글자 떨어져 있으므로 true 를 반환하게 됩니다.)

// You should consider about space and capital character.
// (문자 사이의 공백도 한글자로 취급하며, 대문자 A와 B도 소문자와 동일하게 생각해주셔야합니다.)

// Please Note: you have to take care of `undefined` input case
// (노트: `undefined` 를 매개변수로 넣는 케이스도 고려하셔야 합니다.)

// 처음 접근한 방법

// - if a와 b 사이에 3글자 존재하면 true (공백도 글자 취급) str.splite('') 사용?
// - if undefined 일 때 케이스 (예외 처리)
// - for 문으으로 a와 b사이에 length 가 3이면 true

// My solution

function ABCheck(str) {
  if (str === undefined) return false;
  str = str.toLowerCase();
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'a' && arr[i + 4] === 'b') {
      return true;
    }
    if (arr[i] === 'b' && arr[i + 4] === 'a') {
      return true;
    }
  }
  return false;
}

// 놓친부분
// - 대소문자 경우와 a b 의 순서도 고려했어야했다.

// 테스트는 통과 했지만 두번의 if 문을 || 을 사용해서 한번에 작성 했으면 더 깔끔했을 것 이다.

function ABCheck(str) {
  if (str === undefined) return false;
  str = str.toLowerCase();
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] === 'a' && arr[i + 4] === 'b') ||
      (arr[i] === 'b' && arr[i + 4] === 'a')
    ) {
      return true;
    }
  }
  return false;
}
