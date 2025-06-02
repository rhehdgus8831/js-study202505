// 우리 집 강아지 2마리 - 초코, 해피
let dogName1 = '초코';
let dogName2 = '해피';
let dogAge1 = 3;
let puppyAge2 = 5;
let tall1 = 30;
let height2 = 45;
let inject = false;
let inject2 = true;

// 객체
let myDog1 = {
    name: `초코`,
    age: 3,
    tall: 30,
    weight: 10,
    injection: false,
    vegetarian: true,
    favorites: [`산책`, `간식`]
};

let myDog2 = {
    name: `해피`,
    age: 5,
    tall: 45,
    weight: 14,
    favorites: [`꼬리흔들기`, `뒷발로까기`,`초코괴롭히기`],
    injection: true,
    vegetarian: false
};

// 객체 프로퍼티 참조법
console.log(myDog1.name);
console.log(myDog2.name);
console.log(myDog2.age);

console.log(typeof myDog1);
console.log(typeof myDog1.name);
console.log(typeof myDog1.injection);
console.log(typeof myDog1.favorites);
console.log(typeof myDog1.favorites[1]);


console.log('================================')

// 프로퍼티 참조법 2

console.log(myDog2[`name`]);
console.log(myDog2[`age`]);

// 변수로 지정했을때는 ``를 뺴고 입력이 가능하지만
// 변수이름이 아닌 키이름을 넣으려면 ``을 넣어야한다 ( []사용 시 )
let height = `tall`
console.log(myDog1[height]);


let myCat = {
    name: `나비`,
    age: 4,
    'hobby': '시비걸기'
};

console.log(myCat.hobby);
