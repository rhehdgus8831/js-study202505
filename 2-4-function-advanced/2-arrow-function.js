

// 함수 선언문 방식
/*
function add(n1,n2){
    return n1 + n2;
}*/

// 함수 표한식 방식
/*

const add = function (n1,n2){
    return n1 + n2;
};
*/

// 화살표 함수 방식 (ES6)  function은 빼고 => 대체 가능
//함수가 한줄이면 중괄화,리턴 제거 가능
const add =  (n1,n2) => n1 + n2;

const r1 = add(10,20)
console.log(`r1: ${r1}`);

const isEven = (n) => n % 2 === 0;
console.log(isEven(25));

// 파라미터가 하나 일때 () 생략 가능 없을때는 ()써야함
const sayHello = nickName => console.log(`${nickName}님 안녕~`);
sayHello(`크룽이`);

// arf 화살표 함수

const pow = n => n ** 2;
// 화살표 함수도 호이스팅 안됨
const r2 = pow(3);
console.log(`r2 : ${r2}`);


