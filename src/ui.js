export class GameUi {
  constructor() {
    this.RACING_FORM = document.querySelector('#racing-form');
    this.CAR_NAMES_INPUT = document.querySelector('#car-names-input');
    this.CAR_NAMES_SUBMIT = document.querySelector('#car-names-submit');
    this.RACING_COUNTER_INPUT = document.querySelector('#racing-count-input');
    this.RACING_COUNTER_SUBMIT = document.querySelector('#racing-count-submit');
    this.RACING_WINNER = document.querySelector('#racing-winners');
  }

  racingFormSubmit(fn) {
    this.RACING_FORM.onsubmit = fn;
  }

  carNamesInputValue() {
    return this.CAR_NAMES_INPUT.value;
  }

  carsNamesSubmitHandler(fn) {
    this.CAR_NAMES_SUBMIT.onclick = fn;
  }

  racingCountInputValue() {
    return this.RACING_COUNTER_INPUT.value;
  }

  racingCounterSubmitHandler(fn) {
    this.RACING_COUNTER_SUBMIT.onclick = fn;
  }
}
