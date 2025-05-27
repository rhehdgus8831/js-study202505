
let number = 10;

//  변수는 중복 선언 불가능
// let number = 20;

// 블록 레벨 스코프를 지원함
// {} 중괄호 안에서 다시 만들 수 있음 하지만 중괄호 안에서만 사용 가능
if (true) {
    let number  = 30;
    console.log(`number in if : ${number}`);
}

console.log(`number in main : ${number}`);

