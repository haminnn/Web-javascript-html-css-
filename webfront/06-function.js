// 함수
// 함수 선언식
function sum(a,b){ //function 함수면(매개변수 목록)
    return a+b; //return : 함수 종료하고 다시 호출된 위치로 돌아가라는 의미, 출력이 있을 경우 return문 뒤에 명시해주면 된다.
}
console.log(sum(10,20));

// 함수 표현식(익명함수)
const asum = function(a,b){
    return a+b;
}

console.log(typeof asum, asum(10,20));

// 함수 매개변수의 이해
function getNumberTotal(){
    // 매개변수 선언과 관계없이 함수로 전달되는 모든 인수
    // arguments 배열로 전달된다.
    // console.log(arguments);
    // 매개 변수 모두 합산
    let result = 0;

    for(let i = 0; i < arguments.length; i++){
        if(typeof arguments[i] == "number" ) //숫자일때만 합산
        result += arguments[i];
    }
    return result;
}
console.log(getNumberTotal(1, 2, 3, 4, 5));
console.log(getNumberTotal(1, 2, "3", 4, 5));

// 함수는 1급 시민
// 함수는 Number, String 등과 동등한 객체이다.
// 특정 함수의 인수로 전달될 수 있다.
// 특정 함수의 출력으로 리턴될 수 있다.

function calc(val1, val2, func){ // 값1, 값2, 함수
    if(typeof func == "function"){ // 함수인지 체크
        func(val1, val2);
        // 특정 함수의 내부에서 거꾸로 호출되는 함수 : 콜백 함수
    }
}

// 콜백 함수 사용
calc(3, 4, function(v1, v2){
    console.log(v1 + v2);
});

calc(3, 4, function(v1, v2){
    console.log(v1 * v2);
});

// ES6 : 화살표 표기법
const f1 = function(){
    return "Hello"
};
// 위의 변수와 아래 변수는 동일한 결과값인데 메모리 사용법이 다르다.
const f1Arrow = () => "Hello"; //인수가 없을 경우()
console.log(f1(), f1Arrow());

const f2 = function(name){
    return "Hello" + name
}
const f2Arrow = name => "Hello" + name; //인수가 1개 들어갈때는 이와 같이 작성 가능
console.log(f2("Bit"), f2Arrow("Bit"))

const f3 = function(a, b){
    return a + b
};
const f3Arrow = (a,b) => a+b;
// const f3Arrow = (a,b) => {return a + b}; 리턴값으로 해도 상관없다.

console.log(f3(10,20), f3Arrow(10,20));

// 화살표 함수
// 콜백 함수 - 화살표 함수로 사용하는 경우가 많다

calc(10, 20, (v1, v2) => {
    console.log(v1 + v2)
});