const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let Answer = createAnswer();
    inputNumber(Answer);
  }
}

function createAnswer() {
  let answer = [];
  while (answer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!answer.includes(number)) {
      answer.push(number);
    }
  }
  return answer;
}

// function inputNumber() {
//   MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (inputNum) => {
//     const validInput = validNumber(inputNum);
//   });
// }

function validNumber(inputNum) {
  if (inputNum.includes(0)) throw new Error('0을 제외한 숫자를 입력해주세요.');
  if (new Set(inputNum).size !== 3) throw new Error('중복되지 않게 입력해주세요.');
  if (inputNum.map(Number).includes(NaN)) throw new Error('숫자만 입력해주세요.');
  if (inputNum.length !== 3) throw new Error('3자리 숫자를 입력해주세요.');

  return inputNum;
}
module.exports = App;
