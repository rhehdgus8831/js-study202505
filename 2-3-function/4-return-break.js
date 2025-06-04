// return : 함수가 실행결과를 함수 밖으로 가져가는 것
//          함수를 종료하는 기능

function foo() {
    let a = 10, b = 20;
    console.log(`a: ${a}`);
    return a + b; // 리턴 밑에 코드를 쓰면 안됨

    let c = 500;
    console.log(`c: ${c}`);
}

foo();

function callYourName(name) {
    let prohibits = [`멍청이`, `바보`, `빡대가리`]; // 금지어
    if (prohibits.includes(name)) {
        console.log(`나쁜말은 쓰지마세요`);
        return; // 함수에서는 브레이크처럼 사용 가능
    }
    console.log(`${name}님 안녕`);
}

callYourName(`뽀로로`);
callYourName(`멍청이`);
callYourName(`빡대가리`);

console.log('================================');

function loop(n) {
    for (let i = 0; i < 5; i++) {
        if(n ===4){
            console.log(`break!`);
            return; // 브레이크는 반복문만 죽이지만 리턴은 함수 전체 코드를 죽임
        }
        console.log(`반복문실행: ${i}`);
    } // end for
    console.log(`수고하셨어요`);
} // end function

loop(4);

console.log('================================')

// 매개변수는 여러 개일 수 있지만 리턴값은 오직 하나 !
//f(x) = 2a + 3b
function add(n1,n2){
    return n1 + n2;
}

// 숫자 2개를 전달하면 두 수의 합,차,곱, 나눗셈의 결과를 모두 리턴

function operate(n1 , n2){
    // return [addResult,subResult,mulResult,divResult];
    return{
        add: n1 + n2,
        sub: n1 - n2,
        multi: n1 * n2,
        divide: n1 / n2
    };
}

let results =operate(20,10)
console.log(`덧셈: ${results.add}`);
console.log(`뺄셈: ${results.sub}`);
console.log(`곱셈: ${results.multi}`);
console.log(`나눗셈: ${results.divide}`);

