// 배열의 생성 1.
const a1 = new Array(10); // 10개 공간을 가진 빈 배열
const a2 = new Array(); // 빈 배열
const a3 = new Array(2022, "JavaScript", true); // 배열의 초기값 부여
console.log(a1, a1.length);
console.log(a2, a2.length);
console.log(a3, a3.length);

// 배열 생성 2. : 리터럴 (추천하는 방식)
const a4 = [];
const colors = ["red", "green", "blue", "yellow"];
console.log(a4, a4.length);
console.log(colors, colors.length);

//타입의 확인
console.log(typeof a1, typeof a4); // object object라고 나오기에 실제 배열인지 알 수가 없다.
console.log(Array.isArray(a1), Array.isArray(a4)); //추천

//객체도 배열처럼 접근할 수 있다.
const person = {
    name: "홍길동",
    job: "도적"
};

console.log(person.name, person['name']); // 속성 접근, 배열의 인덱스

// 자바스크립트의 배열을 인덱스의 범위를 엄격하게 체크하지 않음
const arr = [];
console.log(arr, arr.length);
// 인덱스 범위 초과 접근
arr[10] = "Overflow";
console.log(arr, arr.length);

console.log("==== 배열의 주요 메소드")
// concat: 배열 합치기
const vages = ["배추", "무", "쪽파"];
const sources = ["소금", "고춧가루", "새우젓"];
console.log(vages, sources);
const ingr = vages.concat(sources);
console.log(ingr);

// join: 특정 문자열을 기준으로 합친다(문자열)
console.log(ingr.join(", "))


// push, pop -> Stack 처럼 사용가능
let fruits = ["바나나", "오렌지", "사과", "망고"];
console.log("STACK:", fruits);

// push : 배열의 맨 뒤에 요소 추가
fruits.push("키위");
console.log("STACK:", fruits);

console.log("POP:", fruits.pop());
console.log("STACK:", fruits);
console.log("POP:", fruits.pop());
console.log("POP:", fruits.pop());
console.log("STACK:", fruits);

// push와 shift -> Queue 처럼 사용 가능
fruits = ["바나나", "오렌지", "사과", "망고"];
console.log("QUEUE:", fruits);
console.log("SHIFT:", fruits.shift());
console.log("QUEUE:", fruits);
console.log("SHIFT:", fruits.shift());
console.log("SHIFT:", fruits.shift());
console.log("QUEUE:", fruits);

// splice
fruits = ["바나나", "오렌지", "사과", "망고"];
console.log("원본:", fruits);
console.log("SPLICE:", fruits.splice(2)); // 인수가 1개: start ~
console.log("원본:", fruits);

fruits = ["바나나", "오렌지", "사과", "망고"];
console.log("원본:", fruits);
console.log("SPLICE:", fruits.splice(2, 1)); // 인수가 2개: start, count
console.log("원본:", fruits);

fruits = ["바나나", "오렌지", "사과", "망고"];
console.log("원본:", fruits);
console.log("SPLICE:", fruits.splice(2, 1, "키위", "수박")); // 인수가 3개 이상 : start, count, 삽입할 요소 목록
console.log("원본:", fruits);

// reverse : 순서 뒤집기(배열 반전)
fruits.reverse();
console.log("REVERSE:", fruits);

// sort (기본: 오름차순 정렬)
fruits = ["바나나", "오렌지", "사과", "망고"];
fruits.sort();
console.log("SORT:", fruits);

// 정렬 키함수 정의 -> 원하는 기준대로 정렬할 수 있다.
fruits.sort(function(v1, v2){
    // 정렬 키함수의 리턴
    // 순번이 같다 == 0
    // v1이 v2보다 앞이다 == -1
    // v1이 v2보다 뒤다 == 1
    if (v1 < v2) return 1;
    if (v1 > v2) return -1;
    return -0;
});
console.log("SORT DESC:", fruits);

// split: 문자열 분철 -> Array
const str = "JavaScript is something strange than other language";
let chunks = str.split(" ");
console.log(chunks);

