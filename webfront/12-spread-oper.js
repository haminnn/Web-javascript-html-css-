// 배열 전개 연산
const arr1 = ['홍길동', '장길산'];
const arr2 = ['임꺽정', '전우치'];
console.log(arr1,arr2);
// 두 배열을 하나의 배열로 합치려면?
// ES5 방식
// 방법 1. 개별 요소를 직접 접근해서 추출
let combined = [];
combined = [arr1[0], arr1[1], arr2[0], arr2[1]];
console.log("combined m1:", combined);

// 방법 2. Array.concat 메소드
combined = arr1.concat(arr2);
console.log("combined m2:", combined);

// 방법 3.
combined = [].concat(arr1, arr2);
console.log("combined m3:", combined);

// ES6 way
combined = [...arr1, ...arr2]; // ...개별 요소들을 해체해서 풀어낸다.
console.log("ES6 spread:", combined)

// 배열의 전개
let [first, second, third = "empty", ...others ] = arr1; // ['홍길동', '장길산']
console.log(first, second, third, others); // 홍길동 장길산 empty []

[first, second, third = "empty", ...others ] = combined; //['홍길동', '장길산', '임꺽정', '전우치']
console.log(first, second, third, others); // 홍직동 장길산 임꺽정 ['전우치']

// 객체의 전개
const obj1 = {one: 1, two: 2, other: 0};
const obj2 = {three: 3, four: 4, other: -1};
console.log(obj1, obj2);
// ES5 way
// 방법 1.

combined = {
    one: obj1.one,
    two: obj1.two,
    three: obj2.three,
    four: obj2.four,
    other: obj2.other
}
console.log("combined obj:", combined);

// ES6 way
combined ={
    ...obj1, //obj1의 모든 속성 전개
    ...obj2, //obj2의 모든 속성 전개
}
console.log("combined obj1, obj2:", combined)

// 전개 순서가 중요
combined = {
    ...obj2,
    ...obj1,
}
console.log("combined obj2, obj1:", combined)