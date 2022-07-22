import { convertStringToSplitArray, hasEmpty, isPositiveNumber } from './util.js';

export class GameUi {
  constructor() {
    this.RACING_FORM = document.querySelector('#racing-form');
    this.CAR_NAMES_INPUT = document.querySelector('#car-names-input');
    this.CAR_NAMES_SUBMIT = document.querySelector('#car-names-submit');
    this.RACING_COUNTER_INPUT = document.querySelector('#racing-count-input');
    this.RACING_COUNTER_SUBMIT = document.querySelector('#racing-count-submit');
    this.RACING_RESULT = document.querySelector('#racing-result');
    this.RACING_WINNER = document.querySelector('#racing-winners');
  }

  /**
   * RACING_FORM 이 제출 되었을 때 인풋을 실행
   */
  initialize() {
    this.RACING_FORM.onsubmit = (e) => { e.preventDefault(); };
    this.RACING_WINNER.innerHTML = '';
  }

  /**
   * CAR_NAMES_SUBMIT 을 누르면 callback을 호출
   * @param {function} callback
   */
  setCarNamesUpdateHandler(callback) {
    this.CAR_NAMES_SUBMIT.onclick = (e) => {
      e.preventDefault();
      const input = this.CAR_NAMES_INPUT.value;
      const validationResult = this.validateCommaSeparatedInput(input);
      if (validationResult) {
        this.alertMessages(validationResult);
        return;
      }
      const carNames = input.split(',');
      callback(carNames);
    };
  }

  /**
   * RACING_COUNTER_SUBMIT 을 누르면 callback을 호출
   * @param {function} callback
   */
  setCountUpdateHandler(callback) {
    this.RACING_COUNTER_SUBMIT.onclick = (e) => {
      e.preventDefault();
      const count = Number(this.RACING_COUNTER_INPUT.value);
      if (!isPositiveNumber(count)) {
        alert('시도 횟수는 0보다 커야합니다');
        return;
      }
      if (!Number.isInteger(count)) {
        alert('시도 횟수는 소수점을 포함할 수 없습니다');
        return;
      }
      callback(count);
    };
  }

  /**
   * 스트링을 받아서 화면에 출력하는 함수
   * @param {string} carName
   * @param {number} carPosition
   */
  showResult(carName, carPosition) {
    const resultElement = document.createElement('p');
    const name = document.createTextNode(`${carName}: `);
    const position = document.createTextNode(this.getPosition(carPosition));
    resultElement.appendChild(name);
    resultElement.appendChild(position);
    this.RACING_RESULT.appendChild(resultElement);
  }

  /**
   * 포지션 정보를 받아 출력할 스트링을 반환
   * @param {number} carPosition
   * @return {string}
   */
  getPosition(carPosition) {
    let position = '';
    if (carPosition !== 0) {
      position = '-'.repeat(carPosition);
    }
    return position;
  }

  /**
   * 인풋을 받아서 우승자란에 출력
   * @param {Car} winner
   */
  showWinner(winner) {
    if (this.RACING_WINNER.innerHTML === '') {
      this.RACING_WINNER.innerHTML = this.RACING_WINNER.innerHTML + winner.name;
      return;
    }
    this.RACING_WINNER.innerHTML = `${this.RACING_WINNER.innerHTML}, ${winner.name}`;
  }

  /**
   * 사용자에게 오류를 보여줍니다.
   * @param {string || string[]} message
   */
  alertMessages(message) {
    if (typeof message === 'string') {
      alert(message);
      return;
    }
    alert(message.join('\n'));
  }

  /**
   * input form 으로 입력된 값이 올바른 comma-separated format 인지 확인
   * @param input
   * @return {undefined | string[]} validation 이 실패한 상세 오류 메세지
   */
  validateCommaSeparatedInput(input) {
    const results = [];
    if (!input.includes(',')) {
      results.push(', 를 사용해서 구분해주세요');
    }
    if (hasEmpty(convertStringToSplitArray(this.CAR_NAMES_INPUT.value, ','))) {
      results.push('값의 양 끝에 , 가 있는지 확인해주세요');
    }
    if (results.length === 0) {
      return undefined;
    }
    return results;
  }
}
