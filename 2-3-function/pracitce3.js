//result에는 56이 리턴되어야 함.

function min2(n1, n2) {
    let min = n1

    if (n2 < min) {
        min = n2;
    }
    return min;
}

let result1 = min2(131, 56);
console.log(`result1: ${result1}`);


// 셋중에 가장 작은 수 50이 result에 저장되어야 함.

function min3(n1, n2, n3) {
    let min = n1;

    if (n2 < min) {
        min = n2;
    }
    if (n3 < min) {
        min = n3;
    }
    return min;
}

let result2 = min3(120, 50, 99);
console.log(`result2: ${result2}`);

// 숫자 1개를 전달하면 해당 숫자가 짝수인지 판별하는 함수
// 24를 전달하면 true리턴, 홀수를 전달하면 false리턴,
// 단, 0은 짝수취급

function isEven(n) {
    let number = n;
    if(n % 2 === 0 ){
        number = true
    }
    if(n % 2 === 1){
        number = false
    }
    return number;
}

let result3 = isEven(3);
console.log(`result3: ${result3}`);


// result4에는 -1000이 저장되어야 함.

function min(...numbers) {
    return Math.min(...numbers);
}

let result4 = min(9, 76, -90, -1000, 555, 780);
console.log(`result4: ${result4}`);