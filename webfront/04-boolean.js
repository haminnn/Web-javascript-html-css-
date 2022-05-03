// boolean(논리형) : true / false
// 비교/논리 연산의 결과
// 논리의 조합 AND(&&), OR(||), NOT(!)으로 조합

let v1; // 할당되지 않은 상태
let v2 = null; // 빈 객체 생성
console.log(typeof v1, typeof v2)
// undifined : 자바스크립트 엔진이 사용
// null : 프로그래머에게 허용된 타입

// null 체크
console.log(v2, typeof v2, v2 == null);
// 개발자가 임의로 undefined를 할당하기도 한다.
v2 = undefined; //undefined 할당
// undefined 체크
console.log(v2, typeof v2, v2 == undefined);

// == 과 ===
// == : 타입과 관계없이 값만 비교
// === : 타입과 값을 같이 비교
console.log(2022 == "2022"); // true
console.log(2022 === "2022"); // false (type이 다음)

// Boolean 함수 값을 넣으면 논리 값을 추출
// number, string -> 값이 있으면 true, 값이 없으면 false
console.log(Boolean("String"), Boolean(""));
console.log(Boolean(2022), Boolean(0));

console.log(true && "Test"); // -> Test
console.log(false && "Test"); // -> false

console.log(true || "Test"); // -> true
console.log(false || "Test"); // -> Test




