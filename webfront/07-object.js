// // 객체 생성 1.
// const person = new Object(); // 새 오브젝트
// //  동적으로 속성 추가 가능
// console.log(person);

// person.name = "최하민";
// person.age = 27;
// person.showInfo = function() {
//     let message = `Name: ${this.name}, age: ${this.age}`
// 	console.log(message);
// }
// console.log(person)
// person.showInfo();

// // 객체 생성 2. : JSON 사용
// // KEY:VALUE 쌍으로 속성을 구성
// const person = {
//     name: "최하민",
//     age: 27,
//     showInfo: function(){
//         console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }
// }
// console.log(person);
// person.showInfo();

// 객체 생성 3. prototype 영역(공유영역) 활용
const Member = function(name, position) {
    this.name = name;
    this.position = position;
}

let m1 = new Member("김백호", "PF");
let m2 = new Member("서태웅", "SF");

console.log(m1);
console.log(m2);

m1.sayHi = function(){
    console.log(`${this.name}님이 부릅니다.`);
}
console.log(m1);
console.log(m2);

// prototype 영역을 이용하면 해당 객체를 new해서 만든 모든 객체레 속성을 공유시킬 수 있다.
// 상속의 일부 개념을 구현 가능
console.log(m1.constructor); // 기반 클래스 확인
console.log(Member.prototype);

// 프로토 타입 영역에 공유 속성 추가
Member.prototype.introduce = function(){
    console.log(`Name: ${this.name}, Position: ${this.position}`);
}
console.log(Member.prototype);

m1.introduce();
m2.introduce();

