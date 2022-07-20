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
  }

  /**
   * CAR_NAMES_SUBMIT 을 누르면 callback을 호출
   * @param {function} callback
   */
  setCarNamesUpdateHandler(callback) {
    this.CAR_NAMES_SUBMIT.onclick = (e) => {
      e.preventDefault();
      const carNames = this.CAR_NAMES_INPUT.value.split(',');
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
   * @param {string} winner
   */
  showWinner(winner) {
    this.RACING_WINNER.innerHTML = winner;
  }
}
