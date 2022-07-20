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

  initialize() {
    this.RACING_FORM.onsubmit = (e) => { e.preventDefault(); }
  }

  /**
   * CAR_NAMES_INPUT 의 value 를 리턴
   * @return {string}
   */
  carNamesInputValue() {
    return this.CAR_NAMES_INPUT.value;
  }

  /**
   * CAR_NAMES_SUBMIT 을 클릭했을 때 인풋을 실행
   * @param {function} fn
   */
  carsNamesSubmitHandler(fn) {
    this.CAR_NAMES_SUBMIT.onclick = fn;
  }

  /**
   * RACING_COUNTER_INPUT 의 value 를 리턴
   * @return {string}
   */
  racingCountInputValue() {
    return this.RACING_COUNTER_INPUT.value;
  }

  /**
   * RACING_COUNTER_SUBMIT 을 클릭했을 때 인풋을 실행
   * @param {function} fn
   */
  racingCounterSubmitHandler(fn) {
    this.RACING_COUNTER_SUBMIT.onclick = fn;
  }

  /**
   * 스트링을 받아서 화면에 출력하는 함수
   * @param {string} carName
   * @param {number} carPosition
   */
  showResult(carName, carPosition) {
    const resultElement = document.createElement('p');
    const name = document.createTextNode(`${carName}: `);
    let positon = '';
    if (carPosition !== 0) {
      positon = '-'.repeat(carPosition);
    }
    const position = document.createTextNode(positon);
    resultElement.appendChild(name);
    resultElement.appendChild(position);
    this.RACING_RESULT.appendChild(resultElement);
  }

  /**
   * 인풋을 받아서 우승자란에 출력
   * @param {string} winner
   */
  showWinner(winner) {
    this.RACING_WINNER.innerHTML = winner;
  }
}
