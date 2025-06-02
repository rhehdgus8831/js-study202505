

let foods = [`닭꼬치`,`볶음밥`,`족발`,`파스타`];

// indexOf() : 배열의 특정 요소가 몇번 인덱스에 있는지 알려줌

let idx = foods.indexOf(`볶음밥`);
console.log(`idx : ${idx}`);  // 요소가 없으면 -1 로 보임

// 음식목록에서 족발을 찾아서 보쌈으로 바꿔줘

foods[foods.indexOf(`족발`)] = `보쌈`
console.log(foods);

// includes() = 배열의 특정 요소가 있는지 확인함

let flag = foods.includes(`파스타`);
console.log(`flag : ${flag}`);


// 음식목록에 파스타가 있다면~
if (foods.includes(`파스타`)){}

console.log('================================')

// slice() : 배열을 원하는 만큼 분할해서 복사배열로 반환
let numbers = [10, 20, 30, 40, 50, 60];

let sliceNumbers = numbers.slice(1,3); // (이상,미만)
console.log(`slice: `, sliceNumbers );
console.log(`origin:` , numbers);// 원본을 유지함


console.log(numbers.slice(3)); // 하나만 쓰면 3번 부터 끝까지
console.log(numbers.slice()); // 빈칸일 경우 전체 복사
