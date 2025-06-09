// 배열 정렬하기

const nums = [5, 32, 1, 23, 2, 4, 10, 65];

nums.sort((a, b) => a - b); // 오름차순 정렬
console.log(nums);

nums.sort((a, b) => b - a); // 내림차순 정렬
console.log(nums);

console.log('================================')

const foods = [`짜장면`,`랍스타`,`가오리찜`,`호빵`]

// sort 의 콜백은 비교 연산 결과 리턴값이 양수면 자리를 바꾸도록 설계되어있음
foods.sort((a,b) => { // 문자 오름차순 정렬
   if (a > b) return 1;
   else if (a < b) return -1;
   else return 0;
});
console.log(foods);







const userList = [
    {
        account: 'abc1234',
        userName: '대길이',
        job: '추노',
        address: '서울',
        hobbies: ['수영', '축구', '테니스'],
        salary: 5400000,
        age: 35,
    },
    {
        account: 'banana',
        userName: '빠나나',
        job: '과일',
        address: '서울',
        hobbies: ['푸드파이팅', '테니스'],
        salary: 9700000,
        age: 18,
    },
    {
        account: 'park1234',
        userName: '주차왕',
        job: '발렛파킹',
        address: '경기',
        hobbies: ['족구', '축구', '테니스', '영화감상'],
        salary: 3900000,
        age: 36,
    },
    {
        account: 'fire',
        userName: '불꽃남자카리스마',
        job: '게이머',
        address: '서울',
        hobbies: ['독서', '테니스'],
        salary: 1900000,
        age: 42,
    },
];

// 나이가 어린 순으로 정렬 (나이 오름차)

// userList.sort((a,b) => a.age - b.age);

// 급여가 높은 순
//userList.sort((a,b) => b.salary - a.salary);

// 이름 가나다 순
userList.sort((a,b)=>{
    if(a.userName > b.userName) return 1;
    else return -1;
})

console.log(userList);


