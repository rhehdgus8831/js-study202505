
for (let i = 0; i < 3; i++) { // 3번 반복
    console.log(`hello`);
    for (let j = 0; j < 4; j++) {   // 3*4번 반복
        console.log(`bye - (${i},${j})`);
        for (let k = 0; k < 2; k++) { //2번
            // code 3*4*2반복
        }
        // code 3*4반복
    }
    // code 3반복
}
// code 1반복



/*
// 구구단 2단 출력
for(let level   = 2; level <= 9; level++) {
    console.log(`======== 구구단 ${level}단 ========`);
    for (let line = 1; line <= 9; line++) {
        console.log(`* ${level} x ${line} = ${level * line}`);
    }
    console.log(`===============`);
}

// 2단 밑에 3단 출력
*/

