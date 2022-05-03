// 연습문제 1
// 2단~9단까지 구구단 출력 (for, while 2가지 버전으로)


// for(let a = 2; a < 10; a++){
//     for(let b = 1; b < 10; b++){
//         console.log(a + "*" + b + "=" + (a*b));
//     }
// }

// console.log("[구구단: while 버전]");
// let x = 2;
// let y = 1;
// let z = 0;
// while(x < 10){
//     while(y < 10){
//         z = x * y;
//         console.log(x+"*"+y+"="+z);
//         y++;
//     }
//     x ++;
//     y = 1;
// }
    


// 연습문제 2
// *****
// ****
// ***
// **
// *
// 위와 같이 출력하는 프로그램 (for, while 2가지 버전으로)

// console.log("역삼각형(for문 버전)");
// for(let a = 5;  a > 0; a--){
//     let n = "";
//     for(let b = 0; b < a; b++){
//         n+="*";
//     }
//     console.log(n);
// }

// console.log("역삼각형(while문 버전)");
// let count = 5;
// while(count > 0){
//     let stars = "";
//     let col = 0;
//     while(col < count){
//         stars += "*";
//         col++;
//     }
//     console.log(stars);
//     count--;
// }
function calcUsingCallback(v1, v2, func) {
    if (typeof func == "function") {
        console.log(func(v1, v2));
    }
}

calcUsingCallback(10, 20, function(v1, v2) {
    return v1 * v2;
});
