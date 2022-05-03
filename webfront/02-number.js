// Number: 수치 타입
// 산술 연산 가능
let n1 = 5; //Literal (소스에 직접 입력)
let n2 = Number(5); // Number 객체를 이용한 생성
console.log(n1, "==", n2, "?", n1==n2);
console.log(typeof n1,typeof n2);

// 내장 객체 Math 활용
console.log(Math.PI);
console.log(Math.max(1, 5, 3, 2, 6, 7), Math.min(9, 2, 6, 2, 4)); //최대값, 최소값
console.log(Math.round(3.567), Math.floor(3.567)); //반올림, 버림

// 다양한 수치 데이터의 입력
const red = 0xFF0000; // 16진수
const oct = 0o10; // 8진수
const bin = 0b1100; // 2진수
console.log(red, oct, bin);

console.log("==== casting");
// parseInt, parseFloat : Number 형으로 형변환 함수

console.log(parseInt("011"));
console.log(parseInt("011", 2)); // 진법 변환
console.log(parseInt("123.456")); // 정수 형태만 반환한다.
console.log(parseFloat("123.456")); // 123.456

// 주의: NaN(Not a Number)
let v = parseInt("abc123456"); // 숫자형으로 변환할 수 없는 형태의 문자열
console.log(v, typeof v);
// NaN를 연산에 포함 -> NaN
console.log(v + 10); // NaN
// 수치형 변수가 NaN 확인
console.log(isNaN(v));

// Infinity
v = 1/0;
console.log(v, typeof v);

console.log(v + 10); // Infinity + number -> Infinity

// 유한수 여부 확인: isFinite
console.log("1/0 is Finite ?", isFinite(1/0));
console.log("2022 is Finite ?", isFinite(2022));
console.log("NaN is Finite ?", isFinite(parseInt("abcde")));
// Number 이면서 유한수일경우만 True가 나오는 것을 알 수 있음.

