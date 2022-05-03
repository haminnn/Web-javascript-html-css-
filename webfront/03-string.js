// String 타입
const s1 = "Modern JavaScript and Java"; // 리터럴
const s2 = String("Modern JavaScript"); // String 객체 함수 이용
console.log(s1, typeof s1);
console.log(s2, typeof s2);

// .length : 길이
console.log(s1, s1.length);

// 주요 메소드들
console.log(s1);

// 문자열 추출 메소드
console.log(s1.charAt(7)); // ==s1[7]
console.log(s1.substring(7)); // from ~ 끝까지
console.log(s1.substring(7, 17)); // from, end

// 검색 메소드
console.log("==== 검색");
console.log(s1);

let position = s1.indexOf("Java"); // 처음부터 Java를 검색
console.log("1st Java", position);
position = s1.indexOf("Java", position + 4); // 검색 시작 위치 수정
console.log("2nd Java", position);
position = s1.indexOf("Java", position + 4); // 검색할 내용이 없다
console.log("3rd Java", position);

console.log(s1.lastIndexOf("Java")); // 뒤쪽으로부터 문자열 검색

// 문자열 치환
console.log("==== 치환");
console.log(s1);
console.log(s1.replace("JavaScript", "JS"));

// 치환 작업을 해도 원본 문자열은 변경되지 않음
console.log(s1);

// 좌우 화이트 스페이스 제거
console.log("==== 화이트 스페이스 제거")
let s3 = "     Hello     ";
console.log(s3);
console.log(s3.trim());

// ES6 내용들
// escape 문자 -> 매우 주의
// \n : 개행 문자
// \t : 탭 문자
// \' : 작은 따옴표
// \" : 큰 따옴표
// \` : 백틱(ES6)
// \$ : 달러 기호(ES6)

let message = "He said, \"Hello\"";
console.log(message)

// 현재 기온은 _도 입니다.
message = "현재 기온은 " + 24 + "도입니다.";
console.log(message);

// 템플릿 문자열
let temp = 24;

message = `현재 기온은 ${temp}도 입니다.`;
console.log(message)

// 여러 줄 문자열
message = "예전에는 여러 줄 문자열을 만드는 게 \n쉽지 않았습니다."
console.log(message);

message = `
하지만 ES6에서는
아주 손쉽게
여러 줄 문자열을 만들 수 있습니다.`

console.log(message);
