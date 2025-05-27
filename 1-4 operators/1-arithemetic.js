console.log(3 + 5 * 2);


// js는 나눗셈 수행 시 실수 나눗셈을 수행 (소수점이 나옴)
console.log(27/5);

//  몫만 도출
console.log(Math.floor(27 / 5));

//  나머지 도출
console.log( 27 % 5);

//  앞이 크면 앞 숫자가 그대로 나옴
console.log(4 % 10);
// 연산 불가
console.log(10 % 0);
// 몫 0 나머지 0
console.log(0 % 10 );

//  제곱 연산
console.log(3 ** 2);

console.log( "-----------------------")

// 증감 연산자

let x =3;
x++;
x--;
--x;
console.log(`x: ${x}`);

// 전위 연산 , 후위 연산
let n1 = 10;
//  뒤에 있는 ++보다 먼저 넘어감
let n2 = n1++;
console.log(`n1 : ${n1}, n2: ${n2}`);


let n3 = 10;
//  ++가 앞에 있으면 더하고 넘어감
let n4 = ++n3;
console.log(`n3 : ${n3}, n4: ${n4}`);



