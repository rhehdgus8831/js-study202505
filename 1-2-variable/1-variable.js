
let apple = 3 * 5;

console.log(apple + 3);

let myName = "파스타";

console.log(myName);


// 변수의 값은 변경이 가능하다.
apple = 100;
console.log(apple + 3); //  103
console.log(apple);   // 100

apple = apple +3;
console.log(apple);  //103

//  변수의 이름을 지을 때 주의사항

let friendName3;  // 관례: camel case 띄어쓰기 대신 대문자
// let 3friendName;  이름이 숫자로 시작하면 안됨
// let friendName!;  특수문자 사용 불가 : _ $ 는 사용 가능
// let let;  예약어(키워드)는 변수이름 사용불가 ex) if catch 등

 //  변수의 선언 ( 변수를 만들었다.)
 let banana;
 let Banana;   // 대소문자를 다르게 하면 다른 변수다.

//  변수의 초기화 (initialize ) 변수를 저장하다.
banana = "맛도리 뻐네너";

//  만약 변수를 초기화 하지 않으면 undefined가 저장됨
console.log(Banana);

