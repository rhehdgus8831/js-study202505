let weekDay = '수요일';

switch (weekDay) {
 // case에는 변수 말고 상수만 사용
    case '월요일':  case 'Monday': // 이런식으로 브레이크를 안 걸고 복수로 case 지정가능
        console.log('새로운 한주가 시작되었습니다.');
        break; // 코드 흘러내림 방지
    case '화요일':
        console.log('오늘도 좋은 하루');
        break;
    case '수요일':
        console.log('절반 왔습니다!');
        break;
    case '목요일':
        console.log('거의 다와가요!');
        break;
    case '금요일':
        console.log('불금');
        break;
    default:
        console.log('주말입니다. 푹 쉬세요');
        // 보통 제일 밑에 쓰니 break; 안써도 됨 (어떤 값도 해당대지 않을 때 실행)
}


/*
if (weekDay === '월요일') {
    console.log(`새로운 한 주가 시작되었습니다.`);
}else if (weekDay === '수요일') {
    console.log('주중의 절반을 넘었습니다. 조금만 더 파이팅!');
}else if (weekDay === '금요일') {
    console.log('주말이 코앞입니다. 신나는 하루되세요!');
}
*/
