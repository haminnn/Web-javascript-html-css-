// 날짜 Date
let now = new Date(); // 현재 날짜와 시간
console.log(now);

let time = new Date(2022, 2, 25, 13, 34); // 연 월 일 시 분 초 // 월 정보는 0부터 시작
console.log(time);

// getter / setter의 사용
console.log("년도:", now.getFullYear()); // 년
console.log("월:", now.getMonth() + 1); // 월: 0부터 시작
console.log("일:", now.getDate()); // 일
console.log("요일:", now.getDay()); // 요일= 0: 일요일 ~6: 토요일
console.log("시:", now.getHours()); // 시
console.log("분:", now.getMinutes()); // 분

