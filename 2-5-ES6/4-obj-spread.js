

const person = {
    name : `홍길동`,
    age : 30
};

// 복사하기
const copyPerson = {...person};

person.age = 40;
person.occupation = `개발자`

console.log(person);
console.log(copyPerson);

console.log('================================')


// age가 수정됨
const newPerson = {
    ...person,
    hobbies : [`산책`,`풋살`],
    age: 20
};
console.log(newPerson);