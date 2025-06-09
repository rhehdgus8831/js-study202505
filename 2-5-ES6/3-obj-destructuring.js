const student = {
    stuName: `뽀로로`,
    age: 5,
    birthday: `2020-01-01`
};

/*const name = student.stuName;
const age = student.age;
const birth = student.birthday;   */

const stuName = `김철수`;

// 반드시 키 이름으로
const {stuName: name, age, birthday} = student;


console.log(`학생의 이름은 ${stuName}이고, 나이는 ${age}살이고, 생일은 ${birthday}입니다.`);

console.log('================================');

const divStyle = {
    'font-size': '16px',
    'border-radius': '50%'
};
// console.log(divStyle[`font-size`]);

const {'font-size': fontSize, 'border-radius': radius} = divStyle;
console.log(fontSize);
console.log(radius);

console.log('================================');

function myPetInfo({name, age}) {
    console.log(`우리 애완동물의 이름은 ${name}입니다.`);
    console.log(`우리 애완동물의 나이는 ${age}살입니다.`);
}

// 재활용 하기위해서 변수에 담아주기
const cat = {
    name: `나비`,
    age: 7,
    kind: `러시안블루`,
    injection: true
};
myPetInfo(cat);


// 변수에 백업하지 않으면 재활용 불가
myPetInfo({
    name: `초코`,
    age: 3
});

const {kind,injection,...basicInfo} = cat;

console.log(basicInfo);
