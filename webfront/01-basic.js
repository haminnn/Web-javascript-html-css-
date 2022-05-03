// 자바 스크립트 한 줄 주석
/* 자바 스크립트
    여러 줄 주석 */

// 전역 객체 console
console.info("정보 메시지");
console.log("일반 로그 메시지");
console.warn("경고 메시지");
console.error("에러 메시지");

// var, let, const : 변수 할당 방법
var testVar = 10; //ES6 이전 방식

let testLet = "let"; //let: 재할당 가능

const TEST_CONST = "const"; //const: 재할당 불가 -> 상수처럼 이용가능, 선언과 동시에 할당

console.log(testVar, testLet, TEST_CONST);

//변경 시도
testVar = "var changed";
testLet = "let changed";
// TEST_CONST = "const changed"; // ERROR: const는 재할당 불가

console.log(testVar, testLet, TEST_CONST);

// 우선 const 먼저 고료 -> 그 값이 바뀌는 것이 자연스럽다 판단되면 -> let으로 교체 권장
// 자바 스크립트는 데이터 타입이 고정되지 않고 할당 시 결정

let v = "JavaScript";
console.log(v, "->", typeof v); //typeof 키워드
v = 2022;
console.log(v, "->", typeof v);