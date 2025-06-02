

//               length: 배열에 저장된 데이터 수
//               index : 0   1   2   3  4   5

// 배열을 쓸때는 변수선언을 복수형으로
let numbers = [10, 20, 30, 40 ,50 ,60];

// 배열도 (object)객체와 같다 (스크립트에서만)
console.log(typeof numbers);


// 배열을 참조 - 배열의 데이터 하나하나의 접근

console.log('================================')

console.log(numbers[1]);
console.log(numbers[2] * 10); // 연산 진행 가능
console.log(numbers[0] + numbers[2]);

console.log('================================')

numbers[0] = 999;
console.log(numbers);
numbers[3]++;
console.log(numbers);

// 배열 길이 체크
console.log(numbers.length);

// 인덱스멉위 : 0 ~ N-1
//배열의 마지막 데이터 접근
const N = numbers.length;

console.log(numbers[N - 1]);


console.log('================================')
// 배열의 순회: 전체 데이터에 일일히 모두 접근


// 전통적인 반복문 순회법
for (let i = 0; i < numbers.length ; i++) {
    console.log(`${i+1}번째 요소 :  ${numbers[i]}`);
}

console.log('================================')
// 배열 전용 반복문 for ~ of   ( 모두 가져올때 사용) (짝수홀수는 사용이 안됨)
for (let n of numbers){
    console.log(`n: ${n}`);
}







