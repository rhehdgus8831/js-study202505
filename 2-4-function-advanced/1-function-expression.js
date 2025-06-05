
multiply(20,10);

// 함수 선언식 : 호출보다 정의가 아래에 있어도 정상 작동
// hoisting : 함수 정의식이 실행시점에 맨위로 끌어올려짐
function multiply(n1, n2) {
    console.log(`곱셈!`);
}

// 함수 표현식 (표현식은 hoisting 안됨)
const add = function (n1,n2){
    console.log(`덧셈`);
    return n1 + n2;
};
const result = add(10,20);
console.log( `result : ${result}` );

console.log('================================')

console.log(typeof add);

const moolty = multiply; // ()가 있으면 함수 호출    없으면 주소값(함수의 참조)을 옮김

moolty(50,20); // 함수의 참조값 변경: 함수 이름을 바꿈

const log = console.log;
log(`메롱메롱`);

const rr = Math.random;
const rn = rr();
console.log(`rn : ${rn}`);

const plus = add;
const r2 =plus(50,20);
console.log(typeof r2);

console.log('================================')

const arr = [
    10,
    `hello`,
    true,
    [1,2,3],
    {age: 3, name: `영희`},
    add(10,20), // 배열에 숫자를 저장
    add, // 배열의 함수를 저장
    function (n1,n2){
    return n1 - n2;
    }
];

console.log(arr.length);
console.log(typeof arr[6]);
console.log(arr[2]); // true
console.log(arr[3][1]); // 2
console.log(arr[4].age); // 3
console.log(arr[4].name); // 영희
console.log(arr[6](10,45)); // 55
console.log(arr[7](100,70)); // 30

const minus = arr[7];
const r3 = minus(50,34);
console.log(`r3 : ${r3}`);

console.log('================================')

const obj = {
    name: `나비`,
    age: 5,
    injection: true,
    favorites: [`산책,공놀이`],
    owner: {
        name: `홍길동`,
        age: 30
    },
    sleep: function (){
        console.log(`쿨쿨 잡니다.`);
    },
    plus: add

};

obj.sleep()
const r4 = obj.plus(10,20);

// 배열의 비밀 : 사실 배열은 객체다.
const array ={
    0:`짜장면`,
    1:`탕수육`,
    2:`볶음밥`,
   //  length:3
   // pop: function () {},
   // push: function (…items) {}   배열에 이런새끼들이 숨어있었던 거임(기본 기능)
};






























