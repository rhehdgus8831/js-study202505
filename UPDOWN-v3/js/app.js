// 요소 가져오기
let $begin1 = document.getElementById('begin');        // 범위 시작
let $end100 = document.getElementById('end');          // 범위 끝
const $chancesLeft = document.getElementById('chances-left'); // 남은 기회
const $form = document.getElementById('guess-form');   // 폼
const $input = document.getElementById('guess-input');  // 입력창
const $feedback = document.getElementById('feedback');     // 피드백 문구
const $historyList = document.getElementById('history-list'); // 기록 리스트
const $modal = document.getElementById('finish-modal'); // 종료 모달
const $finishTitle = document.getElementById('finish-title');
const $finishText = document.getElementById('finish-text');
const $restartBtn = document.getElementById('restart-button');

//css 컬러 선언
const rootStyles = getComputedStyle(document.documentElement);
const dangerColor = rootStyles.getPropertyValue('--danger-color').trim();
const warningColor = rootStyles.getPropertyValue('--warning-color').trim();
const primaryColor = rootStyles.getPropertyValue('--primary-color').trim();
const successColor = rootStyles.getPropertyValue('--success-color').trim();

// 정답 및 카운터
let secretNumber;
let chances = 10;

// 페이지 로드시 게임 초기화 로직
function initGame() {
    // 1~100 난수 설정
    secretNumber = Math.floor(Math.random() * 100) + 1;
    chances = 10;
    $begin1.textContent = '1';
    $end100.textContent = '100';
    $chancesLeft.textContent = chances;
    $feedback.textContent = '추리를 시작하세요!';
    $historyList.innerHTML = '';
    $modal.classList.remove('show');
    console.log(secretNumber);
}



$form.addEventListener('submit', e => {
// 모달이 떴을 경우 인풋에 포커스 되지 않도록
    if ($modal.classList.contains('show')) {
        return;
    }
// 폼 영역 리로드 방지
    e.preventDefault();

    // 최소값 최대값 입력값
    const guess = Number($input.value);
    const min = Number($begin1.textContent);
    const max = Number($end100.textContent);


    // 범위 검사
    if (guess < min || guess > max) {
        alert(`범위 안의 값을 입력하세요.`);
        $input.value = '';
        $input.focus();
        return;
    }



if (secretNumber === guess) { // 정답인 경우
    $finishTitle.textContent = `Congratulation!`;
    $finishTitle.style.color = successColor;
    $finishText.textContent = `정답은 ${secretNumber}였습니다!`;
    $modal.classList.add('show');

} else if (secretNumber > guess) { // UP인 경우
    $feedback.textContent = 'UP!!';
    $feedback.style.color = warningColor;
    $begin1.textContent = guess + 1;

} else { // DOWN인 경우
    $feedback.classList.add('down');
    $feedback.textContent = 'DOWN!!';
    $feedback.style.color = primaryColor;
    $end100.textContent = guess - 1;
}
//
const newMin = Number($begin1.textContent)
const newMax = Number($end100.textContent)

    // min max가 같은 숫자면서 카운터가 남았을 경우 자동 정답 처리
if (chances > 0 && newMin === newMax) {
    $finishTitle.textContent = `Congratulation!`;
    $finishTitle.style.color = successColor;
    $finishText.textContent = `정답은 ${secretNumber}였습니다!`;
    $modal.classList.add('show');
    return;
}

    chances--; // 입력 횟수 1회 차감
    $chancesLeft.textContent = chances;

    // 카운터가 0이 되면 자동 실패 처리
    if (chances === 0) {
        $finishTitle.textContent = `GAME OVER`;
        $finishTitle.style.color = dangerColor;
        $finishText.textContent = `정답은 ${secretNumber}였습니다...`;
        $modal.classList.add('show');

    }

// 도전 기록
    const li = document.createElement('li');
    li.textContent = `${guess} ${$feedback.textContent}`;
    li.classList.add('history-item', guess < secretNumber ? 'up' : 'down'); // 입력값이 랜덤넘버보다 작으면 업 크면 다운
    $historyList.prepend(li); // 앞쪽으로 쌓아 새로운 기록이 위에 오게

}
)
;
// 버튼 클릭시 initGame 함수로 게임 다시 시작
$restartBtn.addEventListener('click', e => {
    initGame();
});

// 게임을 초기화
initGame();

