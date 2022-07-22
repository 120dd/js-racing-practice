import { Validation } from './validation.js';
import { Util } from './util.js';

const validation = new Validation();
const util = new Util();

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
      if (!this.validateNames()) {
        return;
      }

      const carNames = this.CAR_NAMES_INPUT.value.split(',');
      callback(carNames);
      this.alertMessage('차량 설정이 완료되었습니다');
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
      if (!util.isPositiveNumber(count)) {
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
   * validation 에 실패할 경우 오류 메세지를 사용자에게 보여줍니다.
   * @param {boolean || function} isValidChecker
   * @param {string} message
   * @return {boolean}
   */
  alertIfValidationFailed(isValidChecker, message) {
    if (typeof isValidChecker === 'boolean' && !isValidChecker) {
      this.alertMessage(message);
      return true;
    }
    if (typeof isValidChecker !== 'boolean' && !isValidChecker()) {
      this.alertMessage(message);
      return true;
    }
    return false;
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
   * @param {string} message
   */
  alertMessage(message) {
    alert(message);
  }

  /**
   * 차량 이름 유효성 검사하는 함수
   * @return {boolean}
   */
  validateNames() {
    if (this.alertIfValidationFailed(util.hasTarget(this.CAR_NAMES_INPUT.value, ','), ', 를 사용해서 구분해주세요')) {
      return false;
    }
    if (this.alertIfValidationFailed(validation.checkCarNameLength(this.CAR_NAMES_INPUT.value), '차량의 이름은 5 글자 까지만 가능합니다')) {
      return false;
    }
    if (this.alertIfValidationFailed(!util.isDuplicate(util.convertStringToSplitArray(this.CAR_NAMES_INPUT.value, ',')), '차량의 이름이 중복되었습니다')) {
      return false;
    }
    if (this.alertIfValidationFailed(!util.hasEmpty(util.convertStringToSplitArray(this.CAR_NAMES_INPUT.value, ',')), '값의 양 끝에 , 가 있는지 확인해주세요')) {
      return false;
    }
    return true;
  }
}
